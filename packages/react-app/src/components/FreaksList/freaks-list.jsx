import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Table } from 'rimble-ui';
import { ContractContext } from '../../containers/contract-provider';
import { parseFreaks } from '../../helpers/contract-parser';

function toPercentage(ethValue) {
  // smart contract can't hold float so I have to divide by 10
  return ethValue / 10;
}

function calculatePercentage(percentage, value) {
  return (value * percentage) / 100;
}

function FreaksList({ value }) {
  const [ freaks, setFreaks ] = useState([ ]);
  const contract = useContext(ContractContext);

  useEffect(() => {
    function loadFreaks() {
      contract.getFreaks()
        .then(parseFreaks)
        .then(setFreaks)
        .catch((error) => {
          console.error(error);
        });
    }

    if (contract) {
      loadFreaks();
    }
  }, [ contract ]);

  function renderFreak(freak, index) {
    const { name, share } = freak;
    const sharePercentage = toPercentage(share);

    return (
      <tr key={ index }>
        <td>{ name }</td>
        <td>
          { sharePercentage }
          %
        </td>
        <td>{ calculatePercentage(sharePercentage, value) }</td>
      </tr>
    );
  }

  return (
    <Flex
      mt={ 4 }
      mr={ 7 }
    >
      <Box
        width={ 0.6 }
      >
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
      </Box>
    </Flex>
  );
}

FreaksList.propTypes = {
  value: PropTypes.number.isRequired,
};

export default FreaksList;
