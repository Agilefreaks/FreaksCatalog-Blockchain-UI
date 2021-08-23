import { useEffect, useState } from 'react';
import { getContract } from '../services/ethers-contract';

export default function useEthersContract() {
  const [ contract, setContract ] = useState(null);

  function loadContract() {
    getContract().then(setContract);
  }

  useEffect(loadContract, []);

  return contract;
}
