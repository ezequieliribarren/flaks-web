import { createRoot } from 'react-dom/client';
import AppShell from '../../_app-shell';
import Header from '../../../../client/components/Header';
import Footer from '../../../../client/components/Footer';
import ContactForm from '../../../../components/ContactForm';

function LandingA() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-black font-lato text-white mb-6">Landing A</h1>
        <p className="text-gray-300 font-lato mb-8">Ejemplo de landing para pauta. Duplica esta carpeta para nuevas landings.</p>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

const root = document.getElementById('root')!;
createRoot(root).render(
  <AppShell>
    <LandingA />
  </AppShell>
);

