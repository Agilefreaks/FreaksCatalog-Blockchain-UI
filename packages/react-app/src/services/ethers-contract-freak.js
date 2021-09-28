import { ethers } from 'ethers';
import Abi from '../abi/freaks-abi.json';
import Config from '../config';

export async function getContract() {
  await window.ethereum.enable();
  const deployedAddress = Config.CONTRACT_ADDRESS_FREAK;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  return new ethers.Contract(deployedAddress, Abi, signer);
}

function getFreaks(contract) {
  return contract.getFreaks();
}

function isFinancial(contract, address) {
  return contract.isFinancial(address);
}

function getFreak(contract, address) {
  return contract.getFreak(address);
}

export default {
  getFreaks,
  isFinancial,
  getFreak,
};
