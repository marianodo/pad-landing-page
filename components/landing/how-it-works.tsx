import { ScanLine, MessageSquare, Gift, BarChart, Lightbulb, Mail } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ScanLine,
    title: "Escanea",
    description: "El ciudadano escanea un código QR al momento de pagar su tributo municipal.",
    color: "primary"
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Opina",
    description: "Responde una encuesta rápida de 3-5 preguntas sobre prioridades de inversión.",
    color: "secondary"
  },
  {
    number: "03",
    icon: Gift,
    title: "Gana",
    description: "Recibe puntos y beneficios por participar: descuentos, créditos acumulables.",
    color: "accent"
  },
  {
    number: "04",
    icon: BarChart,
    title: "Visualiza",
    description: "El municipio ve las preferencias en tiempo real en el dashboard interactivo.",
    color: "primary"
  },
  {
    number: "05",
    icon: Lightbulb,
    title: "Actúa",
    description: "Insights con IA ayudan a tomar decisiones basadas en datos concretos.",
    color: "secondary"
  },
  {
    number: "06",
    icon: Mail,
    title: "Informa",
    description: "El ciudadano recibe reportes personalizados sobre los temas que eligió.",
    color: "accent"
  }
]

const colorClasses = {
  primary: {
    bg: "bg-primary",
    bgLight: "bg-primary/10",
    text: "text-primary",
    border: "border-primary"
  },
  secondary: {
    bg: "bg-secondary",
    bgLight: "bg-secondary/10",
    text: "text-secondary",
    border: "border-secondary"
  },
  accent: {
    bg: "bg-accent",
    bgLight: "bg-accent/10",
    text: "text-accent",
    border: "border-accent"
  }
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Cómo funciona
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            De contribuyente a ciudadano activo en 6 pasos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Un proceso simple y sin fricción que transforma cada pago 
            en una oportunidad de participación.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const colors = colorClasses[step.color as keyof typeof colorClasses]
            return (
              <div key={index} className="relative">
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 w-14 h-14 rounded-2xl ${colors.bgLight} flex items-center justify-center relative`}>
                    <step.icon className={`w-6 h-6 ${colors.text}`} />
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${colors.bg} flex items-center justify-center`}>
                      <span className="text-xs font-bold text-primary-foreground">{step.number}</span>
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                {index < steps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(100%_-_2rem)] w-8 border-t-2 border-dashed border-border" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
