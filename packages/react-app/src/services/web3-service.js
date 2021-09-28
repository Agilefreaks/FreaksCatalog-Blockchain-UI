function checkForEthereumObject() {
  if (typeof window.ethereum === 'undefined') {
    throw Error('You need a wallet to access this page.');
  }
}

function getAddress() {
  checkForEthereumObject();

  return window.ethereum.selectedAddress;
}

export default { getAddress };
