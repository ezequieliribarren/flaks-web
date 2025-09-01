import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "../../components/ContactForm";
import RemixProcessForm from "@/components/RemixProcessForm";
import {
  Globe,
  Code,
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Clock,
  Shield,
  Smartphone,
  Search,
  Zap,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useRef } from "react";

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
      title: "Web Profesional",
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
      title: "Tienda online",
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

  const clientLogos = [
    { src: "/trabajos/luqstoff.png", name: "Lusqtoff Tigre", href: "https://lusqtofftigre.com.ar/" },
    { src: "/trabajos/baires.png", name: "Baires Flights", href: "https://bairesflights.com.ar/" },
    { src: "/trabajos/tc.png", name: "TC La Revista", href: "https://tclarevista.com.ar/" },
    { src: "/trabajos/tibertec.png", name: "Tibertec", href: "https://tibertec.com.ar/" },
    { src: "/trabajos/practical.png", name: "Practical Buy", href: "https://practicalbuy.com.ar/" },
    { src: "/trabajos/decoinox.png", name: "Decoinox", href: "https://decoinox.com.ar/" },
    { src: "/trabajos/biondi.png", name: "Estudio Biondi", href: "https://estudiobiondi.com/" },
    { src: "/trabajos/santa.png", name: "Transporte Santa Milonguita", href: "https://transportesantamilonguita.com/" },
    { src: "/trabajos/irigoyen.png", name: "A. Irigoyen Photo", href: "https://airigoyenphoto.com.ar/" },
    { src: "/trabajos/tobyco.png", name: "Tobyco Constructora", href: "https://tobycoconstructora.com.ar/" },
    { src: "/trabajos/artanium.png", name: "Artanium", href: "https://artanium.com.ar/" },
    { src: "/trabajos/senko.png", name: "Senko", href: "https://senko.com.ar/" },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollSlider = (dir: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const amount = Math.floor(el.clientWidth * 0.85);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

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
      
      <section id="planes" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-lato text-flaks-dark mb-6">
              Nuestros <span className="text-flaks-violet-dark">Planes</span>
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

                  <CardContent className="p-12 h-full flex flex-col">
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
      {/* Clients/Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-black font-lato text-flaks-dark">
              Clientes que confían en FLAKS
            </h3>
            <p className="text-gray-600 font-lato mt-3 max-w-3xl mx-auto">
              Marcas de distintas industrias nos eligen por nuestro enfoque profesional,
              cumplimiento y resultados.
            </p>
          </div>
          <div className="relative">
            <div
              ref={sliderRef}
              className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
            >
              {clientLogos.map((logo, i) => (
                <a
                  key={i}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-flaks-violet/20 bg-flaks-violet/5 shadow-sm hover:shadow-md transition-shadow snap-start min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[30%] xl:min-w-[25%]"
                  aria-label={`Abrir ${logo.name}`}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-full h-48 md:h-56 lg:h-64 object-cover opacity-95 group-hover:opacity-100 transition duration-300"
                    loading="lazy"
                  />
                  {/* Violet tint overlay (removed on hover) */}
                  <div
                    className="absolute inset-0 bg-flaks-violet/20 group-hover:bg-transparent transition-colors duration-300"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-flaks-violet-dark/60 to-transparent">
                    <span className="text-white font-lato text-sm font-bold">
                      {logo.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
              <button
                type="button"
                onClick={() => scrollSlider(-1)}
                className="pointer-events-auto ml-[-8px] md:ml-[-12px] p-2 rounded-full bg-white/80 hover:bg-white shadow ring-1 ring-gray-200 transition"
                aria-label="Anterior"
              >
                <ArrowLeft className="w-5 h-5 text-flaks-dark" />
              </button>
              <button
                type="button"
                onClick={() => scrollSlider(1)}
                className="pointer-events-auto mr-[-8px] md:mr-[-12px] p-2 rounded-full bg-white/80 hover:bg-white shadow ring-1 ring-gray-200 transition"
                aria-label="Siguiente"
              >
                <ArrowRight className="w-5 h-5 text-flaks-dark" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Custom CTA below Plans */}
      <section id="a-medida" className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-flaks-green to-emerald-400 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-black font-lato text-black mb-3">
              Necesitas un desarrollo a medida?
            </h3>
            <p className="text-lg text-black/80 font-lato mb-6 max-w-2xl mx-auto">
              Diseñamos soluciones personalizadas para proyectos únicos: integraciones, funcionalidades específicas y más.
            </p>
            <div className="flex justify-center">
              <Button
                className="bg-black hover:bg-flaks-dark text-flaks-green font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => (window.location.href = "#contacto")}
              >
                Contanos sobre tu proyecto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black font-lato text-flaks-dark mb-4">
              ¿Por qué elegir nuestro{" "}
              <span className="text-flaks-violet-dark">desarrollo web</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex p-4 bg-flaks-violet/10 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-flaks-violet-dark" />
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
      {/* Remix: Proceso + Form */}
      <div id="contacto">
        <RemixProcessForm />
      </div>
      <Footer />
    </div>
  );
}
