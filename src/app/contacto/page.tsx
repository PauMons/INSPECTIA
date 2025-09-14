"use client";
import { useState } from "react";

export default function ContactoPage() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        body: JSON.stringify({ nombre, email, mensaje }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Mensaje enviado correctamente.");
        setNombre("");
        setEmail("");
        setMensaje("");
      } else {
        setStatus(data.message || "Error al enviar el mensaje.");
      }
    } catch {
      setStatus("Error de conexión.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full mx-auto bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-6 border border-blue-200 animate-fade-in"
        aria-label="Formulario de contacto"
      >
        <h2 className="text-3xl font-semibold mb-4 text-center text-blue-700 drop-shadow">
          Contáctanos
        </h2>
        <div>
          <label
            htmlFor="nombre"
            className="block text-sm font-semibold mb-2 text-blue-700"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border border-blue-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold mb-2 text-blue-700"
          >
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-blue-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
            placeholder="tucorreo@ejemplo.com"
          />
        </div>
        <div>
          <label
            htmlFor="mensaje"
            className="block text-sm font-semibold mb-2 text-blue-700"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escribe tu mensaje"
            className="w-full border border-blue-300 rounded-2xl px-4 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transition-transform transform hover:scale-105"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
        {status && (
          <p
            className={`text-center mt-2 text-sm ${
              status.includes("correctamente")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
