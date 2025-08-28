import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "../../components/ContactForm";
import {
  Globe,
  Code,
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Smartphone,
  Search,
  Zap,
} from "lucide-react";

export default function DesarrolloWeb() {
  const plans = [
    {
      icon: Globe,
      title: "Landing Page",
      subtitle: "¡LANZÁ TU PROYECTO HOY!",
      description: "Ideal para emprendedores y nuevos negocios",
      features: [
        "Página única y diseño a medida",
        "Hosting, dominio .com.ar y SSL incluidos",
        "Optimizada para móviles y tablets",
        "Formulario de contacto integrado",
        "Tiempo de entrega: 7 días hábiles",
        "Certificado de seguridad SSL",
        "Optimización básica de velocidad",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Code,
      title: "Web Corporativa",
      subtitle: "POSICIONÁ Y ESCALÁ TU MARCA",
      description: "Ideal para empresas establecidas",
      features: [
        "Hasta 5 páginas con diseño profesional",
        "Hosting premium y dominio .com.ar",
        "Panel de administración CMS",
        "SEO básico y optimización Google",
        "Integración con redes sociales",
        "Formularios de contacto avanzados",
        "Tiempo de entrega: 15 días hábiles",
      ],
      color: "from-flaks-green to-emerald-400",
      featured: true,
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      subtitle: "¡VENDÉ ONLINE 24/7!",
      description: "Tienda digital completa",
      features: [
        "E-commerce con carrito de compras",
        "Integración MercadoPago y otros métodos",
        "Panel de administración completo",
        "Gestión de productos e inventario",
        "Integración con métodos de envío",
        "Hosting premium y soporte técnico",
        "Tiempo de entrega: 20 días hábiles",
      ],
      color: "from-purple-500 to-purple-600",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description: "SSL gratuito y hosting seguro incluido",
    },
    {
      icon: Smartphone,
      title: "Diseño Responsive",
      description: "Perfecto en móviles, tablets y escritorio",
    },
    {
      icon: Search,
      title: "SEO Optimizado",
      description: "Optimizado para aparecer en Google",
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Tiempos de entrega garantizados",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Consulta y Planificación",
      description: "Analizamos tu negocio y definimos objetivos",
    },
    {
      number: "02",
      title: "Diseño y Desarrollo",
      description: "Creamos tu sitio con la mejor tecnología",
    },
    {
      number: "03",
      title: "Pruebas y Lanzamiento",
      description: "Revisamos todo y publicamos tu sitio",
    },
    {
      number: "04",
      title: "Soporte Continuo",
      description: "Te acompañamos después del lanzamiento",
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
                <Code className="w-4 h-4 mr-2" />
                Desarrollo Web Profesional
              </div>

              <h1 className="text-4xl md:text-5xl font-black font-lato text-white mb-6 leading-tight">
                Creamos tu <span className="text-flaks-green">página web</span>{" "}
                que impulsa tu negocio
              </h1>

              <p className="text-xl text-gray-300 font-lato mb-8 leading-relaxed">
                Desde landing pages hasta e-commerce completos. Desarrollamos
                sitios web que generan confianza, atraen clientes y están
                disponibles 24/7.
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

            {/* Right: Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-flaks-green/10 rounded-3xl backdrop-blur-sm border border-flaks-green/20 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-24 h-24 text-flaks-green mx-auto mb-4" />
                  <h3 className="text-xl font-bold font-lato text-white mb-2">
                    Tu Web Profesional
                  </h3>
                  <p className="text-gray-300 font-lato">
                    Diseño moderno y funcional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-flaks-gradient-start to-flaks-gradient-end">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black font-lato text-white">
              Contactanos
              <span className="text-flaks-green"> ahora</span>
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black font-lato text-flaks-dark mb-4">
              ¿Por qué elegir nuestro{" "}
              <span className="text-flaks-green">desarrollo web</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex p-4 bg-flaks-green/10 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-flaks-green" />
                  </div>
                  <h3 className="text-lg font-bold font-lato text-flaks-dark mb-2">
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

      {/* Plans Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-lato text-flaks-dark mb-6">
              Nuestros <span className="text-flaks-green">Planes</span>
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
              Elegí la solución perfecta para tu negocio. Todos incluyen
              hosting, dominio y soporte técnico.
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black font-lato text-flaks-dark mb-6">
              Nuestro <span className="text-flaks-green">Proceso</span>
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
              Te acompañamos paso a paso hasta tener tu sitio web online y
              funcionando.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-flaks-gradient-start to-flaks-gradient-end">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black font-lato text-white mb-6">
            ¿Listo para tener tu{" "}
            <span className="text-flaks-green">sitio web</span>?
          </h2>
          <p className="text-xl text-gray-300 font-lato mb-8 max-w-3xl mx-auto">
            Contanos sobre tu proyecto y te enviamos un presupuesto
            personalizado en 24hs.
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
