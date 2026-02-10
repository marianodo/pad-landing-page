"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <span className="font-semibold text-lg text-foreground">PAD</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#problema" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Problema
            </Link>
            <Link href="#solucion" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Solución
            </Link>
            <Link href="#caracteristicas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Características
            </Link>
            <Link href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cómo funciona
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Iniciar sesión
            </Button>
            <Button size="sm">
              Solicitar demo
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link href="#problema" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Problema
              </Link>
              <Link href="#solucion" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Solución
              </Link>
              <Link href="#caracteristicas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Características
              </Link>
              <Link href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cómo funciona
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="justify-start">
                  Iniciar sesión
                </Button>
                <Button size="sm">
                  Solicitar demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
