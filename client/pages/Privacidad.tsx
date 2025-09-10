import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gray-50 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-black font-lato text-flaks-dark mb-4">
            Política de Privacidad
          </h1>
          <p className="text-gray-600 font-lato">
            En Flaks, respetamos tu privacidad y estamos comprometidos a proteger
            tus datos personales. Esta Política explica qué información
            recopilamos, cómo la usamos y cuáles son tus derechos.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-10">
          <div>
            <h2 className="text-xl font-bold font-lato text-flaks-dark mb-2">
              1. Responsable del tratamiento
            </h2>
            <p className="text-gray-700 font-lato">
              Flaks ("nosotros"). Contacto: <a className="text-flaks-violet-dark underline" href="mailto:info@flaks.com.ar">info@flaks.com.ar</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-lato text-flaks-dark mb-2">
              2. Información que recopilamos
            </h2>
            <ul className="list-disc pl-6 text-gray-700 font-lato space-y-1">
              <li>Datos de contacto: nombre, email, teléfono.</li>
              <li>Datos de proyecto o consulta enviados por formularios.</li>
              <li>Datos técnicos: IP, dispositivo, navegador, páginas visitadas.</li>
              <li>Cookies y tecnologías similares (ver sección de Cookies).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold font-lato text-flaks-dark mb-2">
              3. Finalidades y bases legales
            </h2>
            <ul className="list-disc pl-6 text-gray-700 font-lato space-y-1">
              <li>Atender consultas y brindar presupuestos (ejecución de contrato o interés legítimo).</li>
              <li>Envío de comunicaciones comerciales con tu consentimiento (opt‑in).</li>
              <li>Mejorar el sitio y nuestros servicios (interés legítimo/analítica).</li>
              <li>Cumplir obligaciones legales aplicables.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold font-lato text-flaks-dark mb-2">
              4. Cookies
            </h2>
            <p className="text-gray-700 font-lato">
              Utilizamos cookies propias y de terceros con fines funcionales y
              estadísticos. Podés configurar tu navegador para bloquearlas o
              eliminar cookies existentes. Al continuar navegando, aceptás su uso.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-lato text-flaks-dark mb-2">
              5. Destinatarios y transferencias
            </h2>
            <p className="text-gray-700 font-lato">
              Podemos compartir datos con proveedores que prestan servicios
              (hosting, analítica, email, CRM) bajo acuerdos de confidencialidad y
              sólo para las finalidades indicadas. No vendemos datos personales.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-lato text-flaks-dark mb-2">
              6. Plazos de conservación
            </h2>
            <p className="text-gray-700 font-lato">
              Conservamos los datos durante el tiempo necesario para cumplir con
              las finalidades señaladas o mientras exista una relación comercial,
              y posteriormente por los plazos exigidos por la normativa vigente.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-lato text-flaks-dark mb-2">
              7. Derechos de las personas usuarias
            </h2>
            <p className="text-gray-700 font-lato">
              Podés ejercer tus derechos de acceso, rectificación, actualización,
              oposición, portabilidad y supresión escribiendo a
              <a className="text-flaks-violet-dark underline ml-1" href="mailto:info@flaks.com.ar">info@flaks.com.ar</a>. También podés
              retirar tu consentimiento en cualquier momento para las finalidades
              basadas en éste.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-lato text-flaks-dark mb-2">
              8. Seguridad
            </h2>
            <p className="text-gray-700 font-lato">
              Aplicamos medidas técnicas y organizativas razonables para
              proteger tus datos frente a accesos no autorizados, pérdida o
              alteración. No obstante, ningún sistema es 100% seguro.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-lato text-flaks-dark mb-2">
              9. Menores de edad
            </h2>
            <p className="text-gray-700 font-lato">
              Nuestros servicios no están dirigidos a menores de 13 años. Si sos
              representante legal y creés que un menor nos proporcionó datos,
              contactanos para eliminarlos.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold font-lato text-flaks-dark mb-2">
              10. Cambios en esta Política
            </h2>
            <p className="text-gray-700 font-lato">
              Podemos actualizar esta Política para reflejar cambios legales o
              de nuestros procesos. Publicaremos la versión vigente en esta
              página con la fecha de última actualización.
            </p>
          </div>

          <div className="text-gray-500 font-lato text-sm">
            Última actualización: {new Date().toLocaleDateString()}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

