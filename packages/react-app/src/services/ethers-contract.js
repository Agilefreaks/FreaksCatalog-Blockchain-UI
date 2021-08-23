import { ethers } from 'ethers';
import Abi from '../abi/freaks-abi.json';

export async function getContract() {
  const deployedAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
  const localhost = 'http://localhost:8545';
  const provider = new ethers.providers.JsonRpcProvider(localhost);
  const signer = provider.getSigner(window.ethereum.selectedAddress);

  return new ethers.Contract(deployedAddress, Abi, signer);
}

function getFreaks(contract) {
  return contract.getFreaks();
}

export default {
  getFreaks,
};
