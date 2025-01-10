"use client";

import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";

const RootProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default RootProviders;

/* enableSystem => Allows automatic syncing with the user's system theme
disableTransitionOnChange => Prevents visible theme transitions (e.g., animations) 
during the initial theme change on page load. */
