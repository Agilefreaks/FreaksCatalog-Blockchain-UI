import { useEffect, useState } from 'react';
import { getContract } from '../services/ethers-contract-usdc';

export default function useEthersContractUsdc() {
  const [ contractUsdc, setContract ] = useState(null);

  useEffect(() => {
    async function loadContract() {
      const load = await getContract();
      setContract(load);
    }
    loadContract();
  }, []);

  return contractUsdc;
}
