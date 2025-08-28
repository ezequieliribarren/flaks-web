import { PropsWithChildren } from 'react';
import '../../client/global.css';
import { Toaster } from '../../client/components/ui/toaster';
import { Toaster as Sonner } from '../../client/components/ui/sonner';
import { TooltipProvider } from '../../client/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WhatsAppFloat from '../../components/WhatsAppFloat';

const queryClient = new QueryClient();

export default function AppShell({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
        <WhatsAppFloat />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
