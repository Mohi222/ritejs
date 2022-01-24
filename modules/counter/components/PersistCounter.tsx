import { ActionIcon, Button, Group, Text } from "@mantine/core";
import React from "react";
import create from "zustand";
import { persist } from "zustand/middleware";
import shallow from "zustand/shallow";

export type CounterStore = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

export const useCounterStore = create<CounterStore>(
  persist(
    (set, get) => ({
      count: 0,
      increase: () => set((state) => ({ count: state.count + 1 })),
      decrease: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: "count-storage",
      getStorage: () => localStorage,
    }
  )
);

const PersistCounter = () => {
  const [count, increase, decrease] = useCounterStore((state) => [
    state.count,
    state.increase,
    state.decrease,
  ]);
  return (
    <Group>
      <Text>Count: {count}</Text>
      <ActionIcon variant="outline" onClick={increase} radius={999}>
        +
      </ActionIcon>
      <ActionIcon variant="outline" onClick={decrease} radius={999}>
        -
      </ActionIcon>
    </Group>
  );
};

export default PersistCounter;
