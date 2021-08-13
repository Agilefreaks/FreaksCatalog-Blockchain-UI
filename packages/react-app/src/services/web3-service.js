function getAddress() {
  return window.ethereum.selectedAddress;
}

export default { getAddress };
