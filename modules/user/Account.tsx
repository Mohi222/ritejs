import { useState, useEffect } from "react";
import { supabase } from "libs/supabaseClient";
import { Session } from "@supabase/supabase-js";
import { Button, Group, TextInput, Title } from "@mantine/core";
import Avatar from "./Avatar";

export default function Account({ session }: { session: Session }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState("");
  const [avatar_url, setAvatarUrl] = useState("");

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user!.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string;
    website: string;
    avatar_url: string;
  }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user!.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Group direction="column" position="center" grow>
      <Title order={2} align="center">
        Welcome{username && ` ${username}`}
      </Title>
      <Avatar
        url={avatar_url}
        size={150}
        onUpload={(url: string) => {
          setAvatarUrl(url);
          updateProfile({ username, website, avatar_url: url });
        }}
      />
      <TextInput
        value={session.user!.email}
        placeholder="Email"
        label="Email"
        disabled
      />
      <TextInput
        value={username || ""}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        label="Username"
      />

      <TextInput
        value={website || ""}
        onChange={(e) => setWebsite(e.target.value)}
        placeholder="Website"
        label="Website"
      />

      <Group grow>
        <Button onClick={() => supabase.auth.signOut()}>Sign out</Button>
        <Button
          onClick={() => updateProfile({ username, website, avatar_url })}
          loading={loading}
        >
          Update
        </Button>
      </Group>
    </Group>
  );
}
