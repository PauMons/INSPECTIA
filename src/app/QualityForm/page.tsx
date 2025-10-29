"use client";
import { useState } from "react";
import QualityForm from "../../../components/Quality-test/QualityForm";

export default function QualityFormPage() {
  const [results, setResults] = useState([]);

  const handleAddResult = (newResult) => {
    const updated = [newResult, ...results];
    setResults(updated);
    localStorage.setItem("qualityResults", JSON.stringify(updated));
  };

  return (
    <section className="w-full max-w-3xl">
      <QualityForm onEvaluate={handleAddResult} />
    </section>
  );
}