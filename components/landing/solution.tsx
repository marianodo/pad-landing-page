import { CheckCircle2 } from "lucide-react"

const forMunicipality = [
  "Sabé qué quieren tus vecinos antes de que te lo reclamen",
  "Datos concretos para justificar decisiones de inversión",
  "Comunicación directa y segmentada con los contribuyentes",
  "Costo fijo y predecible sin sorpresas"
]

const forCitizen = [
  "Tu opinión cuenta: decidí dónde se invierte tu dinero",
  "Beneficios reales por participar (descuentos y créditos)",
  "Transparencia: recibí información sobre lo que te importa",
  "Menos de 1 minuto para completar"
]

export function Solution() {
  return (
    <section id="solucion" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            La solución
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            PAD interviene en el momento más relevante
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Capturamos las preferencias ciudadanas en el momento del pago de tributos, 
            donde se materializa la relación entre ciudadano y Estado.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="absolute -top-3 left-8">
              <span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                Para el municipio
              </span>
            </div>
            
            <div className="mt-4 space-y-4">
              {forMunicipality.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 rounded-xl bg-card border border-border">
              <div className="text-sm text-muted-foreground mb-2">Dashboard inteligente</div>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2 rounded-lg bg-primary/10 text-center">
                  <div className="text-lg font-bold text-primary">85%</div>
                  <div className="text-xs text-muted-foreground">Alcance</div>
                </div>
                <div className="p-2 rounded-lg bg-secondary/10 text-center">
                  <div className="text-lg font-bold text-secondary">24/7</div>
                  <div className="text-xs text-muted-foreground">Datos</div>
                </div>
                <div className="p-2 rounded-lg bg-accent/10 text-center">
                  <div className="text-lg font-bold text-accent">IA</div>
                  <div className="text-xs text-muted-foreground">Insights</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative p-8 rounded-2xl bg-secondary/5 border border-secondary/20">
            <div className="absolute -top-3 left-8">
              <span className="px-4 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                Para el ciudadano
              </span>
            </div>
            
            <div className="mt-4 space-y-4">
              {forCitizen.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 rounded-xl bg-card border border-border">
              <div className="text-sm text-muted-foreground mb-3">Encuesta rápida</div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-foreground">{"¿En qué área preferís que se invierta?"}</div>
                <div className="space-y-2">
                  {["Seguridad", "Espacios verdes", "Infraestructura"].map((option, i) => (
                    <div 
                      key={i}
                      className={`p-2 rounded-lg border text-sm ${i === 0 ? "border-secondary bg-secondary/10 text-secondary" : "border-border text-muted-foreground"}`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
