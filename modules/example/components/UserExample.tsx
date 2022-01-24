import { supabase } from "@/supabase/libs/supabaseClient";
import Account from "@/user/components/Account";
import Auth from "@/user/components/Auth";
import { Card, Code, Group, Text, Title } from "@mantine/core";
import { Session } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";

const UserExample = () => {
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  if (session) {
    return (
      <Card>
        <Card.Section>
          <Group direction="column" align="center">
            <Title order={3}>User example</Title>
            <Code color="blue">modules/user</Code>
            <Code color="blue">modules/user/Account.tsx</Code>
          </Group>
        </Card.Section>

        <Account session={session} />
      </Card>
    );
  }
  return (
    <Card>
      <Card.Section>
        <Group direction="column" align="center">
          <Title order={3}>User example</Title>
          <Code color="blue">modules/user</Code>
          <Code color="blue">modules/user/Auth.tsx</Code>
        </Group>
      </Card.Section>
      <Auth />
    </Card>
  );
};

export default UserExample;
