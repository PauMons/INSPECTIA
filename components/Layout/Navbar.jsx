"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

import QualityForm from "../Quality-test/QualityForm";
import ResultsTable from "../Quality-test/ResultsTable";
import ScoreCard from "../Quality-test/ScoreCard";

export default function Navbar() {
  const [showEvaluator, setShowEvaluator] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("qualityResults");
    if (stored) setResults(JSON.parse(stored));
  }, []);

  const handleAddResult = (newResult) => {
    const updated = [newResult, ...results];
    setResults(updated);
    localStorage.setItem("qualityResults", JSON.stringify(updated));
  };

  const clearHistory = () => {
    localStorage.removeItem("qualityResults");
    setResults([]);
  };

  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between relative z-40">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-blue-600">Evalúa el rendimiento y la experiencia de tu sitio</h1>
      </div>

      <div>
        <button
          onClick={() => setShowEvaluator(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
        >
          Evaluar Calidad
        </button>
      </div>

      {showEvaluator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowEvaluator(false)}
            aria-hidden
          />

          {/* modal: centrado y tamaño "mitad de página" */}
          <div className="relative bg-white rounded-2xl w-11/12 md:w-3/4 lg:w-4/5 h-[70vh] md:h-[75vh] shadow-xl overflow-hidden max-w-[1200px]">
            <button
              onClick={() => setShowEvaluator(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 z-10"
              aria-label="Cerrar evaluador"
            >
              <X size={18} />
            </button>

            <div className="h-full p-6 flex flex-col">
              <h2 className="text-lg font-semibold text-center mb-4">Evaluador de Calidad</h2>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-auto">
                <div className="p-2">
                  <QualityForm onEvaluated={handleAddResult} />
                </div>

                <div className="p-2 flex flex-col">
                  <div className="mb-3">
                    <ScoreCard results={results} />
                  </div>
                  <div className="flex-1 overflow-auto">
                    <ResultsTable results={results} />
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={clearHistory}
                      className="w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600"
                    >
                      Borrar Historial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}