import React from 'react';

const CustomUserLayout = ({ children }: { children: React.ReactNode, }) => {
  return (
    <div
      style={{
        display: 'flex',
        margin: 'auto',
        maxWidth: 900,
      }}
    >
      <h1>User layout</h1>
      {children}
    </div>
  );
};

export default CustomUserLayout;
