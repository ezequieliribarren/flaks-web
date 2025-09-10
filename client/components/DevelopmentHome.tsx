import { Button } from "@/components/ui/button";
import { Globe, CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export default function DevelopmentHome() {
  const bullets = [
    "Sitios rápidos y seguros",
    "Diseño responsive y accesible",
    "SEO básico y analítica",
  ];

  return (
    <section
      id="desarrollo-web"
      className="py-16 md:py-24 bg-gray-50 relative overflow-hidden min-h-0 md:min-h-[70vh] flex items-center"
    >
      {/* Violet diagonal accents for section, distinct from Hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/25 to-transparent rotate-[10deg]" />
        <div className="absolute top-[50%] left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent -rotate-[12deg]" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-10 gap-8 md:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-10 lg:col-span-6">
            <div className="inline-flex items-center p-4 bg-flaks-violet-light/10 rounded-2xl">
              <Globe className="w-8 h-8 text-flaks-violet-light" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-lato text-flaks-dark">
              Desarrollo <span className="text-flaks-violet-dark">Web</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-lato max-w-2xl">
              Construimos sitios modernos con foco en conversión, performance y
              escalabilidad.
            </p>
            <ul className="space-y-4">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start text-gray-700 font-lato">
                  <CheckCircle className="w-5 h-5 text-flaks-violet-light mt-0.5 mr-3 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div>
              <Button
                className="bg-flaks-violet-light hover:bg-flaks-violet-dark text-white font-lato font-bold px-5 py-3 text-base md:px-8 md:py-4 md:text-lg rounded-xl transition-all duration-300"
                onClick={() => (window.location.href = "/desarrollo-web")}
              >
                Ver servicios
              </Button>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden md:block lg:col-span-4 lg:justify-self-end lg:mr-[-8%]">
            {/* Decoraciones de velocidad (envolventes) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden md:block">
              {/* Semicírculo desde el borde derecho que envuelve la figura */}
              <div
                className="absolute right-0 top-6 w-[300px] h-[520px] rounded-l-[9999px] opacity-90"
                style={{ backgroundColor: "rgb(89 40 235 / var(--tw-text-opacity, 1))" }}
              />
              {/* Placas diagonales que envuelven */}
              <div className="absolute -left-24 top-10 w-[420px] h-[220px] rotate-[12deg] rounded-[3rem] bg-gradient-to-tr from-flaks-violet-light/25 to-transparent blur-[2px]" />
              <div className="absolute -left-10 top-48 w-[460px] h-[200px] rotate-[8deg] rounded-[3rem] bg-gradient-to-tr from-flaks-violet-light/15 to-transparent" />
              {/* Aros/contornos sesgados que sobresalen */}
              <div className="absolute -left-12 top-28 w-[420px] h-[420px] rotate-[10deg] rounded-full border border-flaks-violet-light/25" />
              <div className="absolute -left-4 top-40 w-[360px] h-[360px] rotate-[8deg] rounded-full border border-flaks-violet-light/20" />
              {/* Rayos finos */}
              <div className="absolute right-0 top-4 w-[360px] h-px rotate-[16deg] bg-gradient-to-r from-transparent via-flaks-violet-light/50 to-transparent" />
              <div className="absolute right-6 top-20 w-[320px] h-px rotate-[12deg] bg-gradient-to-r from-transparent via-flaks-violet-light/40 to-transparent" />
            </div>
            {(() => {
              const { ref, inView } = useInView({ threshold: 0.2, rootMargin: "0px 0px -10% 0px", once: true });
              return (
                <img
                  ref={ref as any}
                  src="/desarrollo-web.webp"
                  alt="Persona con notebook representando desarrollo web"
                  className={cn(
                    "relative z-10 w-[min(50vw,400px)] max-w-[420px] h-auto drop-shadow-2xl object-contain transition-all duration-700 ease-out will-change-transform will-change-opacity",
                    inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
                  )}
                  loading="eager"
                />
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
