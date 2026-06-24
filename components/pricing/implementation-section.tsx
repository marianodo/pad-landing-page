import { Check, Clock, Zap } from "lucide-react"

const implementationFeatures = [
  "Consultoría inicial para definir las preguntas de la consulta",
  "Diseño y desarrollo del dashboard personalizado",
  "Diseño y desarrollo del portal de consulta",
  "Exposición de APIs para integración con sistema de recaudación",
  "Acompañamiento técnico durante la integración",
  "Capacitación inicial al equipo del gobierno",
]

export function ImplementationSection() {
  return (
    <section id="implementacion" className="bg-card py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
          <Zap className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-foreground">Implementación</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="mb-6 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Pago único de implementación
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Trabajo conjunto con el equipo del gobierno para configurar y personalizar 
              la plataforma según sus necesidades específicas.
            </p>

            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-5xl font-bold tracking-tight text-[#5941CE]">$3,000</span>
              <span className="text-lg text-muted-foreground">USD</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Tiempo estimado: 1 mes</span>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-8">
            <h3 className="mb-6 text-lg font-semibold text-foreground">¿Qué incluye?</h3>
            <ul className="space-y-4">
              {implementationFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00CCBA]">
                    <Check className="h-3 w-3 text-[#201631]" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
