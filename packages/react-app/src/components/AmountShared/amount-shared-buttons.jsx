import React, { useState, useContext } from 'react';
import { Button, Tooltip } from 'rimble-ui';
import PropTypes from 'prop-types';
import { ContractContext } from '../../containers/contract-provider';
import Web3Service from '../../services/web3-service';
import Config from '../../config';

function FinancialButtons({ amount }) {
  const callerAddress = Web3Service.getAddress();
  const profitSharingContractAddress = Config.CONTRACT_ADDRESS_PROFIT;
  const { contractUsdc } = useContext(ContractContext);
  const [ buttonState, setState ] = useState('disabled');
  const buttonApprove = 'Approve';
  const buttonWithdraw = 'Send';

  function approveTransfer() {
    contractUsdc.approve(callerAddress, amount);
    setState('');
  }

  function startTransfer() {
    contractUsdc.transferFrom(callerAddress, profitSharingContractAddress, amount);
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
