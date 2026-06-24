import { HeroSection } from "@/components/pricing/hero-section"
import { ImplementationSection } from "@/components/pricing/implementation-section"
import { PricingSection } from "@/components/pricing/pricing-section"
import { BenefitsSection } from "@/components/pricing/benefits-section"
import { ContactSection } from "@/components/pricing/contact-section"
import { Footer } from "@/components/pricing/footer"

export const metadata = {
  title: "Propuesta Comercial · PAD",
  description:
    "Propuesta comercial de P.A.D. — Participación Activa Digital. Planes según escala de población.",
}

export default function PricingPage() {
  return (
    // theme-pricing aplica la paleta propia (violeta/menta) solo a esta ruta.
    <main className="theme-pricing min-h-screen bg-background">
      <HeroSection />
      <ImplementationSection />
      <PricingSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
