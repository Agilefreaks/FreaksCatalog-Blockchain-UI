import { useEffect, useState } from 'react';
import { getContract } from '../services/ethers-contract';

export default function useEthersContract() {
  const [ contract, setContract ] = useState(null);

  useEffect(() => {
    async function loadContract() {
      const load = await getContract();
      setContract(load);
    }
    loadContract();
  }, []);

  return contract;
}
