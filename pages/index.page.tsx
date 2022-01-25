import CounterExample from "@/example/components/CounterExample";
import UserExample from "@/example/components/UserExample";
import { Space, Text } from "@mantine/core";
import React from "react";

export { Page };

function Page() {
  return (
    <Container>
      <Group direction="column" align="center">
        <Title>Rite</Title>
        <Text>An opinionated React starter template</Text>
      </Group>
      <Space h="xl" />
      <CounterExample />
      <UserExample />
      <h1 className="text-3xl font-bold underline text-center">
        Hello Tailwind!
      </h1>
    </Container>
  );
}
