import React, { useEffect, useState, useContext } from 'react';
import { Flex, Box } from 'rimble-ui';
import PropTypes from 'prop-types';
import { ContractContext } from './contract-provider';
import { parseFreaks } from '../helpers/contract-parser';
import FreaksList from '../components/FreaksList/freaks-list';
import ProfitPie from '../components/ProfitPie/profit-pie';

function FreaksShareContainer({ amount }) {
  const [ freaks, setFreaks ] = useState([ ]);
  const { contractFreak } = useContext(ContractContext);

  useEffect(() => {
    function loadFreaks() {
      contractFreak.getFreaks()
        .then(parseFreaks)
        .then(setFreaks)
        .catch((error) => {
          console.error(error);
        });
    }
    if (contractFreak) {
      loadFreaks();
    }
  }, [ contractFreak ]);

  return (
    <Flex
      mt={ 4 }
      mr={ 7 }
    >
      <Box
        width={ 0.6 }
      >
        <FreaksList
          value={ amount }
          freaks={ freaks }
        />
      </Box>
      <Box
        width={ 0.2 }
        ml="20rem"
      >
        <ProfitPie
          freaks={ freaks }
        />
      </Box>
    </Flex>
  );
}

FreaksShareContainer.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default FreaksShareContainer;
