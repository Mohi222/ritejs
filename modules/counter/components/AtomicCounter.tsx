import { ActionIcon, Button, Group, Text } from "@mantine/core";
import { atom, useAtom } from "jotai";
import React from "react";

export const CountAtom = atom(0);

const AtomicCounter = () => {
  const [count, setCount] = useAtom(CountAtom);

  return (
    <Group>
      <ActionIcon
        variant="outline"
        onClick={() => setCount(count + 1)}
        radius={999}
      >
        +
      </ActionIcon>
      <ActionIcon
        variant="outline"
        onClick={() => setCount(count - 1)}
        radius={999}
      >
        -
      </ActionIcon>
    </Group>
  );
};

export default AtomicCounter;
