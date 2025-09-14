import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Acerca de <span className="text-white">Inspectia Web</span>
          </h1>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto">
            Brindamos soluciones innovadoras en auditoría, certificación y consultoría tecnológica,
            ayudando a empresas a alcanzar la excelencia y seguridad digital.
          </p>
        </div>
      </section>

     
      <section className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
          En <span className="font-semibold text-blue-800">Inspectia Web</span> nos especializamos en
          <span className="font-semibold"> auditoría</span>,{" "}
          <span className="font-semibold">certificación</span> y{" "}
          <span className="font-semibold">consultoría</span>. Acompañamos a pymes y grandes empresas
          en su transformación digital, asegurando procesos eficientes y cumpliendo con los más
          altos estándares internacionales.
        </p>
      </section>

      
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nuestros Pilares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Auditoría</h3>
              <p className="text-gray-600">
                Identificamos riesgos y oportunidades de mejora para optimizar tus procesos
                tecnológicos.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Certificación</h3>
              <p className="text-gray-600">
                Validamos el cumplimiento de normas internacionales como ISO 27001 e ISO 20000-1.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Consultoría</h3>
              <p className="text-gray-600">
                Te asesoramos en la implementación de soluciones seguras y eficientes adaptadas a tu
                negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">Nuestra Misión</h3>
          <p className="text-gray-700 leading-relaxed">
            Impulsar la eficiencia y seguridad informática de nuestros clientes mediante servicios
            innovadores, asegurando que cada organización alcance su máximo potencial digital.
          </p>
        </div>
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">Nuestra Visión</h3>
          <p className="text-gray-700 leading-relaxed">
            Ser líderes en consultoría y certificación tecnológica en Latinoamérica, reconocidos por
            nuestra calidad, innovación y compromiso con el éxito de nuestros clientes.
          </p>
        </div>
      </section>

     
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          ¿Listo para llevar tu empresa al siguiente nivel?
        </h2>
        <p className="mb-6 text-lg">
          Contáctanos hoy mismo y comienza a transformar tus procesos tecnológicos con Inspectia Web.
        </p>
        <a
          href="/contacto"
          className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold shadow hover:bg-yellow-300 transition"
        >
          Contáctanos
        </a>
      </section>
    </div>
  );
};

export default About;
