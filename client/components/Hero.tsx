import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Code, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-flaks-dark via-flaks-dark-secondary to-flaks-dark min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-flaks-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-flaks-green/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-flaks-green/5 to-transparent rounded-full"></div>
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-flaks-green/30 to-transparent transform rotate-12"></div>
        <div className="absolute top-3/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-flaks-green/20 to-transparent transform -rotate-12"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-flaks-green/10 border border-flaks-green/20 rounded-full text-flaks-green font-lato font-medium text-sm mb-8">
          <Zap className="w-4 h-4 mr-2" />
          Velocidad Digital | Agilidad Tecnológica
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-lato text-white mb-6 leading-tight">
          Tu sitio web con un{" "}
          <span className="text-flaks-green relative">
            plan
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-flaks-green/30 rounded-full"></div>
          </span>{" "}
          que se alinea con{" "}
          <span className="text-flaks-green">tus objetivos</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 font-lato font-light mb-4 max-w-4xl mx-auto leading-relaxed">
          Creamos tu página web, brindamos asesoramiento, mantenimiento, hosting, dominio y más.
        </p>

        <p className="text-lg text-gray-400 font-lato mb-12 max-w-3xl mx-auto">
          Elegí el plan que mejor se adapta a tu proyecto y arrancá con una web pensada para crecer.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button className="bg-flaks-green hover:bg-flaks-green-dark text-black font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-flaks-green/25">
            ¡Empecemos!
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" className="border-flaks-green text-flaks-green hover:bg-flaks-green hover:text-black font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300">
            Ver Planes
          </Button>
        </div>

        {/* Feature Icons */}
        <div className="flex flex-wrap justify-center gap-8 text-gray-400">
          <div className="flex items-center space-x-2">
            <Code className="w-5 h-5 text-flaks-green" />
            <span className="font-lato font-medium">Desarrollo Ágil</span>
          </div>
          <div className="flex items-center space-x-2">
            <Rocket className="w-5 h-5 text-flaks-green" />
            <span className="font-lato font-medium">Hosting Incluido</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-flaks-green" />
            <span className="font-lato font-medium">Soporte 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
}
