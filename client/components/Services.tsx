import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Globe, 
  ShoppingCart, 
  Rocket, 
  Code, 
  Search, 
  Headphones,
  CheckCircle
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Landing Page",
      subtitle: "¡LANZÁ TU PROYECTO HOY!",
      description: "Ideal para emprendedores",
      features: [
        "Página única y diseño a medida",
        "Hosting, dominio .com.ar y SSL",
        "Optimizada para móviles",
        "Formulario de contacto integrado"
      ],
      highlight: "DESDE $25.000",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: ShoppingCart,
      title: "Web Corporativa",
      subtitle: "POSICIONÁ Y ESCALÁ TU MARCA",
      description: "Ideal para empresas",
      features: [
        "Hasta 5 páginas a medida",
        "Hosting, dominio .com.ar y SSL",
        "Integración de plataformas de pago y métodos de envío",
        "Panel de administración completo"
      ],
      highlight: "DESDE $45.000",
      color: "from-flaks-green to-emerald-400",
      featured: true
    },
    {
      icon: Rocket,
      title: "Tienda Digital",
      subtitle: "¡VENDÉ A TODA HORA!",
      description: "E-commerce autogestionable",
      features: [
        "E-commerce autogestionable",
        "Integración de plataformas de pago y métodos de envío",
        "Panel de administración completo",
        "Hosting premium y soporte técnico"
      ],
      highlight: "DESDE $65.000",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const additionalServices = [
    {
      icon: Search,
      title: "Más visibilidad en Google",
      description: "Posicionamiento SEO y estrategias de marketing digital"
    },
    {
      icon: Code,
      title: "Desarrollo personalizado",
      description: "Soluciones web a medida para necesidades específicas"
    },
    {
      icon: Headphones,
      title: "Asesoramiento personalizado",
      description: "Te acompañamos en cada etapa del crecimiento digital"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-lato text-flaks-dark mb-6">
            Nuestros <span className="text-flaks-green">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
            Elegí la solución perfecta para tu negocio. Todos nuestros planes incluyen 
            soporte técnico, hosting y dominio.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  service.featured ? 'ring-2 ring-flaks-green shadow-2xl' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-flaks-green text-black text-center py-2 font-lato font-bold text-sm">
                    MÁS POPULAR
                  </div>
                )}
                
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Icon and Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-black font-lato text-flaks-dark mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm font-bold text-flaks-green mb-1">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 font-lato">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-6">
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-flaks-green mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 font-lato">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and CTA */}
                  <div className="text-center">
                    <div className="text-2xl font-black font-lato text-flaks-dark mb-4">
                      {service.highlight}
                    </div>
                    <Button 
                      className={`w-full font-lato font-bold py-3 rounded-xl transition-all duration-300 ${
                        service.featured 
                          ? 'bg-flaks-green hover:bg-flaks-green-dark text-black' 
                          : 'bg-flaks-dark hover:bg-flaks-dark-secondary text-white'
                      }`}
                    >
                      Elegir Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-flaks-dark rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-black font-lato text-white text-center mb-12">
            Servicios <span className="text-flaks-green">Adicionales</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-4 bg-flaks-green/10 rounded-2xl mb-4 group-hover:bg-flaks-green/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-flaks-green" />
                  </div>
                  <h4 className="text-xl font-bold font-lato text-white mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-300 font-lato">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
