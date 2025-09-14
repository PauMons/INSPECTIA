"use client"
import React from "react"

const pricingPlans = [
  {
    title: "Consultoría",
    price: "Desde $500",
    features: [
      "Análisis personalizado",
      "Recomendaciones estratégicas",
      "Soporte continuo",
    ],
    gradient: "from-blue-600 to-blue-400",
  },
  {
    title: "Auditoría",
    price: "Desde $800",
    features: [
      "Evaluación integral",
      "Informe detallado",
      "Plan de acción",
    ],
    gradient: "from-blue-700 to-cyan-500",
  },
  {
    title: "Certificación",
    price: "Desde $1,200",
    features: [
      "Preparación de documentos",
      "Acompañamiento en procesos",
      "Certificado oficial",
    ],
    gradient: "from-indigo-700 to-blue-500",
  },
]

const Pricing = () => (
  <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Planes de <span className="text-blue-700">Servicio</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Elige el plan que mejor se adapte a las necesidades de tu empresa.  
        Nuestros servicios están diseñados para brindar confianza, seguridad y resultados tangibles.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {pricingPlans.map((plan, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-2xl shadow-xl p-8 transition transform hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* Borde con gradiente elegante */}
            <div
              className={`absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r ${plan.gradient} -z-10`}
            ></div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {plan.title}
            </h3>
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 mb-6">
              {plan.price}
            </p>

            <ul className="text-left text-gray-600 space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✔</span> {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-full font-semibold text-white bg-gradient-to-r ${plan.gradient} shadow-md hover:shadow-lg transition transform hover:scale-105`}
            >
              Solicitar información
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Pricing
