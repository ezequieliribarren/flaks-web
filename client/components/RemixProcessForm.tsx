import ContactForm from "../../components/ContactForm";
import { CheckCircle, MessageCircle, Mail, Phone } from "lucide-react";

export default function RemixProcessForm() {
  const PHONE = '5491128955606';
  const PHONE_DISPLAY = '+54 9 11 2895 5606';
  const EMAIL = 'info@flaks.com.ar';
  const steps = [
    "Contanos por WhatsApp o email tu necesidad",
    "Recibí una propuesta clara con tiempos",
    "Diseño, desarrollo y publicación",
  ];

  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-br from-flaks-gradient-start to-flaks-gradient-end"
    >
      <div className=" py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="md:col-span-2 order-1 mb-2">
            <h3 className="text-3xl md:text-4xl font-black font-lato text-white mb-2">
              Obtené tu presupuesto <span className="text-flaks-green">hoy!</span>
            </h3>
            <p className="text-white/85 font-lato max-w-2xl">
              Te guiamos paso a paso: entendemos tu necesidad, diseñamos la solución y la ponemos online a tiempo.
            </p>
          </div>
          <div className="space-y-10 order-3 md:order-1">
            <div className="space-y-4">
              {steps.map((t, i) => (
                <div key={i} className="flex items-start text-white/90">
                  <CheckCircle className="w-5 h-5 text-flaks-green mt-0.5 mr-3" />
                  <span className="font-lato">{t}</span>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <a
                href={`https://wa.me/${PHONE}?text=${encodeURIComponent('Necesito mas informacion')}`}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl border border-flaks-green/20 bg-white/5 backdrop-blur-sm p-5 hover:border-flaks-green/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-flaks-green" />
                  <div className="text-white font-lato font-bold">WhatsApp</div>
                </div>
                <div className="text-white/70 font-lato text-sm mt-2">
                 Envianos un mensaje
                </div>
             
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="group block rounded-2xl border border-flaks-green/20 bg-white/5 backdrop-blur-sm p-5 hover:border-flaks-green/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-flaks-green" />
                  <div className="text-white font-lato font-bold">Email</div>
                </div>
                <div className="text-white/70 font-lato text-sm mt-2">{EMAIL}</div>
              </a>
              <a
                href={`tel:+${PHONE}`}
                className="group block rounded-2xl border border-flaks-green/20 bg-white/5 backdrop-blur-sm p-5 hover:border-flaks-green/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-flaks-green" />
                  <div className="text-white font-lato font-bold">Teléfono</div>
                </div>
                <div className="text-white/70 font-lato text-sm mt-2">{PHONE_DISPLAY}</div>
              </a>
            </div>
          </div>

          <div className="space-y-6 order-2 md:order-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}







