import { Center,
  Container,
  Group,
  Space,
  Text,
  Title} from '@mantine/core';
import Counter from '../modules/counter/Counter';

import VercelLogo from "../public/vercel.svg"

const IndexPage = () => {
  return (
    <Container>
      <Group align="center" direction="column">
        <Title>Rite</Title>
        <Text>Opionitated Nextjs Starter Template</Text>
        <VercelLogo />
        <IconCarbonApps />
      </Group>
      <Space h="xl" />
      <Center>
        <Counter />
      </Center>
    </Container>
  );
};



export default IndexPage;
