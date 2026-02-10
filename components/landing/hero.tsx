import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              GovTech para gobiernos locales
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Transformá tributos en{" "}
              <span className="text-primary">participación</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              Conectamos gobiernos locales con ciudadanos en el momento más relevante: cuando pagan sus tributos. 
              Encuestas rápidas, datos en tiempo real e inteligencia artificial para decisiones de gestión basadas en evidencia.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                Solicitar demo
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                <Play className="w-4 h-4" />
                Ver cómo funciona
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">+50</div>
                <div className="text-sm text-muted-foreground">Municipios</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">1M+</div>
                <div className="text-sm text-muted-foreground">Respuestas</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">P</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Dashboard Municipal</div>
                    <div className="text-sm text-muted-foreground">Datos en tiempo real</div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="text-sm text-muted-foreground mb-1">Participación hoy</div>
                    <div className="text-2xl font-bold text-primary">2,847</div>
                    <div className="text-xs text-secondary mt-1">+12.5% vs ayer</div>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/10">
                    <div className="text-sm text-muted-foreground mb-1">Prioridad #1</div>
                    <div className="text-lg font-semibold text-foreground">Seguridad</div>
                    <div className="text-xs text-muted-foreground mt-1">34% de votos</div>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="text-sm text-muted-foreground mb-3">Tendencia semanal</div>
                  <div className="flex items-end gap-1 h-16">
                    {[40, 55, 45, 70, 65, 80, 75].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-primary/60 transition-all hover:bg-primary"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>Lun</span>
                    <span>Dom</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg border border-border p-4 max-w-[200px]">
              <div className="flex items-center gap-2 text-secondary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Insight IA
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {"La demanda de espacios verdes aumentó 23% en zona norte"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
