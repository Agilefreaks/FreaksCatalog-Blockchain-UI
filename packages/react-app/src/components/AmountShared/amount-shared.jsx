import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../styled-components';
import '../../freaks.css';

function Amount({ onChange }) {
  const [ amount, setAmount ] = useState(0);
  function handleChange(event) {
    const value = event.target.value;
    setAmount(value);
    onChange(value);
  }
  return (
    <div>
      Amount to share :
      <input
        name="amount"
        type="number"
        onChange={ handleChange }
        value={ amount }
        id="textbox"
      />
      <Button>
        Send
      </Button>
    </div>
  );
}

Amount.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Amount;
