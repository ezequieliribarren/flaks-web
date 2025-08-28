import { createRoot } from 'react-dom/client';
import AppShell from '../_app-shell';
import DesarrolloWeb from '../../../client/pages/DesarrolloWeb';

const root = document.getElementById('root')!;
createRoot(root).render(
  <AppShell>
    <DesarrolloWeb />
  </AppShell>
);

