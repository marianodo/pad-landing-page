import Image from "next/image"
import { LoginForm } from "./login-form"

export const metadata = {
  title: "Portal de Intermediarios · PAD",
  robots: { index: false, follow: false },
}

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center mb-8">
          <Image
            src="/logo.png"
            alt="PAD - Participación Activa Digital"
            width={220}
            height={70}
            className="h-16 w-auto"
            priority
          />
          <h1 className="mt-6 text-2xl font-bold text-foreground">Portal de Intermediarios</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Acceso restringido. Ingresá tus credenciales para ver el material de venta.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl shadow-xl p-6 sm:p-8">
          <LoginForm />
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          © 2026 PAD · Data Insights S.A.S.
        </p>
      </div>
    </main>
  )
}
