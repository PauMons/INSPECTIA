import { NextResponse } from "next/server";

// Utilidad para validar el cuerpo de la solicitud
function validateRequestBody(body) {
  if (!body.service || typeof body.service !== "string") {
    return "El campo 'service' es obligatorio y debe ser un texto.";
  }
  if (body.action && typeof body.action !== "string") {
    return "El campo 'action' debe ser un texto.";
  }
  // Puedes agregar más validaciones según tus necesidades
  return null;
}

export async function POST(req) {
  try {
    const body = await req.json();

    const validationError = validateRequestBody(body);
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      );
    }

    // Simulación de guardado en base de datos (puedes reemplazar por lógica real)
    console.info("Solicitud de cotización recibida:", {
      service: body.service,
      action: body.action,
      timestamp: body.timestamp,
      receivedAt: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: "Solicitud de cotización recibida correctamente.",
      service: body.service,
      estimatedResponseTime: "24-48 horas",
      reference: `REF-${Date.now()}`
    });

  } catch (error) {
    // Manejo de errores más detallado
    console.error("Error procesando la solicitud:", error);
    return NextResponse.json(
      { error: "Error interno del servidor. Por favor, inténtalo más tarde." },
      { status: 500 }
    );
  }
}

// Método GET mejorado con más información
export async function GET() {
  return NextResponse.json({
    message: "API de servicios de auditoría ICONTEC",
    availableServices: [
      { code: "27001", name: "ISO/IEC 27001" },
      { code: "20000-1", name: "ISO/IEC 20000-1" }
    ],
    version: "1.1",
    documentation: "/docs/api/hero"
  });
}