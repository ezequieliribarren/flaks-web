import {
  Clock,
  Shield,
  Users,
  Zap,
  Globe,
  HeartHandshake,
  TrendingUp,
  Award,
} from "lucide-react";

export default function Benefits() {
  const stats = [
    {
      number: "16,000+",
      label: "Sitios web creados",
      description: "en Argentina y Latinoamérica",
    },
    {
      number: "50+",
      label: "Años de experiencia",
      description: "en desarrollo digital",
    },
    {
      number: "62,000+",
      label: "Empresas confían",
      description: "en nuestros expertos",
    },
    {
      number: "24/7",
      label: "Soporte técnico",
      description: "siempre disponible",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Velocidad Digital",
      description:
        "Desarrollo ágil con las últimas tecnologías para resultados rápidos y eficientes.",
    },
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description:
        "SSL gratuito, hosting seguro y backups automáticos para proteger tu proyecto.",
    },
    {
      icon: Users,
      title: "Experiencia de Usuario",
      description:
        "Diseños optimizados para conversión y navegación intuitiva en todos los dispositivos.",
    },
    {
      icon: Globe,
      title: "Presencia Global",
      description:
        "Tu sitio web visible en todo el mundo con hosting premium y CDN incluido.",
    },
    {
      icon: HeartHandshake,
      title: "Asesoramiento Personalizado",
      description:
        "Te acompañamos desde la idea hasta el lanzamiento y más allá.",
    },
    {
      icon: TrendingUp,
      title: "Crecimiento Escalable",
      description:
        "Soluciones que crecen con tu negocio, desde startup hasta empresa consolidada.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-flaks-gradient-start to-flaks-gradient-end relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-flaks-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-flaks-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Stats Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black font-lato text-white mb-6">
            Resultados que <span className="text-flaks-green">Hablan</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-lato mb-12 max-w-3xl mx-auto">
            Más de una década conectando negocios con sus clientes a través de
            soluciones digitales efectivas.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-black font-lato text-flaks-green mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-bold font-lato text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400 font-lato">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-black font-lato text-white text-center mb-12">
            ¿Por qué elegir <span className="text-flaks-green">FLAKS</span>?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-flaks-dark-secondary/50 backdrop-blur-sm p-8 rounded-2xl border border-flaks-green/10 hover:border-flaks-green/30 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-flaks-green/10 rounded-xl group-hover:bg-flaks-green/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-flaks-green" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold font-lato text-white mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-300 font-lato leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-flaks-green/10 border border-flaks-green/20 rounded-full">
            <Award className="w-5 h-5 text-flaks-green mr-2" />
            <span className="text-flaks-green font-lato font-medium">
              Certificados en desarrollo web y marketing digital
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
