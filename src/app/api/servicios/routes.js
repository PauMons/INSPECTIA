import { NextResponse } from "next/server";

// Simulación de base de datos en memoria
let servicios = [
  { id: 1, nombre: "Auditoría Contable" },
  { id: 2, nombre: "Auditoría de Sistemas" },
];

/
export async function GET() {
  return NextResponse.json(servicios);
}


export async function POST(req: Request) {
  const body = await req.json();
  const nuevoServicio = {
    id: servicios.length + 1,
    nombre: body.nombre,
  };
  servicios.push(nuevoServicio);
  return NextResponse.json({
    message: "Servicio agregado",
    servicio: nuevoServicio,
  });
}


export async function DELETE(req: Request) {
  const { id } = await req.json();
  servicios = servicios.filter((s) => s.id !== id);
  return NextResponse.json({ message: "Servicio eliminado", id });
}