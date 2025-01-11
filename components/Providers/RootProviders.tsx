"use client";

import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

const RootProviders = ({ children }: { children: ReactNode }) => {
  const [queryClient] = React.useState(()=> new QueryClient({}));

  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
};

export default RootProviders;

/* enableSystem => Allows automatic syncing with the user's system theme
disableTransitionOnChange => Prevents visible theme transitions (e.g., animations) 
during the initial theme change on page load. */
