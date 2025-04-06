"use client"

import { HouseLogoSmall } from "@/components/icons"
import { Sidebar } from "@/components/sidebar"

export function AppHeader() {
  return (
    <div className="w-full flex justify-between items-center">
      <Sidebar />

      <div className="flex items-center gap-2">
        <HouseLogoSmall className="h-10 w-auto" />
        <h1 className="text-2xl font-bebas tracking-wider">TU FINCA</h1>
      </div>
    </div>
  )
}

