import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav
        className="bg-white shadow-md px-6 py-4 flex flex-col md:flex-row justify-between items-center"
        aria-label="Navegación principal"
      >
        <h1 className="text-2xl font-bold text-blue-600 mb-2 md:mb-0">
          <Link href="/" aria-label="Ir al inicio">
            Inspectia
          </Link>
        </h1>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 font-medium">
          <li>
            <Link href="/" className="hover:text-blue-700 transition-colors">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/servicios" className="hover:text-blue-700 transition-colors">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="hover:text-blue-700 transition-colors">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}