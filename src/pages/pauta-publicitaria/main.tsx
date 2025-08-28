import { createRoot } from 'react-dom/client';
import AppShell from '../_app-shell';
import PautaPublicitaria from '../../../client/pages/PautaPublicitaria';

const root = document.getElementById('root')!;
createRoot(root).render(
  <AppShell>
    <PautaPublicitaria />
  </AppShell>
);

