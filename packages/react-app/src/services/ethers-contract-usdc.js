import { ethers } from 'ethers';
import Abi from '../abi/usdc-abi.json';
import Config from '../config';

export async function getContract() {
  const deployedAddress = Config.CONTRACT_ADDRESS_USDC;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  return new ethers.Contract(deployedAddress, Abi, signer);
}

function approve(contract, address, amount) {
  return contract.approve?.(address, amount);
}

export default {
  approve,
};
