import { Button } from "@/components/ui/button";
import { Target, BarChart, TrendingUp, ArrowRight } from "lucide-react";

export default function AdvertisingHome() {
  const features = [
    {
      icon: Target,
      title: "Segmentación Precisa",
      description: "Llegamos exactamente a tu audiencia ideal",
    },
    {
      icon: BarChart,
      title: "Resultados Medibles",
      description: "Reportes detallados de cada peso invertido",
    },
    {
      icon: TrendingUp,
      title: "Optimización Continua",
      description: "Mejoramos constantemente el rendimiento",
    },
  ];

  return (
    <section id="pauta-publicitaria" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-lato text-flaks-dark mb-6">
            <span className="text-flaks-green">Pauta Publicitaria</span>
          </h2>
          <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto mb-8">
            Convertimos tu inversión publicitaria en resultados reales.
            Gestionamos tus campañas en Google Ads, Facebook, Instagram y otras
            plataformas para maximizar tu retorno.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-flaks-green/10 rounded-2xl mb-4">
                  <Icon className="w-8 h-8 text-flaks-green" />
                </div>
                <h3 className="text-xl font-bold font-lato text-flaks-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-lato">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-flaks-gradient-start to-flaks-gradient-end rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-black font-lato text-white mb-6">
              ¿Querés maximizar tu{" "}
              <span className="text-flaks-green">retorno publicitario</span>?
            </h3>
            <p className="text-xl text-gray-300 font-lato mb-8 max-w-3xl mx-auto">
              Nuestros especialistas crean campañas que realmente convierten.
              Descubre todas nuestras estrategias publicitarias.
            </p>
            <Button
              className="bg-flaks-green hover:bg-flaks-green-dark text-black font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => (window.location.href = "/pauta-publicitaria")}
            >
              Ver Servicios de Publicidad
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
