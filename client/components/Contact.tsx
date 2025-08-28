import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Clock,
  Users,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Respuesta inmediata",
      action: "Enviar mensaje",
      highlight: "+54 9 11 XXXX-XXXX",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Consultas detalladas",
      action: "Escribir email",
      highlight: "hola@flaks.com.ar",
    },
    {
      icon: Phone,
      title: "Teléfono",
      description: "Llamada directa",
      action: "Llamar ahora",
      highlight: "+54 11 XXXX-XXXX",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Consulta inicial",
      description: "Nos contás tu proyecto y objetivos",
    },
    {
      number: "02",
      title: "Propuesta personalizada",
      description: "Diseñamos la solución perfecta para vos",
    },
    {
      number: "03",
      title: "Desarrollo y lanzamiento",
      description: "Creamos tu sitio y lo ponemos online",
    },
  ];

  return (
    <>
      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-lato text-flaks-dark mb-6">
              ¿Listo para <span className="text-flaks-green">empezar</span>?
            </h2>
            <p className="text-xl text-gray-600 font-lato max-w-3xl mx-auto">
              Conversemos sobre tu proyecto. Te asesoramos sin compromiso y te
              mostramos cómo podemos hacer crecer tu negocio digitalmente.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold font-lato text-flaks-dark mb-8">
                Elegí cómo querés contactarnos
              </h3>

              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="p-3 bg-flaks-green/10 rounded-xl group-hover:bg-flaks-green/20 transition-colors duration-300">
                              <Icon className="w-6 h-6 text-flaks-green" />
                            </div>
                            <div>
                              <h4 className="font-bold font-lato text-flaks-dark text-lg">
                                {method.title}
                              </h4>
                              <p className="text-gray-600 font-lato">
                                {method.description}
                              </p>
                              <p className="text-flaks-green font-lato font-medium">
                                {method.highlight}
                              </p>
                            </div>
                          </div>
                          <Button className="bg-flaks-green hover:bg-flaks-green-dark text-black font-lato font-bold">
                            {method.action}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Right: Process Steps */}
            <div className="bg-gradient-to-br from-flaks-gradient-start to-flaks-gradient-end rounded-3xl p-8">
              <h3 className="text-2xl font-bold font-lato text-white mb-8">
                Nuestro proceso es{" "}
                <span className="text-flaks-green">simple</span>
              </h3>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-flaks-green rounded-xl flex items-center justify-center">
                      <span className="text-black font-black font-lato text-lg">
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold font-lato text-white text-lg mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-300 font-lato">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-flaks-green/10 rounded-xl border border-flaks-green/20">
                <div className="flex items-center space-x-2 text-flaks-green">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-lato font-medium">
                    Presupuesto gratuito en 24hs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-flaks-green to-emerald-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black font-lato text-black mb-6">
            Tu sitio web te está esperando
          </h2>
          <p className="text-xl text-black/80 font-lato mb-8 max-w-3xl mx-auto">
            No esperes más para tener presencia digital. Empezá hoy y llevá tu
            negocio al siguiente nivel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-black hover:bg-flaks-dark text-flaks-green font-lato font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105">
              ¡Empecemos ahora!
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-2 text-black/80">
              <Clock className="w-5 h-5" />
              <span className="font-lato font-medium">Respuesta en 24hs</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
