import { createRoot } from 'react-dom/client';
import AppShell from '../_app-shell';
import RedesSociales from '../../../client/pages/RedesSociales';

const root = document.getElementById('root')!;
createRoot(root).render(
  <AppShell>
    <RedesSociales />
  </AppShell>
);

