import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-flaks-gradient-start to-flaks-gradient-end min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-flaks-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-flaks-green/5 rounded-full blur-3xl"></div>
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-flaks-green/30 to-transparent transform rotate-12"></div>
        <div className="absolute top-3/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-flaks-green/20 to-transparent transform -rotate-12"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-flaks-green/10 border border-flaks-green/20 rounded-full text-flaks-green font-lato font-medium text-sm">
              <Zap className="w-4 h-4 mr-2" />
              Velocidad Digital | Agilidad Tecnológica
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-lato text-white leading-tight">
              Impulsamos tu{" "}
              <span className="text-flaks-green relative">
                presencia digital
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-flaks-green/30 rounded-full"></div>
              </span>{" "}
              con velocidad y diseño
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 font-lato font-light leading-relaxed max-w-lg">
              Desarrollamos sitios web, gestionamos redes sociales y creamos campañas publicitarias que hacen crecer tu negocio.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-flaks-green hover:bg-flaks-green-dark text-black font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-flaks-green/25">
                ¡Empecemos Ahora!
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-flaks-green text-flaks-green hover:bg-flaks-green hover:text-black font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300">
                Ver Servicios
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-black font-lato text-flaks-green">16K+</div>
                <div className="text-sm text-gray-400 font-lato">Sitios creados</div>
              </div>
              <div>
                <div className="text-2xl font-black font-lato text-flaks-green">50+</div>
                <div className="text-sm text-gray-400 font-lato">Años experiencia</div>
              </div>
              <div>
                <div className="text-2xl font-black font-lato text-flaks-green">24/7</div>
                <div className="text-sm text-gray-400 font-lato">Soporte</div>
              </div>
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="relative">
            <div className="relative aspect-video bg-flaks-gray-dark rounded-2xl overflow-hidden shadow-2xl border border-flaks-green/20">
              {/* Video Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-flaks-gray-dark to-flaks-dark-secondary flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-flaks-green rounded-full flex items-center justify-center mx-auto group cursor-pointer hover:bg-flaks-green-dark transition-colors duration-300">
                    <Play className="w-8 h-8 text-black ml-1" />
                  </div>
                  <div className="text-white font-lato font-bold text-lg">
                    Descubre FLAKS
                  </div>
                  <div className="text-gray-400 font-lato text-sm">
                    Video de presentación
                  </div>
                </div>
              </div>

              {/* Optional: Actual video embed when ready */}
              {/*
              <iframe
                className="w-full h-full"
                src="YOUR_VIDEO_URL"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              */}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-flaks-green/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-flaks-green/5 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
