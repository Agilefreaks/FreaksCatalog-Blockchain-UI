import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useEthersContractFreak from '../hooks/useEthersContractFreak';
import useEthersContractUsdc from '../hooks/useEthersContractUsdc';

export const ContractContext = createContext(null);

function ContractProvider({ children }) {
  const contractFreak = useEthersContractFreak();
  const contractUsdc = useEthersContractUsdc();

  return (
    <ContractContext.Provider value={ { contractFreak, contractUsdc } }>
      { children }
    </ContractContext.Provider>
  );
}

ContractProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContractProvider;
