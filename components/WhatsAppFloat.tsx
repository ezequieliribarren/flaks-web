"use client";

import { useMemo } from 'react';

const PHONE = '5491128955606';

function buildMessage(pathname: string): string {
  const base = 'Hola estoy en el sitio web de Flaks y necesito más información';
  const lower = pathname.toLowerCase();
  if (lower.startsWith('/gestion-de-redes') || lower.startsWith('/redes-sociales')) {
    return base + ' sobre redes';
  }
  if (lower.startsWith('/desarrollo-web')) {
    return base + ' sobre desarrollo web';
  }
  if (lower.startsWith('/pauta-publicitaria')) {
    return base + ' sobre pauta publicitaria';
  }
  if (lower.startsWith('/lp/')) {
    const slug = lower.replace(/^\/lp\//, '').replace(/\/$/, '').replace(/-/g, ' ');
    return base + ' sobre ' + (slug || 'una landing');
  }
  return base; // Home u otras rutas
}

export default function WhatsAppFloat() {
  const href = useMemo(() => {
    if (typeof window === 'undefined') return '#';
    const msg = buildMessage(window.location.pathname);
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
    return url;
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Flaks"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 bg-flaks-green text-black font-lato font-bold px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
    >
      WhatsApp
    </a>
  );
}

