import { ClerkProvider } from "@clerk/nextjs";
import {
  ColorSchemeProvider,
  type ColorScheme,
  MantineProvider,
} from "@mantine/core";
import { type AppType } from "next/app";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { useState } from "react";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = () => {
    console.log(
      "colorScheme setting to :>> ",
      colorScheme === "dark" ? "light" : "dark"
    );
    return setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <ClerkProvider {...pageProps}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            fontFamily: `${outfit.style.fontFamily}, sans-serif`,
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
