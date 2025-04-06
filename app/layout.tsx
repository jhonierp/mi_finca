import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Poppins } from "next/font/google"
import "./globals.css"

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "TU FINCA",
  description: "Manage your farm with TU FINCA",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${poppins.variable} font-poppins`}>{children}</body>
    </html>
  )
}



import './globals.css'