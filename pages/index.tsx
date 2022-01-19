import { Center,
  Container,
  Group,
  Space,
  Text,
  Title} from '@mantine/core';
import Counter from '../modules/counter/Counter';

const IndexPage = () => {
  return (
    <Container>
      <Group align="center" direction="column">
        <Title>Rite</Title>
        <Text>Opionitated Nextjs Starter Template</Text>
      </Group>
      <Space h="xl" />
      <Center>
        <Counter />
      </Center>
    </Container>
  );
};



export default IndexPage;
