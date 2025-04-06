import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AppHeader } from "@/components/app-header"

type CategoryLayoutProps = {
  title: string
  description: string
  color: string
  icon: React.ReactNode
  children: React.ReactNode
}

export function CategoryLayout({ title, description, color, icon, children }: CategoryLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center bg-primary-light p-4">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        {/* Header */}
        <AppHeader />

        {/* Back button and title */}
        <div className="w-full flex items-center gap-3 mb-2">
          <Link
            href="/dashboard"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/50 transition-colors"
          >
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bebas tracking-wider capitalize">{title}</h1>
        </div>

        {/* Category header */}
        <div className={`w-full ${color} rounded-3xl p-6 flex items-center gap-4 shadow-sm`}>
          <div className="bg-white/20 p-3 rounded-2xl">{icon}</div>
          <div>
            <h2 className="text-2xl font-bold capitalize">{title}</h2>
            <p className="text-sm opacity-80">{description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="w-full">{children}</div>
      </div>
    </main>
  )
}

