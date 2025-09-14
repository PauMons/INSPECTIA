import mongoose, { Schema, Document } from "mongoose";
import Mensaje from "@/models/Mensaje";

export interface IMensaje extends Document {
  nombre: string;
  email: string;
  mensaje: string;
  creadoEn?: Date;
}

const MensajeSchema = new Schema<IMensaje>({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  mensaje: { type: String, required: true },
  creadoEn: { type: Date, default: Date.now },
});

export default mongoose.models.Mensaje || mongoose.model<IMensaje>("Mensaje", MensajeSchema);

const nuevoMensaje = new Mensaje(body);
await nuevoMensaje.save();