import { createRoot } from 'react-dom/client';
import { useEffect, useState } from 'react';
import AppShell from '../_app-shell';
import Header from '../../../client/components/Header';
import Footer from '../../../client/components/Footer';

function Gracias() {
  const params = new URLSearchParams(window.location.search);
  const service = params.get('service');
  const from = params.get('from');
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : s)), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (seconds === 0) window.location.href = '/';
  }, [seconds]);

  return (
    <div className="min-h-screen bg-flaks-violet-dark flex flex-col">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-black font-lato text-white mb-6">Gracias!</h1>
        <p className="text-white/85 font-lato mb-2">
          Recibimos tu consulta {service ? `sobre ${service}` : ''}. Un asesor se comunicará a la brevedad.
        </p>
        <p className="text-white/70 font-lato mt-2">Redirigiendo al sitio principal en {seconds}…</p>
        {from && (
          <p className="text-white/70 font-lato text-sm mt-2">Origen: {from}</p>
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

