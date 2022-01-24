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
              <code>/components/PersistCounter.tsx</code>
              <PersistCounter />
            </Group>
          </Grid.Col>
          <Grid.Col span={4}>
            <Group direction="column" align="center">
              <Text>Atomic Counter</Text>
              <code>/components/AtomicCounter.tsx</code>
              <AtomicCounter />
              <code>/components/AtomicDisplay.tsx</code>
              <AtomicDisplay />
            </Group>
          </Grid.Col>
        </Grid>
      </Card>
    </Container>
  );
}
