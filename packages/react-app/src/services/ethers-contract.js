import { ethers } from 'ethers';
import Abi from '../abi/freaks-abi.json';

export async function getContract() {
  const deployedAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
  const signer = provider.getSigner('0xBcd4042DE499D14e55001CcbB24a551F3b954096');

  return new ethers.Contract(deployedAddress, Abi, signer);
}

function getFreaks(contract) {
  return contract.getFreaks();
}

export default {
  getFreaks,
};
