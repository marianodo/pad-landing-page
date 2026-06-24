import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo-data-insights-trim.png"
              alt="Data Insights"
              width={1563}
              height={364}
              className="h-9 md:h-10 w-auto"
            />
            <div className="h-6 w-px bg-border" />
            <span className="text-sm text-muted-foreground">PAD - Participación Activa Digital</span>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            © 2026 Data Insights. Propuesta comercial confidencial.
          </p>
        </div>
      </div>
    </footer>
  )
}
