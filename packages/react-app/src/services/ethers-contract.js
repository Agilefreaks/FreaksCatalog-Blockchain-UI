import { ethers } from 'ethers';
import Abi from '../abi/freaks-abi.json';
import Web3Service from './web3-service';

export async function getContract() {
  const deployedAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
  const localhost = 'http://localhost:8545';
  const provider = new ethers.providers.JsonRpcProvider(localhost);
  const address = Web3Service.getAddress();
  const signer = provider.getSigner(address);

  return new ethers.Contract(deployedAddress, Abi, signer);
}

function getFreaks(contract) {
  return contract.getFreaks();
}

export default {
  getFreaks,
};
