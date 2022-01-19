import { Button,
  Group,
  Text} from '@mantine/core';
import React, { useState } from 'react';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import shallow from 'zustand/shallow';

type CounterState = {
  count: number,
  decrease: () => void,
  increase: () => void,
};

export const useStore = create<CounterState>(persist(
  (set, get) => {
    return {
      count: 0,
      decrease: () => {
        return set({ count: get().count - 1 });
      },
      increase: () => {
        return set({ count: get().count + 1 });
      },
    };
  },
  {
    // unique name
    getStorage: () => {
      return sessionStorage;
    },
    // (optional) by default, 'localStorage' is used
    name: 'counter',
  },
));

const Counter = () => {
  const [count,
    increase,
    decrease] = useStore(state => {
    return [state.count, state.increase, state.decrease];
  }, shallow);
  return <Group>
    <Text>Count is {count}</Text>
    <Button onClick={() => {
      return increase();
    }}
    > + </Button>
    <Button onClick={() => {
      return decrease();
    }}
    > - </Button>

  </Group>;
};

export default Counter;
