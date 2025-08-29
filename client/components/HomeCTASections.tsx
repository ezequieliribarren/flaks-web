import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, MessageCircle, Target } from "lucide-react";

function CTACard({
  title,
  description,
  href,
  icon: Icon,
  id,
}: {
  title: string;
  description: string;
  href: string;
  icon: any;
  id: string;
}) {
  return (
    <section id={id} className="py-10">
      <div className="relative overflow-hidden rounded-2xl border border-flaks-green/20 bg-white/5 backdrop-blur-sm">
        {/* Rays per card */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-flaks-green/20 to-transparent rotate-[10deg]" />
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-flaks-green/15 to-transparent -rotate-[12deg]" />
        </div>

        <div className="relative p-8 md:p-10 grid md:grid-cols-[auto_1fr_auto] items-center gap-6">
          <div className="inline-flex p-4 bg-flaks-green/10 rounded-2xl">
            <Icon className="w-8 h-8 text-flaks-green" />
          </div>
          <div>
            <h3 className="text-2xl font-black font-lato text-white mb-2">{title}</h3>
            <p className="text-gray-300 font-lato">{description}</p>
          </div>
          <div>
            <Button
              className="bg-flaks-green hover:bg-flaks-green-dark text-black font-lato font-bold px-6 py-3 rounded-xl transition-all duration-300"
              onClick={() => (window.location.href = href)}
            >
              Ver más
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomeCTASections() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <CTACard
        id="desarrollo-web"
        title="Desarrollo web"
        description="Sitios rápidos, seguros y con foco en conversión."
        href="/desarrollo-web"
        icon={Globe}
      />
      <CTACard
        id="redes-sociales"
        title="Gestión de redes sociales"
        description="Contenido que conecta y hace crecer tu comunidad."
        href="/redes-sociales"
        icon={MessageCircle}
      />
      <CTACard
        id="pauta-publicitaria"
        title="Pauta publicitaria"
        description="Campañas medibles y optimizadas para resultados reales."
        href="/pauta-publicitaria"
        icon={Target}
      />
    </div>
  );
}

