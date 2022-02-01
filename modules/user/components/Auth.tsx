import { Button,
  Group,
  Text,
  TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { supabase } from '@/supabase/libs/supabaseClient';

const Auth = () => {
  const [loading,
    setLoading] = useState(false);
  const [email,
    setEmail] = useState('');
  const [message,
    setMessage] = useState('');

  const handleLogin = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw new Error(error.message);
      else setMessage('Check your email for the login link!');
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Group direction="column" position="center">
      <TextInput
        autoComplete="email"
        label="Email"
        onChange={(event) => {
          setEmail(event.currentTarget.value);
        }}
        placeholder="Email"
        required
        value={email}
      />
      <Button
        loading={loading} onClick={() => {
          void handleLogin();
        }}
      >
        {loading ? 'Sending...' : 'Send Magic link'}
      </Button>
      {message && <Text>{message}</Text>}
    </Group>
  );
};

export default Auth;
