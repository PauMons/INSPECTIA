"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-gray-900/80 text-white shadow-lg z-50 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-blue-400 drop-shadow-lg">
          INSPECTIA
        </h1>

        
        <nav className="hidden md:flex gap-10 text-lg font-medium">
          {[
            { label: "Inicio", href: "/" },
            { label: "Acerca de", href: "/About" },
            { label: "Servicios", href: "/servicios" },
             
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="relative group transition-colors"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        
        <a
          href="/contacto"
          className="hidden md:inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          Contacto
        </a>
        <a
          href="/login"
          className="hidden md:inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          Login
        </a>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none hover:text-blue-400 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

  
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 px-6 py-6 space-y-6 text-center animate-fade-in">
          <a href="/" className="block text-lg font-medium hover:text-blue-400 transition">Inicio</a>
          <a href="/about" className="block text-lg font-medium hover:text-blue-400 transition">Acerca de</a>
          <a href="/servicios" className="block text-lg font-medium hover:text-blue-400 transition">Servicios</a>
          <a
            href="/contacto"
            className="block bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-transform transform hover:scale-105 shadow-md"
          >
            Cotización
          </a>
        </div>
      )}
    </header>
  )
}

<main className="mt-24"> 
</main>
