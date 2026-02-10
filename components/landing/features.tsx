import { 
  QrCode, 
  BarChart3, 
  Brain, 
  Plug, 
  Gift, 
  MapPin 
} from "lucide-react"

const features = [
  {
    icon: QrCode,
    title: "Portal de encuestas",
    description: "Acceso instantáneo vía QR. Identificación simple con Gmail o datos básicos. Preguntas configurables y sistema de puntos.",
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "Dashboard en tiempo real",
    description: "Métricas actualizadas al instante, gráficos interactivos e histórico de preferencias con filtros avanzados.",
    color: "secondary"
  },
  {
    icon: MapPin,
    title: "Datos georreferenciados",
    description: "Visualizá las preferencias en mapas interactivos. Identificá patrones por zona, barrio o distrito.",
    color: "accent"
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description: "Insights automáticos sobre tendencias, detección de cambios en preferencias y recomendaciones de acción.",
    color: "primary"
  },
  {
    icon: Gift,
    title: "Sistema de recompensas",
    description: "Los ciudadanos acumulan puntos por participar. Canjeables por descuentos en tasas o beneficios locales.",
    color: "secondary"
  },
  {
    icon: Plug,
    title: "Integración sencilla",
    description: "APIs para conectar con sistemas de recaudación existentes. Compatible con cualquier software municipal.",
    color: "accent"
  }
]

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "hover:border-primary/30"
  },
  secondary: {
    bg: "bg-secondary/10",
    text: "text-secondary",
    border: "hover:border-secondary/30"
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "hover:border-accent/30"
  }
}

export function Features() {
  return (
    <section id="caracteristicas" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Características
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Todo lo que necesitás para conectar con tus vecinos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Una plataforma completa que simplifica la participación ciudadana 
            y transforma datos en decisiones inteligentes.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses]
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-background border border-border ${colors.border} transition-all hover:shadow-lg group`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
