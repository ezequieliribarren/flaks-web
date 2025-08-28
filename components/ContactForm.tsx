"use client";

import { useState } from 'react';
import { z } from 'zod';
import { ContactService, ContactRequest } from '../shared/api';
import { Input } from '../client/components/ui/input';
import { Textarea } from '../client/components/ui/textarea';
import { Button } from '../client/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../client/components/ui/select';

const formSchema = z.object({
  name: z.string().min(2, 'Ingresá tu nombre'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(5, 'Ingresá un teléfono válido'),
  service: z.enum([
    'Desarrollo web',
    'Gestión de Redes Sociales',
    'Pauta publicitaria',
  ]),
  message: z.string().optional(),
});

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Desarrollo web' as ContactService,
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    const parsed = formSchema.safeParse(values);
    if (!parsed.success) {
      setStatus(parsed.error.issues[0]?.message || 'Datos inválidos');
      return;
    }
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('phone', values.phone);
      formData.append('service', values.service);
      if (values.message) formData.append('message', values.message);
      const res = await fetch('/contact.php', { method: 'POST', body: formData });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (json.ok) {
        const loc = typeof window !== 'undefined' ? window.location : null;
        const from = loc ? loc.pathname : '/';
        const qs = `?service=${encodeURIComponent(values.service)}&from=${encodeURIComponent(from)}`;
        window.location.assign(`/gracias/${qs}`);
        return;
      } else {
        setStatus(json.error || 'Ocurrió un error. Intenta nuevamente.');
      }
    } catch (err) {
      setStatus('Error de conexión.');
    } finally {
      setSubmitting(false);
    }
  }

  const labelCls = 'block text-sm font-lato font-medium text-white mb-2';
  const fieldWrap = 'space-y-1';

  return (
    <form onSubmit={onSubmit} className={compact ? '' : 'bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-flaks-green/20'}>
      <div className={compact ? 'grid md:grid-cols-2 gap-4' : 'grid md:grid-cols-2 gap-6'}>
        <div className={fieldWrap}>
          <label className={labelCls}>Nombre</label>
          <Input
            value={values.name}
            onChange={(e) => setValues((s) => ({ ...s, name: e.target.value }))}
            placeholder="Tu nombre"
          />
        </div>
        <div className={fieldWrap}>
          <label className={labelCls}>Email</label>
          <Input
            type="email"
            value={values.email}
            onChange={(e) => setValues((s) => ({ ...s, email: e.target.value }))}
            placeholder="tu@email.com"
          />
        </div>
        <div className={fieldWrap}>
          <label className={labelCls}>Teléfono</label>
          <Input
            value={values.phone}
            onChange={(e) => setValues((s) => ({ ...s, phone: e.target.value }))}
            placeholder="11 1234 5678"
          />
        </div>
        <div className={fieldWrap}>
          <label className={labelCls}>Servicio</label>
          <Select
            value={values.service}
            onValueChange={(v) => setValues((s) => ({ ...s, service: v as ContactService }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Elegí un servicio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Desarrollo web">Desarrollo web</SelectItem>
              <SelectItem value="Gestión de Redes Sociales">Gestión de Redes Sociales</SelectItem>
              <SelectItem value="Pauta publicitaria">Pauta publicitaria</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {!compact && (
          <div className="md:col-span-2">
            <label className={labelCls}>Mensaje (opcional)</label>
            <Textarea
              value={values.message}
              onChange={(e) => setValues((s) => ({ ...s, message: e.target.value }))}
              placeholder="Contanos brevemente tu necesidad"
              rows={4}
            />
          </div>
        )}
      </div>
      <div className="mt-6 flex items-center gap-4">
        <Button
          type="submit"
          className="bg-flaks-green hover:bg-flaks-green-dark text-black font-lato font-bold px-6"
          disabled={submitting}
        >
          {submitting ? 'Enviando...' : 'Enviar'}
        </Button>
        {status && (
          <span className="text-white/80 font-lato text-sm">{status}</span>
        )}
      </div>
    </form>
  );
}
