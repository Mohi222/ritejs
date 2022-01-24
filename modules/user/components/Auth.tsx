import { supabase } from "@/supabase/libs/supabaseClient";
import { Button, Group, Text, TextInput } from "@mantine/core";
import { useState } from "react";
import React from "react";

const Auth = () => {
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
    <Group direction="column" position="center">
      <TextInput
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
        placeholder="Email"
        label="Email"
        autoComplete="email"
        required
      />
      <Button onClick={() => handleLogin(email)} loading={loading}>
        {loading ? "Sending..." : "Send Magic link"}
      </Button>
    </Group>
  );
};

export default Auth;
