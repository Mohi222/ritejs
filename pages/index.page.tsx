import { Space,
  Text } from '@mantine/core';
import React from 'react';
import { Link } from 'renderer/components/Link';
import CounterExample from '@/example/components/CounterExample';
import UserExample from '@/example/components/UserExample';

export { Page };

const Page = () => {
  return (
    <Container>
      <Group align="center" direction="column">
        <Title>Rite</Title>
        <Text>An opinionated React starter template</Text>
      </Group>
      <Space h="xl" />
      <CounterExample />
      <UserExample />
      <h1 className="text-3xl font-bold underline text-center">
        Hello Tailwind!
      </h1>
      <Link href="/markdown">Markdown</Link>
    </Container>
  );
};
