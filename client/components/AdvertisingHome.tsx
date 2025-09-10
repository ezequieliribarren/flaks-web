import { Button } from "@/components/ui/button";
import { Target, BarChart, TrendingUp, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export default function AdvertisingHome() {
  const bullets = [
    { icon: Target, text: "Segmentación precisa por audiencia" },
    { icon: BarChart, text: "Resultados medibles y reportes claros" },
    { icon: TrendingUp, text: "Optimización continua de campañas" },
  ];

  const { ref: adsRef, inView: adsInView } = useInView({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
    once: true,
  });

  return (
    <section
      id="pauta-publicitaria"
      className="py-16 md:py-24 bg-gray-50 relative overflow-hidden min-h-0 md:min-h-[70vh] flex items-center"
    >
      {/* Violet diagonal accents for section */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-[22%] left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/25 to-transparent rotate-[9deg]" />
        <div className="absolute top-[58%] left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent -rotate-[11deg]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-10 gap-8 md:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-10 lg:col-span-6">
            <h2 className="text-3xl md:text-5xl font-black font-lato text-flaks-dark">
              Pauta <span className="text-flaks-violet-dark">Publicitaria</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 font-lato max-w-2xl">
              Convertimos tu inversión en resultados reales. Gestionamos campañas
              en Google Ads, Meta Ads y más, con foco en ROI.
            </p>
            <ul className="space-y-3">
              {bullets.map((b, i) => {
                const Icon = b.icon;
                return (
                  <li key={i} className="flex items-start text-gray-700 font-lato">
                    <Icon className="w-5 h-5 text-flaks-violet-light mt-0.5 mr-3 flex-shrink-0" />
                    <span>{b.text}</span>
                  </li>
                );
              })}
            </ul>
            <div>
              <Button
                className="bg-flaks-violet-light hover:bg-flaks-violet-dark text-white font-lato font-bold px-5 py-3 text-base md:px-8 md:py-4 md:text-lg rounded-xl transition-all duration-300"
                onClick={() => (window.location.href = "/pauta-publicitaria")}
              >
                Ver servicios
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right: Visual */}
          <div
            ref={adsRef as any}
            className={cn(
              "relative hidden md:block lg:col-span-4 lg:justify-self-end lg:mr-[-5%] transition-all duration-700 ease-out",
              adsInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
            )}
          >
            {/* Formas envolventes (variante sutil, lado derecho) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden md:block">
              {/* Semicírculo desde el borde derecho */}
              <div
                className="absolute right-0 top-6 w-[300px] h-[500px] rounded-l-[9999px] opacity-90"
                style={{ backgroundColor: "rgb(89 40 235 / var(--tw-text-opacity, 1))" }}
              />
              {/* Placas diagonales */}
              <div className="absolute -left-16 top-10 w-[380px] h-[200px] rotate-[10deg] rounded-[3rem] bg-gradient-to-tr from-flaks-violet-light/20 to-transparent" />
              <div className="absolute -left-8 top-44 w-[420px] h-[180px] rotate-[6deg] rounded-[3rem] bg-gradient-to-tr from-flaks-violet-light/15 to-transparent" />
              {/* Rayos finos */}
              <div className="absolute right-2 top-12 w-[320px] h-px rotate-[14deg] bg-gradient-to-r from-transparent via-flaks-violet-light/50 to-transparent" />
              <div className="absolute right-4 top-28 w-[300px] h-px rotate-[10deg] bg-gradient-to-r from-transparent via-flaks-violet-light/40 to-transparent" />
            </div>
            <img
              src="/pauta.png"
              alt="Figura de persona representando campañas publicitarias"
              className="relative z-10 w-[min(50vw,400px)] max-w-[420px] h-auto drop-shadow-2xl object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
