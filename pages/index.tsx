import Account from "@/user/Account";
import Auth from "@/user/Auth";
import { Center, Container, Group, Space, Text, Title } from "@mantine/core";
import { Session } from "@supabase/supabase-js";
import { supabase } from "libs/supabaseClient";
import Counter from "../modules/counter/Counter";

import VercelLogo from "../public/vercel.svg";

const IndexPage = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <Container>
      <Group position="center" direction="column">
        <Title>Rite</Title>
        <Text>Opionitated Nextjs Starter Template</Text>
      </Group>
      <Space h="xl" />
      <Group position="apart">
        {session && session.user ? (
          <Account key={session.user.id} session={session} />
        ) : (
          <Auth />
        )}
        <Group>
          <Counter />
        </Group>
      </Group>
      <Space h="xl" />
    </Container>
  );
};

export default IndexPage;
