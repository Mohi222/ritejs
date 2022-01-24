import React from "react";
import { PageContext } from "types";
import { PageContextBuiltIn } from "vite-plugin-ssr";
import CustomUserLayout from "../layouts/CustomUserLayout";

function Page() {
  return (
    <>
      <h1>User</h1>
    </>
  );
}

Page.getLayout = CustomUserLayout;

export { Page };
