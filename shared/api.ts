/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Contact form types (shared between client and server)
 */
export type ContactService =
  | "Desarrollo web"
  | "Gestión de Redes Sociales"
  | "Pauta publicitaria";

export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  service: ContactService;
  page?: string;
}

export interface ContactResponse {
  ok: boolean;
  error?: string;
}
