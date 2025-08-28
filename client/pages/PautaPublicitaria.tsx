import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "../../components/ContactForm";
import {
  Target,
  BarChart,
  TrendingUp,
  DollarSign,
  Users,
  ArrowRight,
  Zap,
  Eye,
  MousePointer,
  Smartphone,
  Globe,
  Search,
  MessageSquare,
  PlayCircle,
  Settings,
  Activity,
} from "lucide-react";

export default function PautaPublicitaria() {
  const platforms = [
    {
      icon: Search,
      name: "Google Ads",
      description: "Aparece en las búsquedas cuando tus clientes te buscan",
      features: ["Búsquedas", "Display", "Shopping", "YouTube"],
    },
    {
      icon: Users,
      name: "Meta Ads",
      description: "Conecta con tu audiencia en Facebook e Instagram",
      features: ["Feed", "Stories", "Reels", "Marketplace"],
    },
    {
      icon: PlayCircle,
      name: "YouTube Ads",
      description: "Campañas de video que capturan la atención",
      features: ["Video ads", "Bumper ads", "Discovery", "Shorts"],
    },
    {
      icon: MessageSquare,
      name: "LinkedIn Ads",
      description: "Llegá a profesionales y decisores en B2B",
      features: ["Sponsored Content", "Message Ads", "Dynamic Ads", "Lead Gen"],
    },
  ];

  const services = [
    {
      icon: Target,
      title: "Segmentación Precisa",
      description:
        "Identificamos y llegamos exactamente a tu audiencia ideal usando datos demográficos, intereses y comportamientos específicos.",
      details: [
        "Análisis de audiencia objetivo",
        "Segmentación por edad, ubicación e intereses",
        "Lookalike audiences",
        "Retargeting de visitantes web",
      ],
    },
    {
      icon: BarChart,
      title: "Gestión de Campañas",
      description:
        "Creamos, monitoreamos y optimizamos tus campañas publicitarias para maximizar el retorno de tu inversión.",
      details: [
        "Configuración completa de campañas",
        "Monitoreo en tiempo real",
        "Optimización continua de rendimiento",
        "A/B testing de creatividades",
      ],
    },
    {
      icon: TrendingUp,
      title: "Optimización de Resultados",
      description:
        "Analizamos métricas clave y ajustamos estrategias para mejorar continuamente el rendimiento de tus anuncios.",
      details: [
        "Análisis de métricas clave (CTR, CPC, ROAS)",
        "Optimización de presupuestos",
        "Mejora de creatividades",
        "Reportes detallados semanales",
      ],
    },
  ];

  const benefits = [
    {
      icon: Eye,
      title: "Mayor Visibilidad",
      description: "Tu marca aparece donde están tus clientes potenciales",
    },
    {
      icon: MousePointer,
      title: "Resultados Medibles",
      description: "Cada peso invertido es trackeable y optimizable",
    },
    {
      icon: DollarSign,
      title: "Control de Presupuesto",
      description: "Vos decidís cuánto invertir y nosotros lo optimizamos",
    },
    {
      icon: Zap,
      title: "Resultados Rápidos",
      description: "Comenzás a ver resultados desde el primer día",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Análisis y Estrategia",
      description:
        "Estudiamos tu negocio, competencia y audiencia para crear la estrategia perfecta.",
      icon: Target,
    },
    {
      number: "02",
      title: "Configuración de Campañas",
      description:
        "Creamos y configuramos tus campañas en las plataformas más efectivas para tu negocio.",
      icon: Settings,
    },
    {
      number: "03",
      title: "Lanzamiento y Monitoreo",
      description:
        "Lanzamos las campañas y monitoreamos su rendimiento en tiempo real.",
      icon: Activity,
    },
    {
      number: "04",
      title: "Optimización Continua",
      description:
        "Analizamos resultados y optimizamos constantemente para mejorar el ROI.",
      icon: TrendingUp,
    },
  ];

  const metrics = [
    {
      label: "ROI Promedio",
      value: "300%",
      description: "Retorno de inversión",
    },
    { label: "CTR Promedio", value: "2.5%", description: "Click-through rate" },
    {
      label: "Campañas Activas",
      value: "150+",
      description: "Gestionadas mensualmente",
    },
    {
      label: "Inversión Gestionada",
      value: "$5M+",
      description: "En publicidad digital",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-flaks-gradient-start to-flaks-gradient-end py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-flaks-green/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-flaks-green/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-flaks-green/10 border border-flaks-green/20 rounded-full text-flaks-green font-lato font-medium text-sm mb-6">
                <Target className="w-4 h-4 mr-2" />
                Publicidad Digital Estratégica
              </div>

              <h1 className="text-4xl md:text-5xl font-black font-lato text-white mb-6 leading-tight">
                Convertimos tu{" "}
                <span className="text-flaks-green">inversión publicitaria</span>{" "}
                en resultados reales
              </h1>

              <p className="text-xl text-gray-300 font-lato mb-8 leading-relaxed">
                Gestionamos tus campañas en Google Ads, Facebook, Instagram y
                otras plataformas para maximizar tu retorno de inversión y hacer
                crecer tu negocio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-flaks-green hover:bg-flaks-green-dark text-black font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
                  Solicitar Auditoría Gratuita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-flaks-green text-flaks-green hover:bg-flaks-green hover:text-black font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300"
                >
                  Ver Casos de Éxito
                </Button>
              </div>
            </div>

            {/* Right: Advertising Visual */}
            <div className="relative">
              <div className="aspect-square bg-flaks-green/10 rounded-3xl backdrop-blur-sm border border-flaks-green/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-flaks-green/20 p-4 rounded-xl">
                      <Target className="w-8 h-8 text-flaks-green mx-auto" />
                    </div>
                    <div className="bg-flaks-green/20 p-4 rounded-xl">
                      <BarChart className="w-8 h-8 text-flaks-green mx-auto" />
                    </div>
                    <div className="bg-flaks-green/20 p-4 rounded-xl">
                      <TrendingUp className="w-8 h-8 text-flaks-green mx-auto" />
                    </div>
                    <div className="bg-flaks-green/20 p-4 rounded-xl">
                      <DollarSign className="w-8 h-8 text-flaks-green mx-auto" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-lato text-white mb-2">
                    Campañas Optimizadas
                  </h3>
                  <p className="text-gray-300 font-lato">
                    Máximo ROI garantizado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black font-lato text-flaks-dark mb-4">
              Resultados que{" "}
              <span className="text-flaks-green">demuestran</span> nuestra
              experiencia
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-black font-lato text-flaks-green mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-bold font-lato text-flaks-dark mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600 font-lato">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-lato text-flaks-dark mb-6">
              Plataformas que{" "}
              <span className="text-flaks-green">dominamos</span>
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
              Trabajamos en las principales plataformas publicitarias para
              llegar a tu audiencia donde sea que esté.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <Card
                  key={index}
                  className="h-full hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="inline-flex p-4 bg-flaks-green/10 rounded-2xl mb-4">
                      <Icon className="w-8 h-8 text-flaks-green" />
                    </div>
                    <h3 className="text-xl font-bold font-lato text-flaks-dark mb-3">
                      {platform.name}
                    </h3>
                    <p className="text-gray-600 font-lato mb-4 flex-grow">
                      {platform.description}
                    </p>
                    <div className="space-y-1">
                      {platform.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="text-sm text-flaks-green font-lato font-medium"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-lato text-flaks-dark mb-6">
              Nuestros <span className="text-flaks-green">Servicios</span>
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
              Ofrecemos un servicio integral de publicidad digital que abarca
              desde la estrategia hasta la optimización continua.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="inline-flex p-4 bg-flaks-green/10 rounded-2xl mb-6">
                      <Icon className="w-10 h-10 text-flaks-green" />
                    </div>
                    <h3 className="text-3xl font-black font-lato text-flaks-dark mb-4">
                      {service.title}
                    </h3>
                    <p className="text-xl text-gray-600 font-lato mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-flaks-green rounded-full mt-3 mr-4 flex-shrink-0"></div>
                          <span className="text-gray-700 font-lato">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <div className="bg-white p-8 rounded-3xl shadow-lg">
                      <div className="aspect-square bg-gradient-to-br from-flaks-green/20 to-flaks-green/5 rounded-2xl flex items-center justify-center">
                        <Icon className="w-24 h-24 text-flaks-green" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-flaks-gradient-start to-flaks-gradient-end">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black font-lato text-white">
              Contactanos <span className="text-flaks-green">ahora</span>
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black font-lato text-flaks-dark mb-6">
              Beneficios de la{" "}
              <span className="text-flaks-green">publicidad digital</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex p-4 bg-flaks-green/10 rounded-2xl mb-6">
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black font-lato text-flaks-dark mb-6">
              Nuestro <span className="text-flaks-green">Proceso</span>
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
              Un proceso probado que garantiza el éxito de tus campañas
              publicitarias.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-flaks-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-black font-lato text-black">
                        {step.number}
                      </span>
                    </div>
                    <div className="inline-flex p-2 bg-white rounded-xl shadow-md -mt-6 relative z-10">
                      <Icon className="w-6 h-6 text-flaks-green" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-lato text-flaks-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-lato">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-flaks-gradient-start to-flaks-gradient-end">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black font-lato text-white mb-6">
            ¿Listo para maximizar tu{" "}
            <span className="text-flaks-green">retorno publicitario</span>?
          </h2>
          <p className="text-xl text-gray-300 font-lato mb-8 max-w-3xl mx-auto">
            Nuestros especialistas analizan tu negocio y crean campañas que
            realmente convierten. Comenzá hoy y ve los resultados en la primera
            semana.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-flaks-green hover:bg-flaks-green-dark text-black font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
              Solicitar Auditoría Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-flaks-green text-flaks-green hover:bg-flaks-green hover:text-black font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300"
            >
              Contactar Especialista
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
