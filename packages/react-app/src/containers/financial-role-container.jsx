import React, { useState } from 'react';
import AmountShared from '../components/AmountShared/amount-shared';
import FreaksShareContainer from './freaks-shares-container';

function FinancialRole() {
  const [ amount, setAmount ] = useState(0);

  return (
    <div>
      <AmountShared
        onChange={ setAmount }
      />
      <FreaksShareContainer
        amount={ amount }
      />
    </div>
  );
}

export default FinancialRole;
