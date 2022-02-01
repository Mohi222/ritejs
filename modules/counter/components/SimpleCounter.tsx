import { ActionIcon,
  Group,
  Text } from '@mantine/core';
import React, { useState } from 'react';

const SimpleCounter = () => {
  const [count,
    setCount] = useState(0);
  return (
    <Group>
      <Text>Count: {count}</Text>
      <ActionIcon
        onClick={() => {
          setCount(count + 1);
        }}
        radius={999}
        variant="outline"
      >
        +
      </ActionIcon>
      <ActionIcon
        onClick={() => {
          setCount(count - 1);
        }}
        radius={999}
        variant="outline"
      >
        -
      </ActionIcon>
    </Group>
  );
};

export default SimpleCounter;
