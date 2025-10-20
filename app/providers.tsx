'use client';

import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from './theme-provider';
import { ClerkProvider } from '@clerk/nextjs';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <Toaster />
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
};
export default Providers;
