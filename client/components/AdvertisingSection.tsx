import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  BarChart, 
  Zap, 
  DollarSign,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function AdvertisingSection() {
  const advertisingPlans = [
    {
      icon: Target,
      title: "Plan Inicial",
      subtitle: "PRIMEROS PASOS EN PUBLICIDAD",
      description: "Ideal para probar el mercado",
      features: [
        "Presupuesto sugerido: $30.000/mes",
        "2 campañas activas",
        "Segmentación básica",
        "Reporte semanal de resultados",
        "Optimización cada 15 días"
      ],
      highlight: "",
      color: "from-blue-500 to-cyan-600",
      investment: "$30.000"
    },
    {
      icon: BarChart,
      title: "Plan Crecimiento",
      subtitle: "ESCALÁ TU NEGOCIO",
      description: "Para negocios en expansión",
      features: [
        "Presupuesto sugerido: $60.000/mes",
        "4-6 campañas activas",
        "Segmentación avanzada + lookalike",
        "Reportes detallados semanales",
        "Optimización continua",
        "A/B testing de creatividades"
      ],
      highlight: "",
      color: "from-flaks-green to-emerald-400",
      featured: true,
      investment: "$60.000"
    },
    {
      icon: TrendingUp,
      title: "Plan Profesional",
      subtitle: "MÁXIMO RENDIMIENTO",
      description: "Para empresas establecidas",
      features: [
        "Presupuesto sugerido: $100.000+/mes",
        "Campañas ilimitadas",
        "Segmentación premium + retargeting",
        "Reportes en tiempo real",
        "Optimización diaria",
        "Consultor dedicado",
        "Creatividades premium incluidas"
      ],
      highlight: "",
      color: "from-purple-500 to-violet-600",
      investment: "$100.000+"
    }
  ];

  const platforms = [
    { name: "Google Ads", description: "Búsquedas y Display" },
    { name: "Meta Ads", description: "Facebook e Instagram" },
    { name: "YouTube Ads", description: "Videos y remarketing" },
    { name: "LinkedIn Ads", description: "Audiencias B2B" }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Segmentación Precisa",
      description: "Llegamos exactamente a tu audiencia ideal"
    },
    {
      icon: BarChart,
      title: "Métricas Transparentes",
      description: "Reportes detallados de cada peso invertido"
    },
    {
      icon: Zap,
      title: "Optimización Continua",
      description: "Mejoramos constantemente el rendimiento"
    }
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
            Convertimos tu inversión publicitaria en resultados reales. Gestionamos tus campañas 
            para maximizar el retorno y hacer crecer tu negocio.
          </p>
          
          {/* Supported Platforms */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-xl text-center">
                <h4 className="font-bold font-lato text-flaks-dark mb-1">{platform.name}</h4>
                <p className="text-sm text-gray-600 font-lato">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-flaks-green/10 rounded-2xl mb-4">
                  <Icon className="w-8 h-8 text-flaks-green" />
                </div>
                <h3 className="text-xl font-bold font-lato text-flaks-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-lato">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {advertisingPlans.map((plan, index) => {
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
                    RECOMENDADO
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
                    <p className="text-gray-600 font-lato mb-3">
                      {plan.description}
                    </p>
                    <div className="bg-flaks-green/10 px-3 py-1 rounded-full">
                      <span className="text-flaks-green font-lato font-bold text-sm">
                        Inversión sugerida: {plan.investment}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-flaks-green mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 font-lato">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and CTA */}
                  <div className="text-center">
                    <div className="text-xl font-black font-lato text-flaks-dark mb-4">
                      {plan.highlight}
                    </div>
                    <Button 
                      className={`w-full font-lato font-bold py-3 rounded-xl transition-all duration-300 ${
                        plan.featured 
                          ? 'bg-flaks-green hover:bg-flaks-green-dark text-black' 
                          : 'bg-flaks-dark hover:bg-flaks-dark-secondary text-white'
                      }`}
      onClick={() => window.location.href = '/pauta-publicitaria'}
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
        <div className="bg-gradient-to-br from-flaks-green to-emerald-400 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-black font-lato text-black mb-6">
            ¿Querés maximizar tu retorno publicitario?
          </h3>
          <p className="text-xl text-black/80 font-lato mb-8 max-w-3xl mx-auto">
            Nuestros especialistas analizan tu negocio y crean campañas que realmente convierten. 
            Comenzá hoy y ve los resultados en la primera semana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black hover:bg-flaks-dark text-flaks-green font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
              Consultá tu Estrategia
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-flaks-green font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300">
              Solicitar Auditoría Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
