import React from 'react';
import PropTypes from 'prop-types';
import { Web3Provider } from '@ethersproject/providers';
import { Button } from '../styled-components';

function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  function ButtonClick() {
    if (!provider) {
      loadWeb3Modal();
    } else {
      logoutOfWeb3Modal();
    }
  }

  return (
    <Button
      onClick={ ButtonClick }
    >
      { !provider ? 'Connect Wallet' : 'Disconnect Wallet' }
    </Button>
  );
}

WalletButton.propTypes = {
  provider: PropTypes.instanceOf(Web3Provider),
  loadWeb3Modal: PropTypes.func.isRequired,
  logoutOfWeb3Modal: PropTypes.func.isRequired,
};

WalletButton.defaultProps = {
  provider: null,
};

export default WalletButton;
