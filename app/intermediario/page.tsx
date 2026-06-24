import Image from "next/image"
import {
  ArrowUpRight,
  FileText,
  LogOut,
  MonitorPlay,
  QrCode,
  Globe,
  Tag,
  ListChecks,
} from "lucide-react"
import { logout } from "./actions"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Portal de Intermediarios · PAD",
  robots: { index: false, follow: false },
}

const videos = [
  {
    id: "1cZI_wGg5TuSUW52-yC8dFVlKYahyq-3o",
    title: "Parte 1 — El problema",
    duration: "2:36",
    description:
      "Introducción a “¿Qué es P.A.D. y qué intenta resolver?”. Mostralo primero para plantear el problema.",
  },
  {
    id: "1JIbxlOjQbn7fUlL5Kz7S3ucui2waq39v",
    title: "Parte 2 — La solución",
    duration: "2:19",
    description:
      "¿Cómo saben los gobiernos lo que los ciudadanos quieren? La respuesta de P.A.D. y cómo funciona.",
  },
  {
    id: "1vpeQfFB0Q19y6wsqS1UClckAKaUu1nuD",
    title: "Bar Chart — Costo",
    duration: null,
    description:
      "Animación de comparación de costos. Útil para reforzar la propuesta de valor económica.",
  },
]

const links = [
  {
    href: "https://pad-dev.datainsights.com.ar/demo-muni",
    icon: QrCode,
    title: "Demo municipio (QR + PGM)",
    description: "Interacción QR (pago manual) y demo PGM (pago digital).",
  },
  {
    href: "https://pad-dev.datainsights.com.ar",
    icon: MonitorPlay,
    title: "Plataforma — acceso Cliente",
    description: "Mostrá las pestañas DATOS, IA INSIGHTS + CHAT BOT y REPORTES.",
  },
  {
    href: "https://pad.datainsights.com.ar/",
    icon: Globe,
    title: "Landing page pública",
    description: "Para el cierre: validar el TRIPLE IMPACTO de la herramienta.",
  },
  {
    href: "/pricing",
    icon: Tag,
    title: "Propuesta comercial (Pricing)",
    description: "EXTRA: solo si el cliente lo requiere, según su escala de población.",
  },
]

const guide = [
  "Introducción a Video 1: “¿Qué es P.A.D. y qué intenta resolver?”",
  "Video 1 — “El problema” (2:36).",
  "Introducción a Video 2: ¿Cómo saben los gobiernos lo que los ciudadanos quieren y los ciudadanos lo que los gobiernos hacen? ¿Y cuál es la respuesta?",
  "Video 2 — “La solución” (2:19).",
  "Interacción QR (pago manual) y demo PGM (pago digital): demo municipio.",
  "Acceso a la Plataforma como “Cliente”: DATOS, IA INSIGHTS + CHAT BOT y REPORTES.",
  "Cierre en la landing page para validar el TRIPLE IMPACTO.",
]

const documents = [
  {
    href: "/docs/PAD_Presentacion_de_Producto.pdf",
    title: "Presentación de Producto — Rutas y accesos",
    description: "Guía de rutas de acceso y orden de presentación (PDF).",
  },
]

function SectionTitle({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
        <Icon className="w-4 h-4" />
      </span>
      {children}
    </h2>
  )
}

export default function IntermediarioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <Image
                src="/logo.png"
                alt="PAD"
                width={180}
                height={58}
                className="h-12 w-auto"
                priority
              />
              <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                Portal de Intermediarios
              </span>
            </div>
            <form action={logout}>
              <Button type="submit" variant="outline" size="sm" className="gap-2 bg-transparent">
                <LogOut className="w-4 h-4" />
                Salir
              </Button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
        {/* Intro */}
        <section>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Material de venta P.A.D.
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl text-pretty">
            Todo lo que necesitás para presentar el producto: videos, demos, enlaces y documentos.
            Se recomienda respetar el orden de la guía de presentación.
          </p>
        </section>

        {/* Guía de presentación */}
        <section className="space-y-5">
          <SectionTitle icon={ListChecks}>Guía de presentación</SectionTitle>
          <ol className="grid gap-3 sm:grid-cols-2">
            {guide.map((step, i) => (
              <li
                key={i}
                className="flex gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {i + 1}
                </span>
                <span className="text-sm text-foreground/90">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Videos */}
        <section className="space-y-5">
          <SectionTitle icon={MonitorPlay}>Videos</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            {videos.map((video) => (
              <article
                key={video.id}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="relative w-full aspect-video bg-muted">
                  <iframe
                    src={`https://drive.google.com/file/d/${video.id}/preview`}
                    title={video.title}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-foreground">{video.title}</h3>
                    {video.duration && (
                      <span className="flex-shrink-0 text-xs text-muted-foreground tabular-nums">
                        {video.duration}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{video.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Demos y enlaces */}
        <section className="space-y-5">
          <SectionTitle icon={Globe}>Demos y enlaces</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 font-semibold text-foreground">
                      {link.title}
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </section>

        {/* Documentos */}
        <section className="space-y-5">
          <SectionTitle icon={FileText}>Documentos</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {documents.map((doc) => (
              <a
                key={doc.href}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all"
              >
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-accent/15 text-accent-foreground">
                  <FileText className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 font-semibold text-foreground">
                    {doc.title}
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{doc.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
          © 2026 P.A.D. · Participación Activa Digital — Data Insights S.A.S.
        </div>
      </footer>
    </div>
  )
}
