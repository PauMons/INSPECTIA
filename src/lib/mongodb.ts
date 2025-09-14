import mongoose from "mongoose";

declare global {
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  } | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("⚠️ Debes definir MONGODB_URI en tu archivo .env");
}

// Reutilizar conexión en hot reload (Next.js)
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// Type assertion for TypeScript
const cachedConn = cached as {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

async function connectDB() {
  if (cachedConn.conn) return cachedConn.conn;

  if (!cachedConn.promise) {
    cachedConn.promise = mongoose
      .connect(MONGODB_URI!, {
        dbName: "ProyectU",
      })
      .then((mongoose) => {
        console.log("✅ Conectado a MongoDB");
        return mongoose;
      });
  }

  cachedConn.conn = await cachedConn.promise;
  return cachedConn.conn;
}

export default connectDB;


