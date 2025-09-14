"use client";
import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (email === "admin@example.com" && password === "password123") {
      if (onLogin) onLogin({ email });
      localStorage.setItem("user", JSON.stringify({ email }));
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-center">Iniciar Sesión</h2>

        {error && (
          <div className="text-sm text-red-500 bg-red-100 p-2 rounded-md">
            {error}
          </div>
        )}

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-medium">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
