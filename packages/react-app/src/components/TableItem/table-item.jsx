import React from 'react';
import PropTypes from 'prop-types';

function TableItem({ value }) {
  return (
    <div>
      { value }
      :
      { 45000 * value }
    </div>
  );
}

// Address.propTypes = {
//   provider: PropTypes.instanceOf(Web3Provider),
// };

// Address.defaultProps = {
//   provider: null,
// };

export default TableItem;
