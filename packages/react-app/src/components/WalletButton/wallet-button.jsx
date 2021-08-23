import React from 'react';
import PropTypes from 'prop-types';
import { Web3Provider } from '@ethersproject/providers';
import { Button } from 'rimble-ui';

function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  function handleLoginButtonClick() {
    if (!provider) {
      loadWeb3Modal();
    } else {
      logoutOfWeb3Modal();
    }
  }

  return (
    <Button
      mr={ 3 }
      ml={ 3 }
      onClick={ handleLoginButtonClick }
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
