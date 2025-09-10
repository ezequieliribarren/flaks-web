import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "../../components/ContactForm";
import RemixProcessForm from "@/components/RemixProcessForm";
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
        "Identificamos y llegamos a tu audiencia ideal usando datos demográficos, intereses y comportamientos específicos.",
      details: [
        "Análisis de audiencia objetivo",
        "Segmentación por edad, ubicación e intereses",
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
        "Reportes detallados mensuales",
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
      <section className="relative bg-gradient-to-br from-flaks-gradient-start to-flaks-gradient-end pt-10 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-flaks-green/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-flaks-green/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-flaks-green/10 border border-flaks-green/20 rounded-full text-flaks-green font-lato font-medium text-sm mb-8">
                <Target className="w-4 h-4 mr-2" />
                Publicidad Digital Estratégica
              </div>

              <h1 className="text-3xl md:text-5xl font-black font-lato text-white mb-6 md:mb-8 leading-tight">
                Pauta publicitaria |{" "}
                <span className="text-flaks-green">Publicidad online</span>{" "}
              </h1>

              <p className="text-lg md:text-xl text-gray-300 font-lato mb-8 leading-relaxed">
                Gestionamos tus campañas en Google Ads, Facebook, Instagram para maximizar tu retorno de inversión y hacer
                crecer tu negocio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-flaks-green hover:bg-flaks-green-dark text-black font-lato font-bold px-5 py-3 text-base md:px-8 md:py-4 md:text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    const el = document.getElementById("contacto");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    } else {
                      window.location.hash = "#contacto";
                    }
                  }}
                >
                  Solicitar presupuesto
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Right: Advertising Visual */}
            <div className="relative mt-6 md:mt-0 hidden lg:block">
              <div className="aspect-[4/3] md:aspect-square bg-flaks-green/10 rounded-3xl backdrop-blur-sm border border-flaks-green/20 flex items-center justify-center max-w-[360px] mx-auto p-4">
                <img className="w-full h-auto object-contain" src="/pautapublicitaria.webp" alt="Publicidad digital" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-lato text-flaks-dark mb-6">
              ¿Cómo lo  <span className="text-flaks-violet-dark">Hacemos?</span>
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
              Ofrecemos un servicio integral de publicidad digital que abarca
              desde la estrategia hasta la optimización continua.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="h-full">
                  <CardContent className="p-8 md:p-10 h-full flex flex-col">
                    <div className="text-center mb-6">
                      <div className="inline-flex p-4 bg-flaks-green/10 rounded-2xl mb-4">
                        <Icon className="w-10 h-10 text-flaks-green" />
                      </div>
                      <h3 className="text-2xl font-black font-lato text-flaks-dark mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 font-lato">
                        {service.description}
                      </p>
                    </div>
                    <ul className="space-y-3 flex-1">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-flaks-green rounded-full mt-3 mr-4 flex-shrink-0"></div>
                          <span className="text-gray-700 font-lato">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black font-lato text-flaks-dark mb-6">
              Beneficios de la{" "}
              <span className="text-flaks-dark-secondary">publicidad digital</span>
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

      {/* Results Bubbles Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black font-lato text-flaks-dark mb-3">
              Resultados <span className="text-flaks-violet-dark">que generan cambios</span>
            </h2>
            <p className="text-gray-600 font-lato max-w-2xl mx-auto">
              Lo que conseguimos al invertir de forma inteligente
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              { icon: Users, label: "Generación de leads" },
              { icon: MousePointer, label: "Más clics calificados" },
              { icon: TrendingUp, label: "Crecimiento de ventas" },
              { icon: Eye, label: "Mayor visibilidad" },
              { icon: Globe, label: "Alcance segmentado" },
              { icon: DollarSign, label: "Mejor ROAS" },
            ].map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.label}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white border border-flaks-green/30 shadow-sm text-flaks-dark animate-pop-in animate-float"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <Icon className="w-4 h-4 text-flaks-green" />
                  <span className="font-lato font-semibold text-sm">{b.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Contact Form Section (remix) */}
      <RemixProcessForm />


      <Footer />
    </div>
  );
}
