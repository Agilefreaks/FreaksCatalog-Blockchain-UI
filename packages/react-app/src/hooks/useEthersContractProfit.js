import { useEffect, useState } from 'react';
import { getContract } from '../services/ethers-contract-profit';

export default function useEthersContractProfit() {
  const [ contractProfit, setContract ] = useState(null);

  useEffect(() => {
    async function loadContract() {
      const load = await getContract();
      setContract(load);
    }
    loadContract();
  }, []);

  return contractProfit;
}
