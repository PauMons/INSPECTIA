export default function Footer() {
  return (
    <footer
      className="bg-gray-100 text-center py-4 mt-10 border-t border-gray-200"
      aria-label="Pie de página"
    >
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} <span className="font-semibold">Inspectia</span>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}