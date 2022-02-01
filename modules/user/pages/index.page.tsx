import React from 'react';
import CustomUserLayout from '../layouts/CustomUserLayout';

const Page = () => {
  return (
    <h1>User</h1>
  );
};

Page.getLayout = CustomUserLayout;

export { Page };
