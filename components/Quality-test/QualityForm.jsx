"use client";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function QualityForm({ onEvaluated }) {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulación de evaluación profesional
    setTimeout(() => {
      const newResult = {
        id: Date.now(),
        url,
        usability: Math.floor(Math.random() * 40) + 60, // entre 60 y 100
        accessibility: Math.floor(Math.random() * 40) + 60,
        performance: Math.floor(Math.random() * 40) + 60,
        seo: Math.floor(Math.random() * 40) + 60,
        security: Math.floor(Math.random() * 40) + 60,
        maintainability: Math.floor(Math.random() * 40) + 60,
        date: new Date().toLocaleString(),
      };

      setResult(newResult);
      onEvaluated(newResult);
      setUrl("");
      setLoading(false);
    }, 2000);
  };

  const chartData = result
    ? {
        labels: [
          "Usabilidad",
          "Accesibilidad",
          "Rendimiento",
          "SEO",
          "Seguridad",
          "Mantenibilidad",
        ],
        datasets: [
          {
            label: "Puntuación",
            data: [
              result.usability,
              result.accessibility,
              result.performance,
              result.seo,
              result.security,
              result.maintainability,
            ],
            backgroundColor: [
              "#3b82f6",
              "#22c55e",
              "#f59e0b",
              "#ef4444",
              "#6366f1",
              "#06b6d4",
            ],
            borderRadius: 8,
          },
        ],
      }
    : null;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        🧪 Evaluador Profesional de Calidad Web
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Analiza los parámetros clave de calidad: usabilidad, accesibilidad, rendimiento, SEO y seguridad.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="url"
          required
          placeholder="🔗 Ingresa la URL del sitio web (ej. https://tuweb.com)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
        />

        <button
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg w-full font-medium transition-all"
        >
          {loading ? "Evaluando..." : "Iniciar Evaluación"}
        </button>
      </form>

      {result && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            📊 Resultados de {result.url}
          </h3>

          <div className="text-sm text-gray-500 mb-3">
            Fecha de evaluación: {result.date}
          </div>

          <div className="w-full bg-gray-50 p-4 rounded-lg">
            <Bar
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: false },
                  title: {
                    display: true,
                    text: "Estadísticas de calidad por categoría",
                    font: { size: 16 },
                  },
                },
                scales: {
                  y: {
                    min: 0,
                    max: 100,
                    ticks: { stepSize: 20 },
                  },
                },
              }}
            />
          </div>
          <div className="mt-4 flex justify-between text-gray-700 text-sm">
            <p>Usabilidad: <strong>{result.usability}</strong></p>
            <p>Accesibilidad: <strong>{result.accessibility}</strong></p>
            <p>Rendimiento: <strong>{result.performance}</strong></p>
            <p>SEO: <strong>{result.seo}</strong></p>
            <p>Seguridad: <strong>{result.security}</strong></p>
             
          </div>
        </div>
      )}
    </div>
  );
}