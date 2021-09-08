import React, { useContext } from 'react';
import { ContractContext } from '../../containers/contract-provider';
import Web3Service from '../../services/web3-service';
import FinancialRole from '../../pages/FinancialRolePage/financial-role-page';
import FreakRole from '../../pages/FreakRolePage/freak-role-page';
import GuestRole from '../../pages/GuestRolePage/guest-role-page';
import RoleRoute from '../../containers/role-route-container';
import RoleRouter from '../../containers/role-router-container';
import EthContract from '../../services/ethers-contract-freak';

function RolePageSwitcher() {
  const contract = useContext(ContractContext);
  const address = Web3Service.getAddress();
  const financial = EthContract.isFinancial(contract, address);
  const freak = EthContract.isFreak(contract, address);

  function isGuest() {
    return !financial && !freak;
  }

  return (
    <RoleRouter>
      <RoleRoute isMatch={ !!true }>
        <FinancialRole />
      </RoleRoute>
      <RoleRoute isMatch={ !!freak }>
        <FreakRole />
      </RoleRoute>
      <RoleRoute isMatch={ isGuest() }>
        <GuestRole />
      </RoleRoute>
    </RoleRouter>
  );
}

export default RolePageSwitcher;
