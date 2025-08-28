import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    "Landing Pages",
    "Sitios Corporativos",
    "Tiendas Online",
    "Desarrollo Personalizado",
    "SEO y Marketing Digital",
    "Hosting y Dominios",
  ];

  const company = [
    "Nosotros",
    "Blog",
    "Casos de Éxito",
    "Testimonios",
    "Contacto",
    "Soporte Técnico",
  ];

  return (
    <footer className="bg-gradient-to-br from-flaks-gradient-start to-flaks-gradient-end border-t border-flaks-gray-dark/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="text-3xl font-black font-lato text-flaks-green mb-4">
              FLAKS
            </div>
            <p className="text-gray-300 font-lato mb-6 leading-relaxed">
              Creamos experiencias digitales que conectan tu negocio con más
              clientes. Velocidad, innovación y resultados garantizados.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-flaks-gray-dark hover:bg-flaks-green rounded-lg transition-colors duration-300 group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-black" />
              </a>
              <a
                href="#"
                className="p-2 bg-flaks-gray-dark hover:bg-flaks-green rounded-lg transition-colors duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-black" />
              </a>
              <a
                href="#"
                className="p-2 bg-flaks-gray-dark hover:bg-flaks-green rounded-lg transition-colors duration-300 group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-black" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold font-lato text-white mb-6">
              Servicios
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-flaks-green font-lato transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold font-lato text-white mb-6">
              Empresa
            </h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-flaks-green font-lato transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold font-lato text-white mb-6">
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-flaks-green mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-lato">
                    Buenos Aires, Argentina
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-flaks-green mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-lato">+54 11 XXXX-XXXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-flaks-green mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-lato">hola@flaks.com.ar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-flaks-gray-dark/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 font-lato text-center md:text-left mb-4 md:mb-0">
              © 2024 FLAKS. Todos los derechos reservados.
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-flaks-green font-lato transition-colors duration-300"
              >
                Términos y Condiciones
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-flaks-green font-lato transition-colors duration-300"
              >
                Política de Privacidad
              </a>

              {/* Scroll to top button */}
              <button
                onClick={scrollToTop}
                className="p-2 bg-flaks-gray-dark hover:bg-flaks-green rounded-lg transition-colors duration-300 group"
                aria-label="Volver arriba"
              >
                <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
