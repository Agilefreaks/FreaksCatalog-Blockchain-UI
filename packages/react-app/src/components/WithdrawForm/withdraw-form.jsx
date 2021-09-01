import React from 'react';
import { Field, Input, Flex, Text } from 'rimble-ui';

function WithdrawForm() {
  const availableAmount = 0;

  return (
    <div>
      <Text
        mt={ 3 }
        fontSize={ 5 }
      >
        Hi, Freak you can withdraw up to:&nbsp;
        { availableAmount }
        &nbsp;
        USDC
      </Text>
      <Flex
        mt={ 5 }
      >
        <Text
          mt={ 3 }
          fontSize={ 5 }
        >
          Enter the amount you wish to receive:
        </Text>
        <Field
          mt={ 2 }
          ml={ 3 }
        >
          <Input
            required={ true }
            type="number"
          />
        </Field>
      </Flex>
    </div>
  );
}

export default WithdrawForm;
