import { useEffect, useState } from "react";
import { supabase } from "libs/supabaseClient";
import {
  Button,
  Group,
  Image,
  MantineNumberSize,
  MantineSize,
} from "@mantine/core";

export default function Avatar({
  url,
  size,
  onUpload,
}: {
  url: string;
  size: MantineNumberSize;
  onUpload: (url: string) => void;
}) {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);

      if (error) throw error;
      if (!data) return;

      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error: any) {
      console.log("Error downloading image: ", error.message);
    }
  }

  async function uploadAvatar(event) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <Group position="center" direction="column">
      <img
        style={{ width: size, height: size }}
        className="rounded-full"
        src={
          avatarUrl
            ? avatarUrl
            : `https://via.placeholder.com/${size + "x" + size}.png`
        }
      />

      <input
        type="file"
        className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-50 file:text-blue-700
      hover:file:bg-blue-100
    "
      />
    </Group>
  );
}
