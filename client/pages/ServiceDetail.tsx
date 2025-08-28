import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useParams } from "react-router-dom";

export default function ServiceDetail() {
  const { category, service } = useParams();

  const getPageTitle = () => {
    if (category === "desarrollo-web") {
      switch (service) {
        case "landing-page":
          return "Landing Page - Detalles del Servicio";
        case "web-corporativa":
          return "Web Corporativa - Detalles del Servicio";
        case "ecommerce":
          return "E-commerce - Detalles del Servicio";
        default:
          return "Desarrollo Web - Detalles del Servicio";
      }
    } else if (category === "redes-sociales") {
      return "Gestión de Redes Sociales - Detalles del Servicio";
    } else if (category === "pauta-publicitaria") {
      return "Pauta Publicitaria - Detalles del Servicio";
    }
    return "Detalles del Servicio";
  };

  const getServiceDescription = () => {
    if (category === "desarrollo-web") {
      switch (service) {
        case "landing-page":
          return "Creamos landing pages optimizadas para conversión que capturan leads y generan ventas. Diseño profesional, carga rápida y estrategia de conversión incluida.";
        case "web-corporativa":
          return "Desarrollamos sitios web corporativos que reflejan la profesionalidad de tu empresa. Múltiples páginas, CMS, SEO y diseño responsive.";
        case "ecommerce":
          return "Tiendas online completas con carrito de compras, gestión de inventario, métodos de pago y panel de administración. Listo para vender desde el día uno.";
        default:
          return "Soluciones web profesionales adaptadas a las necesidades de tu negocio.";
      }
    } else if (category === "redes-sociales") {
      return "Gestionamos tus redes sociales con contenido estratégico, diseños profesionales y community management para hacer crecer tu audiencia y engagement.";
    } else if (category === "pauta-publicitaria") {
      return "Campañas publicitarias optimizadas en Google Ads, Facebook, Instagram y otras plataformas para maximizar tu retorno de inversión.";
    }
    return "Descripción del servicio disponible próximamente.";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Button
              variant="ghost"
              className="text-flaks-green hover:text-flaks-green-dark font-lato"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black font-lato text-flaks-dark mb-6">
              {getPageTitle()}
            </h1>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto leading-relaxed">
              {getServiceDescription()}
            </p>
          </div>

          {/* Coming Soon Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-flaks-dark to-flaks-dark-secondary rounded-3xl p-12 text-center">
              <div className="w-20 h-20 bg-flaks-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-flaks-green" />
              </div>

              <h2 className="text-3xl font-black font-lato text-white mb-6">
                Información Detallada{" "}
                <span className="text-flaks-green">Próximamente</span>
              </h2>

              <p className="text-xl text-gray-300 font-lato mb-8 leading-relaxed">
                Estamos preparando toda la información detallada sobre este
                servicio. Mientras tanto, nuestro equipo está disponible para
                resolver todas tus dudas y brindarte un presupuesto
                personalizado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-flaks-green hover:bg-flaks-green-dark text-black font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
                  Contactar por WhatsApp
                  <MessageCircle className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-flaks-green text-flaks-green hover:bg-flaks-green hover:text-black font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300"
                >
                  Solicitar Presupuesto
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold font-lato text-flaks-dark mb-3">
                  Respuesta Rápida
                </h3>
                <p className="text-gray-600 font-lato">
                  Te respondemos en menos de 2 horas durante horario comercial.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold font-lato text-flaks-dark mb-3">
                  Presupuesto Gratuito
                </h3>
                <p className="text-gray-600 font-lato">
                  Analizamos tu proyecto y te enviamos un presupuesto detallado
                  sin costo.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold font-lato text-flaks-dark mb-3">
                  Asesoramiento Personalizado
                </h3>
                <p className="text-gray-600 font-lato">
                  Te acompañamos para elegir la mejor solución para tu negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
