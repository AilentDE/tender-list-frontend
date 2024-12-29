"use client";

import { ThemeProvider } from "next-themes";

const NextThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default NextThemeProvider;
