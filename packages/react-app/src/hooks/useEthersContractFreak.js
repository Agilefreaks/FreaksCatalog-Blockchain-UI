import { useEffect, useState } from 'react';
import { getContract } from '../services/ethers-contract-freak';

export default function useEthersContractFreak() {
  const [ contractFreak, setContract ] = useState(null);

  useEffect(() => {
    async function loadContract() {
      const load = await getContract();
      setContract(load);
    }
    loadContract();
  }, []);

  return contractFreak;
}
