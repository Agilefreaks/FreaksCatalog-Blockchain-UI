import React from 'react';
import PropTypes from 'prop-types';
import { Web3Provider } from '@ethersproject/providers';
import { EthAddress, Text, Flex } from 'rimble-ui';
import Web3Service from '../../services/web3-service';
import { AdressWrapper } from '../styled-components';

function Address({ provider }) {
  const address = Web3Service.getAddress();
  return (
    <div>
      { provider && (
        <Flex>
          <Text
            mt={ 2 }
            mr={ 2 }
            color="black"
          >
            Your Address is :
          </Text>
          <AdressWrapper>
            <EthAddress
              width="38rem"
              textLabels
              address={ address }
            />
          </AdressWrapper>
        </Flex>
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
