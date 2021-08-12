import React from 'react';
import PropTypes from 'prop-types';
import { Web3Provider } from '@ethersproject/providers';
import Web3Service from '../../services/web3-service';

function Address({ provider }) {
  const address = Web3Service.getAddress();
  return (
    <div>
      { provider && (
      <span>
        Your Address is :&nbsp;
        { address }
      </span>
      ) }
    </div>
  );
}

Address.propTypes = {
  provider: PropTypes.instanceOf(Web3Provider),
};

Address.defaultProps = {
  provider: null,
};

export default Address;
