import { ActionIcon,
  Group,
} from '@mantine/core';
import { atom,
  useAtom } from 'jotai';
import React from 'react';

export const CountAtom = atom(0);

const AtomicCounter = () => {
  const [count,
    setCount] = useAtom(CountAtom);

  return (
    <Group>
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

export default AtomicCounter;
