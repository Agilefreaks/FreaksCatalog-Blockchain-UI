import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../styled-components';
import '../../freaks.css';

function Amount({ onChange }) {
  function handleChange(event) {
    const { value } = event.target;
    const parsed = parseInt(value || 0, 10);

    onChange(parsed);
  }
  return (
    <div>
      Amount to share :
      <input
        name="amount"
        type="number"
        defaultValue={ 0 }
        onChange={ handleChange }
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
