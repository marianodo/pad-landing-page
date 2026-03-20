import React from "react"
import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'

const _montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });
const _openSans = Open_Sans({ subsets: ["latin"], variable: "--font-secondary" });

export const metadata: Metadata = {
  title: 'PAD - Participación Activa Digital',
  description: 'Transformá tributos en participación. Conectamos gobiernos locales con ciudadanos a través de encuestas inteligentes, datos en tiempo real e inteligencia artificial.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
