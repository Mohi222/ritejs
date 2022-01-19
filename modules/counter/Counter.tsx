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
  return <Group align="center" direction="column">
    <Text>Count is {count}</Text>
    <p>hm</p>
    <Group>
      <Button
        color="green"
        onClick={() => {
          return increase();
        }}
        radius="xl"
        variant='filled'
      >Increase</Button>
      <Button
        color="red"
        onClick={() => {
          return decrease();
        }}
        radius="xl"
        variant='filled'
      >Decrease</Button>
    </Group>

  </Group>;
};

export default Counter;
