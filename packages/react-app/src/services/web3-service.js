function checkForEthereumObject() {
  if (typeof window.ethereum === 'undefined') {
    throw Error('ethereum not defined');
  }
}

function getAddress() {
  checkForEthereumObject();

  return window.ethereum.selectedAddress;
}

export default { getAddress };
