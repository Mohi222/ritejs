import { Text } from '@mantine/core';
import { useAtom } from 'jotai';
import React from 'react';
import { CountAtom } from './AtomicCounter';

const AtomicDisplay = () => {
  const [count] = useAtom(CountAtom);
  return <Text>Count: {count}.</Text>;
};

export default AtomicDisplay;
