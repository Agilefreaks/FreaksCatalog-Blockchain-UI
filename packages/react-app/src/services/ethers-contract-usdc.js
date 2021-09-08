import { ethers } from 'ethers';
import Abi from '../abi/usdc-abi.json';
import Web3Service from './web3-service';
import Config from '../config';

export async function getContract() {
  const deployedAddress = Config.CONTRACT_ADDRESS_USDC;
  const providerAddress = 'http://localhost:8545';
  const provider = new ethers.providers.JsonRpcProvider(providerAddress);
  const address = Web3Service.getAddress();
  const signer = provider.getSigner(address);

  return new ethers.Contract(deployedAddress, Abi, signer);
}

function approve(contract, address, amount) {
  return contract.approve?.(address, amount);
}

function transfer(contract, address, contractAddress, amount) {
  return contract.transferFrom?.(address, contractAddress, amount);
}

export default {
  approve,
  transfer,
};
