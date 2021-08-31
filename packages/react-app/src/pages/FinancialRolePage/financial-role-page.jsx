import React, { useState } from 'react';
import AmountShared from '../../components/AmountShared/amount-shared';
import FreakShareContainer from '../../containers/freaks-shares-container';

function FinancialRole() {
  const [ amount, setAmount ] = useState(0);

  return (
    <div>
      <AmountShared
        onChange={ setAmount }
      />
      <FreakShareContainer
        amount={ amount }
      />
    </div>
  );
}

export default FinancialRole;
