import { ethers } from 'ethers';
import Abi from '../abi/freaks-abi.json';

export async function getContract() {
  const deployedAddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';
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
