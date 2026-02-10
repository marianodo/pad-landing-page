"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function CTA() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section id="contacto" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
          
          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground text-balance">
              Transformá la gestión de tu municipio
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 text-pretty">
              Agendá una demo personalizada y descubrí cómo PAD puede ayudarte a 
              conectar con tus vecinos y tomar mejores decisiones.
            </p>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="tu@municipio.gob.ar"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground"
                  required
                />
                <Button 
                  type="submit"
                  variant="secondary" 
                  className="shrink-0 gap-2"
                >
                  Solicitar demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            ) : (
              <div className="mt-8 flex items-center justify-center gap-2 text-primary-foreground">
                <CheckCircle2 className="w-5 h-5" />
                <span>{"¡Gracias! Nos pondremos en contacto pronto."}</span>
              </div>
            )}
            
            <p className="mt-4 text-sm text-primary-foreground/60">
              Sin compromiso. Respondemos en menos de 24 horas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
