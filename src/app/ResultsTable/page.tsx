"use client";
import { useState, useEffect } from "react";
import ResultsTable from "../../../components/Quality-test/ResultsTable";

export default function ResultsPage() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("qualityResults");
    if (stored) setResults(JSON.parse(stored));
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("qualityResults");
    setResults([]);
  };

  return (
    <section className="w-full max-w-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Histórico de Pruebas</h2>
        <button
          onClick={clearHistory}
          className="text-sm bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
        >
          Borrar historial
        </button>
      </div>

      {results.length > 0 ? (
        <ResultsTable results={results} />
      ) : (
        <p className="text-gray-500">No hay resultados almacenados.</p>
      )}
    </section>
  );
}