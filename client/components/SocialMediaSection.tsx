import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Instagram, 
  Facebook, 
  MessageCircle, 
  TrendingUp,
  Users,
  Calendar,
  ArrowRight
} from "lucide-react";

export default function SocialMediaSection() {
  const socialPlans = [
    {
      icon: Instagram,
      title: "Plan Básico",
      subtitle: "PERFECTO PARA EMPEZAR",
      description: "Gestión de 1-2 redes sociales",
      features: [
        "8-12 publicaciones mensuales",
        "Historias y reels básicos",
        "Diseño gráfico incluido",
        "Programación de contenido",
        "Respuesta a mensajes (horario comercial)"
      ],
      highlight: "",
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Plan Profesional",
      subtitle: "CRECIMIENTO ACELERADO",
      description: "Gestión completa + estrategia",
      features: [
        "15-20 publicaciones mensuales",
        "Stories diarios y reels profesionales",
        "Diseño gráfico premium",
        "Análisis y reportes mensuales",
        "Community management completo",
        "Estrategia de contenidos personalizada"
      ],
      highlight: "",
      color: "from-flaks-green to-emerald-400",
      featured: true
    },
    {
      icon: Users,
      title: "Plan Empresarial",
      subtitle: "MÁXIMO IMPACTO",
      description: "Gestión integral + publicidad",
      features: [
        "25+ publicaciones mensuales",
        "Contenido premium y profesional",
        "Gestión de múltiples plataformas",
        "Reportes detallados",
        "Community management 24/7",
        "Campañas publicitarias básicas incluidas"
      ],
      highlight: "",
      color: "from-blue-500 to-indigo-600"
    }
  ];

  const platforms = [
    { icon: Instagram, name: "Instagram", color: "text-pink-500" },
    { icon: Facebook, name: "Facebook", color: "text-blue-600" },
    { icon: MessageCircle, name: "WhatsApp Business", color: "text-green-500" },
    { icon: TrendingUp, name: "LinkedIn", color: "text-blue-500" }
  ];

  return (
    <section id="redes-sociales" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-lato text-flaks-dark mb-6">
            <span className="text-flaks-green">Gestión de Redes Sociales</span>
          </h2>
          <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto mb-8">
            Potenciamos tu presencia digital con contenido estratégico que conecta con tu audiencia 
            y hace crecer tu comunidad.
          </p>
          
          {/* Supported Platforms */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div key={index} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                  <Icon className={`w-5 h-5 ${platform.color}`} />
                  <span className="font-lato font-medium text-gray-700">{platform.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {socialPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.featured ? 'ring-2 ring-flaks-green shadow-2xl' : ''
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-flaks-green text-black text-center py-2 font-lato font-bold text-sm">
                    MÁS POPULAR
                  </div>
                )}
                
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Icon and Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.color} mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-black font-lato text-flaks-dark mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-sm font-bold text-flaks-green mb-1">
                      {plan.subtitle}
                    </p>
                    <p className="text-gray-600 font-lato">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Calendar className="w-5 h-5 text-flaks-green mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 font-lato">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and CTA */}
                  <div className="text-center">
                    {plan.highlight && (
                      <div className="text-2xl font-black font-lato text-flaks-dark mb-4">
                        {plan.highlight}
                      </div>
                    )}
                    <Button 
                      className={`w-full font-lato font-bold py-3 rounded-xl transition-all duration-300 ${
                        plan.featured 
                          ? 'bg-flaks-green hover:bg-flaks-green-dark text-black' 
                          : 'bg-flaks-dark hover:bg-flaks-dark-secondary text-white'
                      }`}
                      onClick={() => window.location.href = '/redes-sociales'}
                    >
                      Ver Detalles del Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-flaks-dark rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-black font-lato text-white mb-6">
            ¿Necesitás una estrategia <span className="text-flaks-green">personalizada</span>?
          </h3>
          <p className="text-xl text-gray-300 font-lato mb-8 max-w-3xl mx-auto">
            Cada negocio es único. Creamos estrategias de contenido que se adaptan 
            perfectamente a tu marca y objetivos.
          </p>
          <Button className="bg-flaks-green hover:bg-flaks-green-dark text-black font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
            Consultá tu Estrategia
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
