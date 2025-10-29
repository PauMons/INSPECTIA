"use client";
import { useState, useEffect } from "react";
import ScoreCard from "../../../components/Quality-test/ScoreCard";

export default function ScorePage() {
  const [lastResult, setLastResult] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("qualityResults");
    if (stored) {
      const results = JSON.parse(stored);
      setLastResult(results[0]); // Última evaluación
    }
  }, []);

  return (
    <section className="w-full max-w-2xl">
      {lastResult ? (
        <ScoreCard result={lastResult} />
      ) : (
        <p className="text-gray-500">Aún no hay resultados para mostrar.</p>
      )}
    </section>
  );
}