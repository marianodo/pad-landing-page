import { AlertTriangle, Clock, Users, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: Users,
    title: "Baja participación",
    description: "Las audiencias públicas y presupuestos participativos llegan a menos del 1% de la población."
  },
  {
    icon: Clock,
    title: "Procesos lentos",
    description: "Meses para obtener feedback ciudadano que llega tarde para la toma de decisiones."
  },
  {
    icon: TrendingDown,
    title: "Datos desactualizados",
    description: "Encuestas puntuales que no reflejan las preferencias actuales de los vecinos."
  },
  {
    icon: AlertTriangle,
    title: "Desconexión creciente",
    description: "La insatisfacción ciudadana crece mientras los gobernantes deciden sin información precisa."
  }
]

export function Problem() {
  return (
    <section id="problema" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            El problema
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Las instituciones democráticas están desconectadas de sus ciudadanos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Los mecanismos tradicionales de participación ciudadana son lentos, burocráticos 
            y alcanzan a muy poca gente. Mientras tanto, la brecha entre gobierno y ciudadanos crece.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
