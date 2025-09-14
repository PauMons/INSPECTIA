"use client";
import Login from "#/Auth/Login";

export default function LoginPage() {
  const handleLogin = (user: { email: string }) => {
    console.log("Usuario autenticado:", user);
    // Aquí puedes redirigir con router.push("/dashboard")
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <Login onLogin={handleLogin} />
    </main>
  );
}
