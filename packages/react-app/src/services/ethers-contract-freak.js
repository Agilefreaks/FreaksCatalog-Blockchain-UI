import { ethers } from 'ethers';
import Abi from '../abi/freaks-abi.json';
import Web3Service from './web3-service';
import Config from '../config';

export async function getContract() {
  const deployedAddress = Config.CONTRACT_ADDRESS_FREAK;
  const providerAddress = 'http://localhost:8545';
  const provider = new ethers.providers.JsonRpcProvider(providerAddress);
  const address = Web3Service.getAddress();
  const signer = provider.getSigner(address);

  return new ethers.Contract(deployedAddress, Abi, signer);
}

function getFreaks(contract) {
  return contract.getFreaks?.();
}

function isFinancial(contract, address) {
  return contract?.isFinancial?.(address);
}

function isFreak(contract, address) {
  return contract?.isFreak?.(address);
}

export default {
  getFreaks,
  isFinancial,
  isFreak,
};
