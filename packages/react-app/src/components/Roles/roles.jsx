import React, { useEffect, useState, useContext } from 'react';
import Web3Service from '../../services/web3-service';
import { ContractContext } from '../../containers/contract-provider';
import FinancialRole from '../../pages/FinancialRolePage/financial-role-page';
import FreakRole from '../../pages/FreakRolePage/freak-role-page';
import GuestRole from '../../pages/GuestRolePage/guest-role-page';
import RoleRoute from '../../containers/role-route-container';
import RoleRouter from '../../containers/role-router-container';

function RolePageSwitcher() {
  const { contractFreak } = useContext(ContractContext);
  const [ financial, setFinancial ] = useState(false);
  const address = Web3Service.getAddress();
  const freak = true;

  useEffect(() => {
    function checkFinancial() {
      contractFreak.isFinancial(address, { gasLimit: 999999 })
        .then(setFinancial)
        .catch((error) => {
          console.error(error);
        });
    }
    if (contractFreak) {
      checkFinancial();
    }
  });

  function isGuest() {
    return !financial && !freak;
  }

  return (
    <RoleRouter>
      <RoleRoute isMatch={ financial }>
        <FinancialRole />
      </RoleRoute>
      <RoleRoute isMatch={ freak }>
        <FreakRole />
      </RoleRoute>
      <RoleRoute isMatch={ isGuest() }>
        <GuestRole />
      </RoleRoute>
    </RoleRouter>
  );
}

export default RolePageSwitcher;
