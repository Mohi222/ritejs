import React from "react";

const CustomUserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      <h1>User layout</h1>
      {children}
    </div>
  );
};

export default CustomUserLayout;
