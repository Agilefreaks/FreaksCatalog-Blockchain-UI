import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Flex, Text } from 'rimble-ui';

function Amount({ onChange }) {
  function handleChange(event) {
    const { value } = event.target;
    const parsed = parseInt(value || 0, 10);

    onChange(parsed);
  }

  return (
    <div>
      <Flex>
        <Text
          mb={ 6 }
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
        />
        <Button ml={ 3 }>Send</Button>
      </Flex>
    </div>
  );
}

Amount.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Amount;
