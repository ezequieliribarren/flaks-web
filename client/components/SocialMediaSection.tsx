import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export default function SocialMediaSection() {
  const bullets = [
    "Estrategia y calendario de contenidos",
    "Diseño y creatividad de marca",
    "Reportes y optimización continua",
  ];
  const { ref: socialBlockRef, inView: socialInView } = useInView({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
    once: true,
  });

  return (
    <section
      id="redes-sociales"
      className="py-16 md:py-24 bg-gray-50 relative overflow-hidden min-h-0 md:min-h-[70vh] flex items-center"
    >
      {/* Violet diagonal accents for section */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-[25%] left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/25 to-transparent -rotate-[8deg]" />
        <div className="absolute top-[60%] left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent rotate-[10deg]" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-10 gap-8 md:gap-16 items-center">
          {/* Left: Visual (pegada al margen) */}
          <div
            ref={socialBlockRef as any}
            className={cn(
              "relative hidden md:block lg:order-1 order-2 lg:col-span-4 lg:justify-self-start lg:ml-[-5%] transition-all duration-700 ease-out",
              socialInView ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-8",
            )}
          >
            {/* Formas envolventes (variante sutil, lado izquierdo) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden md:block">
              {/* Semicírculo desde el borde izquierdo */}
              <div
                className="absolute left-0 top-6 w-[280px] h-[500px] rounded-r-[9999px] opacity-90"
                style={{ backgroundColor: "rgb(89 40 235 / var(--tw-text-opacity, 1))" }}
              />
              {/* Placas diagonales */}
              <div className="absolute -right-16 top-10 w-[380px] h-[200px] -rotate-[10deg] rounded-[3rem] bg-gradient-to-tr from-flaks-violet-light/20 to-transparent" />
              <div className="absolute -right-8 top-44 w-[420px] h-[180px] -rotate-[6deg] rounded-[3rem] bg-gradient-to-tr from-flaks-violet-light/15 to-transparent" />
              {/* Rayos finos */}
              <div className="absolute left-2 top-12 w-[320px] h-px -rotate-[14deg] bg-gradient-to-r from-transparent via-flaks-violet-light/50 to-transparent" />
              <div className="absolute left-4 top-28 w-[300px] h-px -rotate-[10deg] bg-gradient-to-r from-transparent via-flaks-violet-light/40 to-transparent" />
            </div>
            <img
              src="/redes-sociales.png"
              alt="Figura de persona con teléfono representando redes sociales"
              className="relative z-10 w-[min(50vw,400px)] max-w-[420px] h-auto drop-shadow-2xl object-contain"
              loading="lazy"
            />
          </div>

          {/* Right: Copy + CTAs */}
          <div className="space-y-10 lg:order-2 order-1 lg:col-span-6">
            <h2 className="text-3xl md:text-5xl font-black font-lato text-flaks-dark">
              Gestión de <span className="text-flaks-violet-dark">Redes Sociales</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-lato max-w-2xl">
              Potenciamos tus perfiles con contenido efectivo y una estrategia
              clara para crecer.
            </p>
            <ul className="space-y-4">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start text-gray-700 font-lato">
                  <CheckCircle className="w-5 h-5 text-flaks-violet-light mt-0.5 mr-3 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <Button
                className="bg-flaks-violet-light hover:bg-flaks-violet-dark text-white font-lato font-bold px-5 py-3 text-base md:px-8 md:py-4 md:text-lg rounded-xl transition-all duration-300"
                onClick={() => (window.location.href = "/redes-sociales")}
              >
                Ver servicios
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
