import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useEthersContractFreak from '../hooks/useEthersContractFreak';
import useEthersContractUsdc from '../hooks/useEthersContractUsdc';
import useEthersContractProfit from '../hooks/useEthersContractProfit';

export const ContractContext = createContext(null);

function ContractProvider({ children }) {
  const contractFreak = useEthersContractFreak();
  const contractUsdc = useEthersContractUsdc();
  const contractProfit = useEthersContractProfit();

  return (
    <ContractContext.Provider value={ { contractFreak, contractUsdc, contractProfit } }>
      { children }
    </ContractContext.Provider>
  );
}

ContractProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContractProvider;
