import { ActionIcon,
  Group,
  Text } from '@mantine/core';
import React from 'react';
import create from 'zustand';
import { persist } from 'zustand/middleware';

export type CounterStore = {
  count: number,
  decrease: () => void,
  increase: () => void,
};

export const useCounterStore = create<CounterStore>(
  persist(
    (set) => {
      return {
        count: 0,
        decrease: () => {
          set((state) => {
            return { count: state.count - 1 };
          });
        },
        increase: () => {
          set((state) => {
            return { count: state.count + 1 };
          });
        },
      };
    },
    {
      getStorage: () => {
        return localStorage;
      },
      name: 'count-storage',
    },
  ),
);

const PersistCounter = () => {
  const [count,
    increase,
    decrease] = useCounterStore((state) => {
    return [
      state.count,
      state.increase,
      state.decrease,
    ];
  });
  return (
    <Group>
      <Text>Count: {count}</Text>
      <ActionIcon onClick={increase} radius={999} variant="outline">
        +
      </ActionIcon>
      <ActionIcon onClick={decrease} radius={999} variant="outline">
        -
      </ActionIcon>
    </Group>
  );
};

export default PersistCounter;
