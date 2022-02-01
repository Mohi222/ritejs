import type {
  ColorScheme} from '@mantine/core';
import {
  MantineProvider,
  ColorSchemeProvider,
} from '@mantine/core';
import React, { useState } from 'react';

const DefaultLayout = ({ children }: { children: React.ReactNode, }) => {
  const [colorScheme,
    setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value ?? (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          fontFamily:
            '"Open Sans", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
          headings: {
            fontFamily:
              '"Raleway", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default DefaultLayout;
