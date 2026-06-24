import { Percent, ShoppingBag, Gift } from "lucide-react"

const benefitPrograms = [
  {
    icon: Percent,
    title: "Descuento en Tasas",
    description: "Costo variable según descuento a aplicar por el Gobierno",
    detail: "Solo aplica a contribuyentes de la Tasa específica",
    color: "bg-[#5941CE]",
  },
  {
    icon: ShoppingBag,
    title: "Descuento en Comercios",
    description: "Costo variable según se aplique un programa local o externo",
    detail: "Aplica a todos los contribuyentes que participen voluntariamente",
    color: "bg-[#00CCBA]",
    iconColor: "text-[#201631]",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-card py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
            <Gift className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Programa de Beneficios</span>
          </div>
          <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Incentivos para la participación
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Dos modalidades de recompensa para motivar a los ciudadanos a participar activamente.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {benefitPrograms.map((program, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all hover:shadow-lg"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-secondary opacity-50 transition-transform group-hover:scale-150" />
              
              <div className="relative">
                <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${program.color}`}>
                  <program.icon className={`h-7 w-7 ${program.iconColor || "text-white"}`} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-foreground">{program.title}</h3>
                <p className="mb-4 text-muted-foreground">{program.description}</p>
                
                <div className="rounded-lg bg-secondary px-4 py-3">
                  <p className="text-sm text-muted-foreground">{program.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 rounded-2xl border border-border bg-background p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-4xl font-bold text-foreground">1 mes</div>
              <p className="text-muted-foreground">Tiempo de implementación</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl font-bold text-foreground">2 años</div>
              <p className="text-muted-foreground">Plazo mínimo de contrato</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl font-bold text-[#5941CE]">24/7</div>
              <p className="text-muted-foreground">Soporte y monitoreo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
