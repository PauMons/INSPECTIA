"use client"
import React from "react"
import { Briefcase, SearchCheck, Award } from "lucide-react"

const services = [
  {
    title: "Consultoría Estratégica",
    description:
      "Nuestro equipo de expertos analiza sus procesos internos y externos, identificando oportunidades de mejora y diseñando estrategias a medida que impulsan la eficiencia, reducen costos y garantizan el cumplimiento normativo.",
    icon: <Briefcase className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "Auditoría Integral",
    description:
      "Aplicamos metodologías rigurosas para evaluar el cumplimiento de estándares internacionales, normativas legales y mejores prácticas del sector. Entregamos informes claros con hallazgos, riesgos y recomendaciones accionables.",
    icon: <SearchCheck className="w-12 h-12 text-green-500" />,
  },
  {
    title: "Certificación Profesional",
    description:
      "Ofrecemos servicios de certificación que avalan la calidad, seguridad y confiabilidad de sus operaciones. Nuestro sello certificador fortalece la reputación de su organización y genera confianza en clientes y aliados estratégicos.",
    icon: <Award className="w-12 h-12 text-yellow-500" />,
  },
]

const Services = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Nuestros <span className="text-blue-600">Servicios</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <div className="flex justify-center mb-6">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              {service.title}
            </h3>
            <p className="text-gray-600 text-justify">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Services
