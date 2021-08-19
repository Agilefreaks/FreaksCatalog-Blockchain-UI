import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useEthersContract from '../hooks/useEthersContract';

export const ContractContext = createContext(null);

function ContractProvider({ children }) {
  const contract = useEthersContract();

  return (
    <ContractContext.Provider value={ contract }>
      { children }
    </ContractContext.Provider>
  );
}

ContractProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContractProvider;
