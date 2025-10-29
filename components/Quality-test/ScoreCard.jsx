"use client";
import React from "react";

export default function ScoreCard({ results = [] }) {
  if (!results.length) return null;

  const last = results[0];
  const avg =
    (last.usability + last.accessibility + last.performance + last.seo + last.security) / 5;

  return (
    <div className="mt-4 bg-blue-50 p-3 rounded shadow">
      <h3 className="font-semibold">Última evaluación</h3>
      <p className="text-sm mt-2">
        <strong>{last.url}</strong><br />
        Puntaje Promedio: <span className="font-bold text-blue-700">{avg.toFixed(1)}</span>
      </p>
    </div>
  );
}