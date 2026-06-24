"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, MessageSquare, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-6 md:px-12 lg:px-20">
          <a href="#" className="flex items-center">
            <Image
              src="/images/logo-data-insights-trim.png"
              alt="Data Insights"
              width={1563}
              height={364}
              className="h-11 w-auto md:h-12"
              priority
            />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#implementacion" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Implementación
            </a>
            <a href="#precios" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Precios
            </a>
            <a href="#beneficios" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Beneficios
            </a>
          </nav>
          <a href="#contacto">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Contactar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Content */}
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-12 md:pt-20 lg:px-20 lg:pt-24">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-sm text-muted-foreground">Propuesta Comercial 2026</span>
        </div>

        <div className="mb-8">
          <Image
            src="/images/logo-pad.png"
            alt="PAD - Participación Activa Digital"
            width={280}
            height={120}
            className="max-w-[280px]"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>

        <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Plataforma de Consulta Ciudadana para Gobiernos
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          Plataforma integral de consulta ciudadana que conecta a los gobiernos con sus contribuyentes, 
          generando datos valiosos a través de incentivos y recompensas.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="#implementacion">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Ver Precios
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="#contacto">
            <Button size="lg" variant="outline" className="border-border">
              Solicitar Demo
            </Button>
          </a>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#5941CE]">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-2 font-semibold text-card-foreground">Consulta Ciudadana</h3>
            <p className="text-sm text-muted-foreground">
              Portal de consultas personalizado para conocer la opinión de los contribuyentes.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#00CCBA]">
              <BarChart3 className="h-6 w-6 text-[#201631]" />
            </div>
            <h3 className="mb-2 font-semibold text-card-foreground">Dashboard Analytics</h3>
            <p className="text-sm text-muted-foreground">
              Visualización de datos en tiempo real con insights potenciados por IA.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#3C2E51]">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-2 font-semibold text-card-foreground">Sistema de Puntos</h3>
            <p className="text-sm text-muted-foreground">
              Incentiva la participación con un programa de beneficios para contribuyentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
