import { X, Check } from "lucide-react"

const comparisons = [
  {
    traditional: "Participación voluntaria y esporádica",
    pad: "Participación en el momento del pago (alto alcance)"
  },
  {
    traditional: "Sin incentivos para el ciudadano",
    pad: "Sistema de recompensas y beneficios"
  },
  {
    traditional: "Datos estáticos (encuestas puntuales)",
    pad: "Datos continuos y en tiempo real"
  },
  {
    traditional: "Informes genéricos",
    pad: "Reportes personalizados por preferencia"
  },
  {
    traditional: "Procesos burocráticos",
    pad: "Digital, rápido, sin fricción"
  }
]

export function Comparison() {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Comparación
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            {"¿Por qué PAD es diferente?"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Los métodos tradicionales de participación ciudadana ya no alcanzan. 
            PAD representa un nuevo paradigma.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20 text-center">
              <span className="font-semibold text-foreground">Tradicional</span>
            </div>
            <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/30 text-center">
              <span className="font-semibold text-secondary">Con PAD</span>
            </div>
          </div>
          
          <div className="space-y-3">
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-background border border-border flex items-center gap-3">
                  <X className="w-5 h-5 text-destructive shrink-0" />
                  <span className="text-sm text-muted-foreground">{item.traditional}</span>
                </div>
                <div className="p-4 rounded-xl bg-background border border-secondary/30 flex items-center gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-sm text-foreground">{item.pad}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
