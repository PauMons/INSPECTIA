"use client";

export default function ServiciosPage() {
  const servicios = [
    {
      id: 1,
      titulo: "Auditoría ISO 27001",
      descripcion:
        "Evaluamos el cumplimiento de la norma ISO 27001 en tu organización, identificando riesgos y oportunidades de mejora para la seguridad de la información.",
      beneficios: [
        "Informe detallado de hallazgos",
        "Recomendaciones prácticas",
        "Preparación para certificación",
      ],
    },
    {
      id: 2,
      titulo: "Certificación ISO 27001",
      descripcion:
        "Acompañamos a tu empresa en el proceso de certificación ISO 27001, asegurando el cumplimiento de todos los requisitos y facilitando la auditoría externa.",
      beneficios: [
        "Soporte en documentación",
        "Capacitación al personal",
        "Gestión de auditoría externa",
      ],
    },
    {
      id: 3,
      titulo: "Consultoría ISO 27001",
      descripcion:
        "Brindamos asesoría personalizada para implementar y mantener un Sistema de Gestión de Seguridad de la Información conforme a ISO 27001.",
      beneficios: [
        "Diagnóstico inicial",
        "Plan de acción personalizado",
        "Seguimiento continuo",
      ],
    },
    // 🚀 Servicios ISO 20000-1 añadidos
    {
      id: 4,
      titulo: "Auditoría ISO 20000-1",
      descripcion:
        "Revisamos y evaluamos la gestión de tus servicios de TI bajo la norma ISO 20000-1, asegurando calidad y eficiencia en la entrega de servicios.",
      beneficios: [
        "Análisis de madurez en gestión de TI",
        "Identificación de brechas normativas",
        "Recomendaciones para la mejora continua",
      ],
    },
    {
      id: 5,
      titulo: "Certificación ISO 20000-1",
      descripcion:
        "Guiamos a tu organización durante todo el proceso de certificación ISO 20000-1, facilitando la adopción de buenas prácticas en la gestión de servicios de TI.",
      beneficios: [
        "Soporte en la preparación de auditoría externa",
        "Estructuración de procesos de TI",
        "Cumplimiento con ITIL y mejores prácticas",
      ],
    },
    {
      id: 6,
      titulo: "Consultoría ISO 20000-1",
      descripcion:
        "Ofrecemos consultoría integral para implementar un Sistema de Gestión de Servicios de TI (SGSTI) alineado con ISO 20000-1.",
      beneficios: [
        "Diseño de procesos ITSM",
        "Capacitación en gestión de servicios",
        "Optimización del ciclo de vida de los servicios",
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">
        Servicios ISO 27001 e ISO 20000-1
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {servicios.map((serv) => (
          <div
            key={serv.id}
            className="bg-white border rounded-xl shadow p-6 flex flex-col hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-700">{serv.titulo}</h2>
            <p className="mb-4 text-gray-700">{serv.descripcion}</p>
            <ul className="mb-4 list-disc list-inside text-gray-600">
              {serv.beneficios.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
            <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Solicitar información
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
