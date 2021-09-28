import { ethers } from 'ethers';
import Abi from '../abi/profit-abi.json';
import Config from '../config';

export async function getContract() {
  const deployedAddress = Config.CONTRACT_ADDRESS_PROFIT;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  return new ethers.Contract(deployedAddress, Abi, signer);
}

function allocation(contract) {
  return contract.allocation();
}

function withdrawProfit(contract, address, amount) {
  return contract.withdrawProfit(address, amount);
}

function setAmount(contract, amount, startQuarter, endQuarter) {
  return contract.setAmount?.(amount, startQuarter, endQuarter);
}

export default {
  allocation,
  withdrawProfit,
  setAmount,
};
