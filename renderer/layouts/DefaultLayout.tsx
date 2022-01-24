import React, { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          fontFamily:
            '"Open Sans", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
          headings: {
            fontFamily:
              '"Raleway", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
          },
        }}
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default DefaultLayout;
