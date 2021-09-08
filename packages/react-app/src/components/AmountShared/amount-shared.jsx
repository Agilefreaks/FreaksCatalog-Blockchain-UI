import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Flex, Text } from 'rimble-ui';
import FinancialButtons from './amount-shared-buttons';

function Amount({ onChange }) {
  const [ amount, setAmount ] = useState(0);
  function handleChange(event) {
    const { value } = event.target;
    const parsed = parseInt(value || 0, 10);

    onChange(parsed);
    setAmount(parsed);
  }

  return (
    <div>
      <Flex>
        <Text
          fontSize={ 5 }
          color="black"
        >
          Amount to share :&nbsp;
        </Text>
        <Input
          placeholder="USDC"
          type="number"
          onChange={ handleChange }
          required={ true }
          mr={ 3 }
        />
        <FinancialButtons
          amount={ amount }
        />
      </Flex>
    </div>
  );
}

Amount.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Amount;
