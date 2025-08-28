import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "../../components/ContactForm";
import {
  Instagram,
  Facebook,
  MessageCircle,
  TrendingUp,
  Users,
  Calendar,
  ArrowRight,
  CheckCircle,
  BarChart,
  Palette,
  Clock,
  Target,
  Zap,
} from "lucide-react";

export default function RedesSociales() {
  const plans = [
    {
      icon: Instagram,
      title: "Plan Básico",
      subtitle: "PERFECTO PARA EMPEZAR",
      description: "Gestión de 1-2 redes sociales",
      features: [
        "8-12 publicaciones mensuales de calidad",
        "Historias y reels básicos",
        "Diseño gráfico profesional incluido",
        "Programación de contenido estratégico",
        "Respuesta a mensajes en horario comercial",
        "Análisis mensual básico",
        "Hashtags optimizados",
      ],
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Plan Profesional",
      subtitle: "CRECIMIENTO ACELERADO",
      description: "Gestión completa + estrategia",
      features: [
        "15-20 publicaciones mensuales premium",
        "Stories diarios y reels profesionales",
        "Diseño gráfico premium con tu branding",
        "Análisis y reportes detallados mensuales",
        "Community management completo",
        "Estrategia de contenidos personalizada",
        "Interacción con audiencia",
        "Gestión de crisis en redes",
      ],
      color: "from-flaks-green to-emerald-400",
      featured: true,
    },
    {
      icon: Users,
      title: "Plan Empresarial",
      subtitle: "MÁXIMO IMPACTO",
      description: "Gestión integral + publicidad",
      features: [
        "25+ publicaciones mensuales premium",
        "Contenido de alta calidad y profesional",
        "Gestión de múltiples plataformas",
        "Reportes detallados y métricas avanzadas",
        "Community management 24/7",
        "Estrategia integral de marca",
        "Campañas publicitarias básicas incluidas",
        "Consultor dedicado",
      ],
      color: "from-blue-500 to-indigo-600",
    },
  ];

  const platforms = [
    {
      icon: Instagram,
      name: "Instagram",
      color: "text-pink-500",
      description: "Stories, reels, feed y IGTV",
    },
    {
      icon: Facebook,
      name: "Facebook",
      color: "text-blue-600",
      description: "Posts, eventos y grupos",
    },
    {
      icon: MessageCircle,
      name: "WhatsApp Business",
      color: "text-green-500",
      description: "Estados y atención directa",
    },
    {
      icon: TrendingUp,
      name: "LinkedIn",
      color: "text-blue-500",
      description: "Networking profesional y B2B",
    },
  ];

  const services = [
    {
      icon: Palette,
      title: "Diseño Gráfico",
      description: "Creatividades únicas que reflejan tu marca",
    },
    {
      icon: Calendar,
      title: "Programación de Contenido",
      description: "Publicaciones automáticas en horarios óptimos",
    },
    {
      icon: BarChart,
      title: "Análisis y Reportes",
      description: "Métricas detalladas del rendimiento",
    },
    {
      icon: MessageCircle,
      title: "Community Management",
      description: "Respuesta a comentarios y mensajes",
    },
    {
      icon: Target,
      title: "Estrategia de Contenido",
      description: "Plan editorial personalizado para tu audiencia",
    },
    {
      icon: Zap,
      title: "Gestión de Crisis",
      description: "Manejo profesional de situaciones complejas",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Análisis de Marca",
      description: "Estudiamos tu negocio y audiencia objetivo",
    },
    {
      number: "02",
      title: "Estrategia de Contenido",
      description: "Creamos un plan editorial personalizado",
    },
    {
      number: "03",
      title: "Producción de Contenido",
      description: "Diseñamos y programamos publicaciones",
    },
    {
      number: "04",
      title: "Monitoreo y Optimización",
      description: "Analizamos resultados y mejoramos continuamente",
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
                <Instagram className="w-4 h-4 mr-2" />
                Gestión Profesional de Redes
              </div>

              <h1 className="text-4xl md:text-5xl font-black font-lato text-white mb-6 leading-tight">
                Potenciamos tu{" "}
                <span className="text-flaks-green">presencia digital</span> en
                redes sociales
              </h1>

              <p className="text-xl text-gray-300 font-lato mb-8 leading-relaxed">
                Creamos contenido estratégico que conecta con tu audiencia, hace
                crecer tu comunidad y convierte seguidores en clientes reales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-flaks-green hover:bg-flaks-green-dark text-black font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
                  Ver Nuestros Planes
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-flaks-green text-flaks-green hover:bg-flaks-green hover:text-black font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300"
                >
                  Solicitar Presupuesto
                </Button>
              </div>
            </div>

            {/* Right: Social Media Visual */}
            <div className="relative">
              <div className="aspect-square bg-flaks-green/10 rounded-3xl backdrop-blur-sm border border-flaks-green/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center space-x-4 mb-6">
                    <Instagram className="w-12 h-12 text-pink-500" />
                    <Facebook className="w-12 h-12 text-blue-600" />
                    <MessageCircle className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold font-lato text-white mb-2">
                    Gestión Integral
                  </h3>
                  <p className="text-gray-300 font-lato">
                    Todas tus redes en un solo lugar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black font-lato text-flaks-dark mb-4">
              Plataformas que{" "}
              <span className="text-flaks-green">gestionamos</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <Icon
                    className={`w-12 h-12 ${platform.color} mx-auto mb-4`}
                  />
                  <h3 className="text-lg font-bold font-lato text-flaks-dark mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 font-lato text-sm">
                    {platform.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-lato text-flaks-dark mb-6">
              Nuestros <span className="text-flaks-green">Planes</span>
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
              Elegí el plan que mejor se adapte a tu negocio. Todos incluyen
              contenido de calidad y estrategia personalizada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card
                  key={index}
                  className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.featured ? "ring-2 ring-flaks-green shadow-2xl" : ""
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute top-0 left-0 right-0 bg-flaks-green text-black text-center py-2 font-lato font-bold text-sm">
                      MÁS POPULAR
                    </div>
                  )}

                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="text-center mb-6">
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.color} mb-4`}
                      >
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

                    <div className="flex-grow mb-6">
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-flaks-green mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 font-lato">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-center">
                      <Button
                        className={`w-full font-lato font-bold py-3 rounded-xl transition-all duration-300 ${
                          plan.featured
                            ? "bg-flaks-green hover:bg-flaks-green-dark text-black"
                            : "bg-flaks-dark hover:bg-flaks-dark-secondary text-white"
                        }`}
                      >
                        Solicitar Presupuesto
                      </Button>
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
            <h2 className="text-4xl font-black font-lato text-flaks-dark mb-6">
              ¿Qué incluye nuestro{" "}
              <span className="text-flaks-dark-secondary">servicio</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="inline-flex p-4 bg-flaks-green/10 rounded-2xl mb-6">
                    <Icon className="w-8 h-8 text-flaks-green" />
                  </div>
                  <h3 className="text-xl font-bold font-lato text-flaks-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-lato">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black font-lato text-flaks-dark mb-6">
              Nuestro <span className="text-flaks-dark-secondary">Proceso</span>
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
              Te acompañamos paso a paso para hacer crecer tu presencia en redes
              sociales.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-flaks-green rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-black font-lato text-black">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-lato text-flaks-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-lato">{step.description}</p>
              </div>
            ))}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-flaks-gradient-start to-flaks-gradient-end">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black font-lato text-white mb-6">
            ¿Listo para hacer crecer tus{" "}
            <span className="text-flaks-green">redes sociales</span>?
          </h2>
          <p className="text-xl text-gray-300 font-lato mb-8 max-w-3xl mx-auto">
            Contanos sobre tu marca y te proponemos la mejor estrategia para
            conectar con tu audiencia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-flaks-green hover:bg-flaks-green-dark text-black font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
              Contactar por WhatsApp
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-flaks-green text-flaks-green hover:bg-flaks-green hover:text-black font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300"
            >
              Solicitar Presupuesto
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
