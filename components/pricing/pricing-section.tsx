"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const cityCategories = [
  { label: "Pequeña", population: "5.000 - 19.999", id: "small" },
  { label: "Mediana", population: "20.000 - 79.999", id: "medium" },
  { label: "Grande", population: "80.000 - 199.999", id: "large" },
  { label: "Gran Ciudad", population: "200.000 - 999.999", id: "xlarge" },
  { label: "Metrópoli", population: "+1.000.000", id: "metro" },
]

const plans = {
  base: {
    name: "Base",
    description: "Módulo de consulta ciudadana, sistema de puntos por beneficios y analítica simple de datos",
    prices: {
      small: "$4,000",
      medium: "$5,000",
      large: "$6,000",
      xlarge: "$8,000",
      metro: "A convenir",
    },
    pricePerInhabitant: {
      small: "$0.32",
      medium: "$0.10",
      large: "$0.04",
      xlarge: "$0.01",
      metro: "A convenir",
    },
    features: [
      "Módulo de consulta ciudadana",
      "Sistema de puntos por beneficios",
      "Analítica simple de datos",
      "Hosting e infraestructura en la nube",
      "Base de datos escalada según población",
      "Soporte básico",
      "Mantenimiento y actualizaciones",
    ],
  },
  professional: {
    name: "Profesional",
    description: "Módulo de consulta ciudadana, sistema de puntos por beneficios, analítica de datos + insights con IA + chatbot para insights customizables + configuración de reportes personalizables por interés",
    prices: {
      small: "$7,000",
      medium: "$9,000",
      large: "$11,000",
      xlarge: "$15,000",
      metro: "A convenir",
    },
    promoPrices: {
      small: "$3,500",
      medium: "$4,500",
      large: "$5,500",
      xlarge: "$7,500",
      metro: "A convenir",
    },
    pricePerInhabitant: {
      small: "$0.56",
      medium: "$0.18",
      large: "$0.07",
      xlarge: "$0.02",
      metro: "A convenir",
    },
    features: [
      "Todo lo incluido en Base",
      "Insights y reportes con IA",
      "Chatbot customizable con IA",
      "Reportes personalizables por interés",
      "Diseño y validación de reportes custom",
      "Caché optimizado para LLM",
      "Soporte prioritario",
    ],
    highlighted: true,
  },
}

export function PricingSection() {
  const [selectedCity, setSelectedCity] = useState("medium")

  return (
    <section id="precios" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Planes y Precios</span>
          </div>
          <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Operación Mensual
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Fee mensual fijo con plazo mínimo de 2 años. Selecciona el tamaño de tu ciudad para ver los precios.
          </p>
        </div>

        {/* City Size Selector */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {cityCategories.map((city) => (
            <button
              key={city.id}
              onClick={() => setSelectedCity(city.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                selectedCity === city.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              )}
            >
              <span>{city.label}</span>
              <span className="ml-1 hidden text-xs opacity-70 sm:inline">({city.population})</span>
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(plans).map(([key, plan]) => (
            <div
              key={key}
              className={cn(
                "relative rounded-2xl border p-8 transition-shadow hover:shadow-lg",
                plan.highlighted
                  ? "border-[#5941CE] bg-card shadow-md"
                  : "border-border bg-card"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-6 rounded-full bg-[#5941CE] px-3 py-1 text-xs font-medium text-white">
                  Recomendado
                </div>
              )}

              <h3 className="mb-2 text-xl font-semibold text-card-foreground">{plan.name}</h3>
              <p className="mb-6 text-sm text-muted-foreground">{plan.description}</p>

              <div className="mb-6">
                {plan.highlighted && plan.promoPrices && (
                  <div className="mb-3 rounded-lg bg-[#00CCBA]/10 border border-[#00CCBA]/30 px-3 py-2">
                    <span className="text-xs font-medium text-[#00CCBA]">Promoción lanzamiento (6 primeros meses):</span>
                    <span className="ml-2 text-lg font-bold text-[#00CCBA]">
                      {plan.promoPrices[selectedCity as keyof typeof plan.promoPrices]}
                      {plan.promoPrices[selectedCity as keyof typeof plan.promoPrices] !== "A convenir" && <span className="text-sm font-normal">/mes</span>}
                    </span>
                  </div>
                )}
                <div className="flex items-baseline gap-1">
                  {plan.highlighted && plan.promoPrices ? (
                    <>
                      <span className="text-2xl font-medium tracking-tight text-muted-foreground line-through">
                        {plan.prices[selectedCity as keyof typeof plan.prices]}
                      </span>
                      <span className="ml-2 text-sm text-muted-foreground">precio regular /mes</span>
                    </>
                  ) : (
                    <>
                      <span className="text-4xl font-bold tracking-tight text-card-foreground">
                        {plan.prices[selectedCity as keyof typeof plan.prices]}
                      </span>
                      {plan.prices[selectedCity as keyof typeof plan.prices] !== "A convenir" && (
                        <span className="text-muted-foreground">/mes</span>
                      )}
                    </>
                  )}
                </div>
                <div className="mt-2 flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2">
                  <span className="text-xs text-muted-foreground">Precio por habitante:</span>
                  <span className={cn(
                    "text-sm font-semibold",
                    plan.highlighted ? "text-[#5941CE]" : "text-[#00CCBA]"
                  )}>
                    {plan.pricePerInhabitant[selectedCity as keyof typeof plan.pricePerInhabitant]}
                    {plan.pricePerInhabitant[selectedCity as keyof typeof plan.pricePerInhabitant] !== "A convenir" && (
                      <span className="font-normal text-muted-foreground"> USD/hab</span>
                    )}
                  </span>
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "mt-0.5 h-5 w-5 shrink-0",
                        plan.highlighted ? "text-[#5941CE]" : "text-[#00CCBA]"
                      )}
                    />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contacto" className="w-full">
                <Button
                  className={cn(
                    "w-full",
                    plan.highlighted
                      ? "bg-[#5941CE] text-white hover:bg-[#5941CE]/90"
                      : "bg-[#201631] text-white hover:bg-[#201631]/90"
                  )}
                >
                  Solicitar Información
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Minimum Contract Note */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          * Todos los planes tienen un plazo mínimo de contratación de 2 años
        </p>
      </div>
    </section>
  )
}
