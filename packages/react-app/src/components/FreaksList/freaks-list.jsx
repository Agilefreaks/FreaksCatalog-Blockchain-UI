import React, { useEffect, useState } from 'react';
import '../../freaks.css';
import PropTypes from 'prop-types';
import useEthersContract from '../../hooks/useEthersContract';

function FreaksList({ value }) {
  const [ freaks, setFreaks ] = useState([ ]);
  const contract = useEthersContract();

  useEffect(() => {
    function parseFreaks({ _name, _scor }) {
      const names = _name.map((name) => ({ name }));

      _scor.slice(0, names.length).forEach((scor, index) => {
        names[index] = { ...names[index], share: scor };
      });

      return names;
    }

    function loadFreaks() {
      contract.getFreaks()
        .then(parseFreaks)
        .then(setFreaks)
        .catch((error) => {
          console.error(error);
        });
    }

    if (contract !== null) {
      loadFreaks();
    }
  }, [ contract ]);

  function renderFreaks(freak, index) {
    const { name, share } = freak;
    return (
      <tr key={ index }>
        <td>{ name }</td>
        <td>{ share / 10 }</td>
        <td>{ (value * share) / 1000 }</td>
      </tr>
    );
  }

  return (
    <div className="small-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Share</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          { freaks.map(renderFreaks) }
        </tbody>
      </table>
    </div>
  );
}

FreaksList.propTypes = {
  value: PropTypes.number.isRequired,
};

export default FreaksList;
