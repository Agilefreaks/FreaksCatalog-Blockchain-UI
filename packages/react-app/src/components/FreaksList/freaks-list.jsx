import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'rimble-ui';
import './list.css';

function toPercentage(ethValue) {
  // smart contract can't hold float so I have to divide by 10
  return ethValue / 10;
}

function calculatePercentage(percentage, value) {
  return (value * percentage) / 100;
}

function FreaksList({ value, freaks }) {
  function renderFreak(freak, index) {
    const { name, share } = freak;
    const sharePercentage = toPercentage(share);

    return (
      <tr key={ index }>
        <td>{ name }</td>
        <td>
          { `${ sharePercentage } %` }
        </td>
        <td>{ calculatePercentage(sharePercentage, value) }</td>
      </tr>
    );
  }

  return (
    <div className="table-wrap">
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Share</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          { freaks.map(renderFreak) }
        </tbody>
      </Table>
    </div>
  );
}
const freakShape = {
  name: PropTypes.string,
  share: PropTypes.number,
};

FreaksList.propTypes = {
  value: PropTypes.number.isRequired,
  freaks: PropTypes.arrayOf(PropTypes.shape(freakShape)).isRequired,
};

export default FreaksList;
