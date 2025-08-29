import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import RemixProcessForm from "@/components/RemixProcessForm";

export default function Contact() {
  return (
    <>
      {/* Contact Section (remix) */}
      <RemixProcessForm />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-flaks-green to-emerald-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black font-lato text-black mb-6">
            Tu sitio web te está esperando
          </h2>
          <p className="text-xl text-black/80 font-lato mb-8 max-w-3xl mx-auto">
            No esperes más para tener presencia digital. Empezá hoy y llevá tu
            negocio al siguiente nivel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-black hover:bg-flaks-dark text-flaks-green font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
              ¡Empecemos ahora!
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-2 text-black/80">
              <Clock className="w-5 h-5" />
              <span className="font-lato font-medium">Respuesta en 24hs</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

