import React, { useState } from 'react';
import { Header, Body } from './components/styled-components';
import useWeb3Modal from './hooks/useWeb3Modal';
import WalletButton from './components/WalletButton/wallet-button';
import Address from './components/Address/address';
import AmountShared from './components/AmountShared/amount-shared';
import FreaksList from './components/FreaksList/freaks-list';
import ContractProvider from './containers/contract-provider';

function App() {
  const [ amount, setAmount ] = useState(0);
  const [ provider, loadWeb3Modal, logoutOfWeb3Modal ] = useWeb3Modal();

  return (
    <div>
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
          <AmountShared
            onChange={ setAmount }
          />
          <FreaksList
            value={ amount }
          />
        </ContractProvider>
      </Body>
    </div>
  );
}

export default App;
