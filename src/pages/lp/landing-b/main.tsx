import { createRoot } from 'react-dom/client';
import AppShell from '../../_app-shell';
import Header from '../../../../client/components/Header';
import Footer from '../../../../client/components/Footer';
import RemixProcessForm from '../../../../client/components/RemixProcessForm';

function LandingB() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-black font-lato text-white mb-6">Landing B</h1>
        <p className="text-gray-300 font-lato mb-8">Otra variante de landing. Copiá y adaptá el contenido.</p>
        <RemixProcessForm />
      </main>
      <Footer />
    </div>
  );
}

const root = document.getElementById('root')!;
createRoot(root).render(
  <AppShell>
    <LandingB />
  </AppShell>
);
