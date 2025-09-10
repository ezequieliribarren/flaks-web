import { createRoot } from 'react-dom/client';
import AppShell from '../_app-shell';
import Privacidad from '../../../client/pages/Privacidad';

const root = document.getElementById('root')!;
createRoot(root).render(
  <AppShell>
    <Privacidad />
  </AppShell>
);

