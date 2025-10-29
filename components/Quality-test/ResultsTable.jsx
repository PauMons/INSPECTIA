"use client";
import React from "react";

export default function ResultsTable({ results = [] }) {
  if (!results.length) return <p className="text-gray-500 mt-3">Sin resultados aún.</p>;

  return (
    <table className="mt-3 w-full border border-gray-200 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2">URL</th>
          <th className="border p-2">Usabilidad</th>
          <th className="border p-2">Accesibilidad</th>
          <th className="border p-2">Rendimiento</th>
          <th className="border p-2">SEO</th>
          <th className="border p-2">Seguridad</th>
          <th className="border p-2">Fecha</th>
        </tr>
      </thead>
      <tbody>
        {results.map((r) => (
          <tr key={r.id}>
            <td className="border p-1">{r.url}</td>
            <td className="border p-1">{r.usability}</td>
            <td className="border p-1">{r.accessibility}</td>
            <td className="border p-1">{r.performance}</td>
            <td className="border p-1">{r.seo}</td>
            <td className="border p-1">{r.security}</td>
            <td className="border p-1">{r.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}