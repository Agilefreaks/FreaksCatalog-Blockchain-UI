import React from 'react';
import { Header } from './components/styled-components';
import useWeb3Modal from './hooks/useWeb3Modal';
import WalletButton from './components/WalletButton/wallet-button';
import Address from './components/Address/address';

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
    </div>
  );
}

export default App;
