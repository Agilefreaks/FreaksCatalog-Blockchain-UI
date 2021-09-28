import React, { useState } from 'react';
import AmountShared from '../../components/AmountShared/amount-shared';
import Quarter from '../../components/Quarter/quarter';
import FreakShareContainer from '../../containers/freaks-shares-container';

function FinancialRole() {
  const [ amount, setAmount ] = useState(0);

  return (
    <div>
      <AmountShared
        onChange={ setAmount }
      />
      <Quarter />
      <FreakShareContainer
        amount={ amount }
      />
    </div>
  );
}

export default FinancialRole;
