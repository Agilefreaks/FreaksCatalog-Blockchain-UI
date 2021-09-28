import React, { useEffect, useState, useContext } from 'react';
import { BigNumber } from 'ethers';
import { Field, Input, Flex, Text, Button } from 'rimble-ui';
import { ContractContext } from '../../containers/contract-provider';
import Web3Service from '../../services/web3-service';

function WithdrawForm() {
  const { contractProfit, contractFreak } = useContext(ContractContext);
  const [ desiredWithdraw, setDesired ] = useState(0);
  const [ withdrawableAmount, setAmount ] = useState(0);
  const [ freakName, setName ] = useState('');
  const address = Web3Service.getAddress();

  function setDesiredValue({ target: { value = 0 } }) {
    setDesired(parseInt(value, 10));
  }

  function divideBy(under) {
    return (value) => value / under;
  }

  useEffect(() => {
    function getFreakName() {
      contractFreak.getFreak(address)
        .then(({ name }) => name)
        .then(setName)
        .catch((error) => {
          console.error(error);
        });
    }
    if (contractFreak) {
      getFreakName();
    }
  }, [ contractFreak, address ]);

  useEffect(() => {
    function checkWithdrawableAmount() {
      contractProfit.allocation()
        .then((bigValue) => bigValue.toString())
        .then((value) => parseInt(value, 10))
        .then(divideBy(10 ** 18))
        .then(setAmount)
        .catch((error) => {
          console.error(error);
        });
    }
    if (contractProfit) {
      checkWithdrawableAmount();
    }
  }, [ contractProfit ]);

  function triggerWithdraw() {
    const power = BigNumber.from(10).pow(18);
    const bigAmount = BigNumber.from(desiredWithdraw).mul(power);
    contractProfit.withdrawProfit(address, bigAmount)
      .then(setAmount(withdrawableAmount - desiredWithdraw))
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <Text mt={ 3 } fontSize={ 5 }>
        { `Hi, ${ freakName } you can withdraw up to: ${ withdrawableAmount } USDC` }
      </Text>
      <Flex mt={ 5 }>
        <Text mt={ 3 } fontSize={ 5 }>
          Enter the amount you wish to receive:
        </Text>
        <Field label="" mt={ 2 } ml={ 3 }>
          <Input required={ true } type="number" onChange={ setDesiredValue } />
        </Field>
        <Button ml={ 3 } mt={ 3 } onClick={ triggerWithdraw }>
          Withdraw
        </Button>
      </Flex>
    </div>
  );
}

export default WithdrawForm;
