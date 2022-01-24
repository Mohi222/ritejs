import React from "react";
import {
  AtomicCounter,
  AtomicDisplay,
  PersistCounter,
  SimpleCounter,
} from "@/counter";
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
const CounterExample = () => {
  return (
    <Card>
      <Card.Section>
        <Group direction="column" align="center">
          <Title order={3}>Counter example</Title>
          <Code color="blue">modules/counter</Code>
        </Group>
      </Card.Section>
      <Grid>
        <Grid.Col span={4}>
          <Group direction="column" align="center">
            <Text>Simple Counter</Text>
            <Code>/components/SimpleCounter.tsx</Code>
            <SimpleCounter />
          </Group>
        </Grid.Col>
        <Grid.Col span={4}>
          <Group direction="column" align="center">
            <Text>Persist Counter</Text>
            <Code>/components/PersistCounter.tsx</Code>
            <PersistCounter />
          </Group>
        </Grid.Col>
        <Grid.Col span={4}>
          <Group direction="column" align="center">
            <Text>Atomic Counter</Text>
            <Code>/components/AtomicCounter.tsx</Code>
            <AtomicCounter />
            <Code>/components/AtomicDisplay.tsx</Code>
            <AtomicDisplay />
          </Group>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default CounterExample;
