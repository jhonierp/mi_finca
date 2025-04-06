"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin } from "lucide-react"
import { AppHeader } from "@/components/app-header"

// Datos de ejemplo para los cultivos
const cultivos = {
  maiz: {
    nombre: "Maíz",
    imagen: "🌽",
  },
  trigo: {
    nombre: "Trigo",
    imagen: "🌾",
  },
  frijol: {
    nombre: "Frijol",
    imagen: "🫘",
  },
  papa: {
    nombre: "Papa",
    imagen: "🥔",
  },
  tomate: {
    nombre: "Tomate",
    imagen: "🍅",
  },
  zanahoria: {
    nombre: "Zanahoria",
    imagen: "🥕",
  },
}

export default function AgregarCultivo({ params }: { params: { cultivo: string } }) {
  const router = useRouter()
  const cultivoId = params.cultivo
  const cultivoInfo = cultivos[cultivoId as keyof typeof cultivos]

  const [formData, setFormData] = useState({
    area: "",
    fechaSiembra: "",
    ubicacion: "",
    variedad: "",
    notas: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar el cultivo
    console.log("Datos del cultivo:", { cultivo: cultivoId, ...formData })
    // Redirigir al dashboard de agricultura
    router.push("/agricultura")
  }

  if (!cultivoInfo) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-primary-light p-4">
        <div className="w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Cultivo no encontrado</h1>
          <Link href="/agricultura/nuevo-cultivo" className="text-[#7ed957] hover:underline">
            Volver a selección de cultivos
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-primary-light p-4">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        {/* Header */}
        <AppHeader />

        {/* Back button and title */}
        <div className="w-full flex items-center gap-3 mb-2">
          <Link
            href="/agricultura/nuevo-cultivo"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/50 transition-colors"
          >
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bebas tracking-wider">Agregar {cultivoInfo.nombre}</h1>
        </div>

        {/* Form */}
        <div className="w-full bg-white rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">{cultivoInfo.imagen}</div>
            <h2 className="text-xl font-bold">{cultivoInfo.nombre}</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="area" className="block text-sm font-medium">
                Área de cultivo (m²)
              </label>
              <input
                id="area"
                name="area"
                type="number"
                required
                value={formData.area}
                onChange={handleChange}
                placeholder="Ej: 500"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ed957]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="fechaSiembra" className="block text-sm font-medium flex items-center gap-1">
                <Calendar size={16} />
                Fecha de siembra
              </label>
              <input
                id="fechaSiembra"
                name="fechaSiembra"
                type="date"
                required
                value={formData.fechaSiembra}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ed957]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="ubicacion" className="block text-sm font-medium flex items-center gap-1">
                <MapPin size={16} />
                Ubicación en la finca
              </label>
              <input
                id="ubicacion"
                name="ubicacion"
                type="text"
                value={formData.ubicacion}
                onChange={handleChange}
                placeholder="Ej: Parcela norte"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ed957]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="variedad" className="block text-sm font-medium">
                Variedad
              </label>
              <input
                id="variedad"
                name="variedad"
                type="text"
                value={formData.variedad}
                onChange={handleChange}
                placeholder="Ej: Híbrido H-507"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ed957]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="notas" className="block text-sm font-medium">
                Notas adicionales
              </label>
              <textarea
                id="notas"
                name="notas"
                rows={3}
                value={formData.notas}
                onChange={handleChange}
                placeholder="Información adicional sobre este cultivo..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7ed957]"
              />
            </div>

            <div className="pt-4 flex gap-3">
              <Link
                href="/agricultura/nuevo-cultivo"
                className="flex-1 py-3 bg-gray-100 rounded-full text-center font-medium hover:bg-gray-200 transition-colors"
              >
                Cancelar
              </Link>
              <button
                type="submit"
                className="flex-1 py-3 bg-[#7ed957] rounded-full text-center font-medium shadow-sm hover:bg-[#6bc348] transition-colors"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

