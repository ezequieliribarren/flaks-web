import { createRoot } from 'react-dom/client';
import AppShell from '../_app-shell';
import Header from '../../../client/components/Header';
import Footer from '../../../client/components/Footer';

function Gracias() {
  const params = new URLSearchParams(window.location.search);
  const service = params.get('service');
  const from = params.get('from');
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black font-lato text-white mb-6">¡Gracias!</h1>
        <p className="text-gray-300 font-lato mb-2">
          Recibimos tu consulta {service ? `sobre ${service}` : ''}. Te responderemos en 24hs.
        </p>
        {from && (
          <p className="text-gray-400 font-lato text-sm">Origen: {from}</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

const root = document.getElementById('root')!;
createRoot(root).render(
  <AppShell>
    <Gracias />
  </AppShell>
);

