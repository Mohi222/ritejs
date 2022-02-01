import { Button,
  Group,
  Text,
  TextInput,
} from '@mantine/core';
import type { Session } from '@supabase/supabase-js';
import React, { useEffect,
  useState } from 'react';
import { supabase } from '@/supabase/libs/supabaseClient';

const Account = ({ session }: { session: Session, }) => {
  const [loading,
    setLoading] = useState(true);
  const [username,
    setUsername] = useState('');
  const [website,
    setWebsite] = useState('');
  const [avatarUrl,
    setAvatarUrl] = useState('');



  const getProfile = async () => {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const { data,
        error,
        status } = await supabase
        .from('profiles')
        .select('username, website, avatar_url')
        .eq('id', user?.id)
        .single();

      if (error && status !== 406) {
        throw new Error(error.message);
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void getProfile();
  }, [session]);

  const updateProfile = async () => {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        avatarUrl,
        id: user?.id,
        updated_at: new Date(),
        username,
        website,
      };

      const { error } = await supabase.from('profiles').upsert(updates, {
        // Don't return the value after inserting
        returning: 'minimal',
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Group direction="column" position="center">
      <Text align="center">Welcome{username && ` ${username}`}</Text>
      <TextInput
        disabled
        label="Email"
        placeholder="Email"
        value={session.user?.email}
      />
      <TextInput
        label="Username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        placeholder="Username"
        value={username || ''}
      />
      <TextInput
        label="Website"
        onChange={(event) => {
          setWebsite(event.target.value);
        }}
        placeholder="Website"
        value={website || ''}
      />
      <Group>
        <Button onClick={() => {
          return supabase.auth.signOut();
        }}
        >Sign out</Button>
        <Button
          loading={loading}
          onClick={() => {
            return updateProfile();
          }}
        >
          Update
        </Button>
      </Group>
    </Group>
  );
};

export default Account;
