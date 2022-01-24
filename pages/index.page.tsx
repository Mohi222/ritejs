import CounterExample from "@/example/components/CounterExample";
import UserExample from "@/example/components/UserExample";
import {
  Card,
  Center,
  Code,
  Container,
  Divider,
  Grid,
  Group,
  Space,
  Text,
  Title,
} from "@mantine/core";
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
    </Container>
  );
}
