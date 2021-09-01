import React from 'react';
import { Header, Body } from './components/styled-components';
import useWeb3Modal from './hooks/useWeb3Modal';
import WalletButton from './components/WalletButton/wallet-button';
import Address from './components/Address/address';
import ContractProvider from './containers/contract-provider';
import RolePageSwitcher from './components/Roles/roles';

function App() {
  const [ provider, loadWeb3Modal, logoutOfWeb3Modal ] = useWeb3Modal();

  return (
    <div data-testid="app-wrapper">
      <Header>
        <Address
          provider={ provider }
        />
        <WalletButton
          provider={ provider }
          loadWeb3Modal={ loadWeb3Modal }
          logoutOfWeb3Modal={ logoutOfWeb3Modal }
        />
      </Header>
      <Body>
        <ContractProvider>
          <RolePageSwitcher />
        </ContractProvider>
      </Body>
    </div>
  );
}

export default App;
