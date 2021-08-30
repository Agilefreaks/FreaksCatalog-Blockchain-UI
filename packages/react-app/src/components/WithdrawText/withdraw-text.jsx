import React from 'react';
import { Field, Input, Heading } from 'rimble-ui';

function WithdrawText() {
  return (
    <div>
      <Heading as="h4">Hi, Freak you can withdraw up to: </Heading>
      <Heading as="h5"> Enter the amount you wish to withdraw: </Heading>
      <Field>
        <Input required={ true } />
      </Field>
    </div>
  );
}

export default WithdrawText;
