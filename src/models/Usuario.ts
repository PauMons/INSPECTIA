import mongoose, { Schema, Document, models } from "mongoose";


export interface IUsuario extends Document {
  nombre: string;
  email: string;
  mensaje: string;
  creadoEn: Date;
}

const UsuarioSchema = new Schema<IUsuario>(
  {
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    mensaje: { type: String, required: true },
    creadoEn: { type: Date, default: Date.now },
  },
  { collection: "usuarios" } // 🔹 todos los datos se guardan en la colección `usuarios`
);

const Usuario = models.Usuario || mongoose.model<IUsuario>("Usuario", UsuarioSchema);

export default Usuario;
