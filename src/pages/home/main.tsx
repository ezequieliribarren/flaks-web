import { createRoot } from 'react-dom/client';
import AppShell from '../_app-shell';
import Index from '../../../client/pages/Index';

const root = document.getElementById('root')!;
createRoot(root).render(
  <AppShell>
    <Index />
  </AppShell>
);

