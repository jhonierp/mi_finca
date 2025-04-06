"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Plus, Minus, Egg, AlertCircle } from "lucide-react"
import { AppHeader } from "@/components/app-header"

export default function RegistroProduccion() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fecha: new Date().toISOString().split("T")[0],
    cantidadHuevos: 120,
    huevosRotos: 2,
    observaciones: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleIncrement = (field: string) => {
    if (field === "cantidadHuevos") {
      setFormData((prev) => ({ ...prev, cantidadHuevos: prev.cantidadHuevos + 1 }))
    } else if (field === "huevosRotos") {
      setFormData((prev) => ({ ...prev, huevosRotos: prev.huevosRotos + 1 }))
    }
  }

  const handleDecrement = (field: string) => {
    if (field === "cantidadHuevos" && formData.cantidadHuevos > 0) {
      setFormData((prev) => ({ ...prev, cantidadHuevos: prev.cantidadHuevos - 1 }))
    } else if (field === "huevosRotos" && formData.huevosRotos > 0) {
      setFormData((prev) => ({ ...prev, huevosRotos: prev.huevosRotos - 1 }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar el registro
    console.log("Datos del registro:", formData)
    // Redirigir al detalle del proyecto
    router.push("/avicultura/proyecto/gallinas-ponedoras")
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-primary-light p-4">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        {/* Header */}
        <AppHeader />

        {/* Back button and title */}
        <div className="w-full flex items-center gap-3 mb-2">
          <Link
            href="/avicultura/proyecto/gallinas-ponedoras"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/50 transition-colors"
          >
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bebas tracking-wider">Registro de Producción</h1>
        </div>

        {/* Form */}
        <div className="w-full bg-white rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">🐔</div>
            <h2 className="text-xl font-bold">Gallinas Ponedoras</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="fecha" className="block text-sm font-medium">
                Fecha de recolección
              </label>
              <input
                id="fecha"
                name="fecha"
                type="date"
                required
                value={formData.fecha}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#57b8d9]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="cantidadHuevos" className="block text-sm font-medium flex items-center gap-2">
                <Egg size={16} />
                Cantidad de huevos recolectados
              </label>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => handleDecrement("cantidadHuevos")}
                  className="p-2 bg-gray-100 rounded-l-lg hover:bg-gray-200"
                >
                  <Minus size={16} />
                </button>
                <input
                  id="cantidadHuevos"
                  name="cantidadHuevos"
                  type="number"
                  required
                  value={formData.cantidadHuevos}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-y border-gray-300 focus:outline-none focus:ring-0 text-center"
                />
                <button
                  type="button"
                  onClick={() => handleIncrement("cantidadHuevos")}
                  className="p-2 bg-gray-100 rounded-r-lg hover:bg-gray-200"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="huevosRotos" className="block text-sm font-medium flex items-center gap-2">
                <AlertCircle size={16} />
                Huevos rotos o defectuosos
              </label>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => handleDecrement("huevosRotos")}
                  className="p-2 bg-gray-100 rounded-l-lg hover:bg-gray-200"
                >
                  <Minus size={16} />
                </button>
                <input
                  id="huevosRotos"
                  name="huevosRotos"
                  type="number"
                  required
                  value={formData.huevosRotos}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-y border-gray-300 focus:outline-none focus:ring-0 text-center"
                />
                <button
                  type="button"
                  onClick={() => handleIncrement("huevosRotos")}
                  className="p-2 bg-gray-100 rounded-r-lg hover:bg-gray-200"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="text-sm">Huevos útiles:</span>
                <span className="text-sm font-medium">{formData.cantidadHuevos - formData.huevosRotos}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Tasa de postura:</span>
                <span className="text-sm font-medium">{((formData.cantidadHuevos / 147) * 100).toFixed(1)}%</span>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="observaciones" className="block text-sm font-medium">
                Observaciones
              </label>
              <textarea
                id="observaciones"
                name="observaciones"
                rows={3}
                value={formData.observaciones}
                onChange={handleChange}
                placeholder="Anote cualquier observación relevante..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#57b8d9]"
              />
            </div>

            <div className="pt-4 flex gap-3">
              <Link
                href="/avicultura/proyecto/gallinas-ponedoras"
                className="flex-1 py-3 bg-gray-100 rounded-full text-center font-medium hover:bg-gray-200 transition-colors"
              >
                Cancelar
              </Link>
              <button
                type="submit"
                className="flex-1 py-3 bg-[#57b8d9] rounded-full text-center font-medium shadow-sm hover:bg-[#48a6c4] transition-colors"
              >
                Guardar registro
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

