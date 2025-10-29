import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Mensaje from "@/models/Mensaje";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    console.log("Body recibido:", body);

    const nuevoMensaje = new Mensaje(body);
    await nuevoMensaje.save();

    return NextResponse.json(
      { message: "Mensaje guardado correctamente", data: nuevoMensaje },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error en API:", error);

    const errMsg =
      error instanceof Error ? error.message : "Error desconocido";

    return NextResponse.json(
      { message: "Error al guardar el mensaje", error: errMsg },
      { status: 500 }
    );
  }
}
