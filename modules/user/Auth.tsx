import { useState } from "react";
import { supabase } from "libs/supabaseClient";
import { ApiError } from "@supabase/supabase-js";
import { Button, Group } from "@mantine/core";
import { Title } from "@mantine/core";
import { TextInput } from "@mantine/core";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Group direction="column" position="center" grow>
      <TextInput
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
        placeholder="Email"
        label="Email"
        required
      />
      <Button onClick={() => handleLogin(email)} loading={loading}>
        Send Magic link
      </Button>
    </Group>
  );
}
