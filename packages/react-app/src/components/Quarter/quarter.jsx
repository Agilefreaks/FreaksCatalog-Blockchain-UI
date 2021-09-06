import React from 'react';
import { Flex, Text, Select } from 'rimble-ui';

function Quarter() {
  const options = [
    { value: 'Q1', label: 'Q1 ' },
    { value: 'Q2', label: 'Q2 ' },
    { value: 'Q3', label: 'Q3 ' },
    { value: 'Q4', label: 'Q4 ' },
  ];

  const select = () => (
    <Select
      mr={ 3 }
      width={ 0.32 }
      options={ options }
    />
  );
  return (
    <div>
      <Flex
        mb={ 6 }
        ml={ 5 }
      >
        <Text
          mt={ 3 }
          fontSize={ 4 }
        >
          Starting Quarter:&nbsp;
          { select() }
        </Text>
        <Text
          mt={ 3 }
          fontSize={ 4 }
        >
          Ending Quarter:&nbsp;
          { select() }
        </Text>
      </Flex>
    </div>
  );
}

export default Quarter;
