import React, { useState, useContext } from 'react';
import { BigNumber } from 'ethers';
import { Button, Tooltip } from 'rimble-ui';
import PropTypes from 'prop-types';
import { ContractContext } from '../../containers/contract-provider';
import Config from '../../config';

function FinancialButtons({ amount }) {
  const usdcContractAddress = Config.CONTRACT_ADDRESS_USDC;
  const { contractUsdc, contractProfit } = useContext(ContractContext);
  const [ buttonState, setState ] = useState('disabled');
  const buttonApprove = 'Approve';
  const buttonWithdraw = 'Send';
  const power = BigNumber.from(10).pow(18);
  const bigAmount = BigNumber.from(amount).mul(power);

  function approveTransfer() {
    console.log('cash', contractUsdc.balanceOf('0x97f80a23f0f8edf33c2acbae1d517320625a9dab'));
    contractUsdc.approve(usdcContractAddress, bigAmount)
      .then(setState(''))
      .catch((error) => {
        console.error(error);
      });
  }
  function startTransfer() {
    contractProfit.allocate(bigAmount, '1609391249', '1617163649')
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <Tooltip message="You have to Approve in order to Send" placement="top">
        <Button
          mr={ 2 }
          onClick={ approveTransfer }
        >
          { buttonApprove }
        </Button>
      </Tooltip>
      <Button
        disabled={ buttonState }
        onClick={ startTransfer }
      >
        { buttonWithdraw }
      </Button>
    </div>
  );
}

FinancialButtons.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default FinancialButtons;
