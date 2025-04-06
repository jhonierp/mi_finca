"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, FileText, BarChart2, TrendingUp, Calendar, ChevronRight } from "lucide-react"
import { AppHeader } from "@/components/app-header"

// Datos de ejemplo para los informes disponibles
const informes = [
  {
    id: "rentabilidad-abril-2024",
    titulo: "Informe de Rentabilidad",
    descripcion: "Abril 2024",
    icono: <BarChart2 size={20} className="text-blue-600" />,
    color: "bg-blue-100",
    ruta: "/rentabilidad",
  },
  {
    id: "produccion-abril-2024",
    titulo: "Informe de Producción",
    descripcion: "Abril 2024",
    icono: <TrendingUp size={20} className="text-green-600" />,
    color: "bg-green-100",
    ruta: "/informes/produccion",
  },
  {
    id: "gastos-abril-2024",
    titulo: "Informe de Gastos",
    descripcion: "Abril 2024",
    icono: <FileText size={20} className="text-red-600" />,
    color: "bg-red-100",
    ruta: "/informes/gastos",
  },
  {
    id: "rentabilidad-marzo-2024",
    titulo: "Informe de Rentabilidad",
    descripcion: "Marzo 2024",
    icono: <BarChart2 size={20} className="text-blue-600" />,
    color: "bg-blue-100",
    ruta: "/informes/historico/rentabilidad-marzo-2024",
  },
  {
    id: "produccion-marzo-2024",
    titulo: "Informe de Producción",
    descripcion: "Marzo 2024",
    icono: <TrendingUp size={20} className="text-green-600" />,
    color: "bg-green-100",
    ruta: "/informes/historico/produccion-marzo-2024",
  },
  {
    id: "gastos-marzo-2024",
    titulo: "Informe de Gastos",
    descripcion: "Marzo 2024",
    icono: <FileText size={20} className="text-red-600" />,
    color: "bg-red-100",
    ruta: "/informes/historico/gastos-marzo-2024",
  },
]

export default function Informes() {
  const [periodoSeleccionado, setPeriodoSeleccionado] = useState("Abril 2024")

  // Filtrar informes por periodo
  const informesFiltrados = informes.filter((informe) => informe.descripcion === periodoSeleccionado)

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
          <h1 className="text-2xl font-bebas tracking-wider">Informes</h1>
        </div>

        {/* Period selector */}
        <div className="w-full flex items-center bg-white rounded-xl p-3 shadow-sm">
          <div className="flex items-center gap-2 flex-1">
            <Calendar size={18} className="text-gray-500" />
            <select
              value={periodoSeleccionado}
              onChange={(e) => setPeriodoSeleccionado(e.target.value)}
              className="bg-transparent focus:outline-none text-sm font-medium"
            >
              <option value="Abril 2024">Abril 2024</option>
              <option value="Marzo 2024">Marzo 2024</option>
              <option value="Febrero 2024">Febrero 2024</option>
              <option value="Enero 2024">Enero 2024</option>
              <option value="Diciembre 2023">Diciembre 2023</option>
              <option value="Noviembre 2023">Noviembre 2023</option>
            </select>
          </div>
        </div>

        {/* Reports list */}
        <div className="w-full space-y-3">
          {informesFiltrados.map((informe) => (
            <Link key={informe.id} href={informe.ruta}>
              <div className={`w-full rounded-xl p-4 ${informe.color} hover:shadow-md transition-shadow`}>
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-lg mr-3">{informe.icono}</div>
                  <div className="flex-1">
                    <h3 className="font-medium">{informe.titulo}</h3>
                    <p className="text-sm text-gray-600">{informe.descripcion}</p>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Generate custom report button */}
        <button className="w-full py-3 bg-primary-dark text-white rounded-full text-center font-medium shadow-sm hover:bg-primary-darkest transition-colors flex items-center justify-center gap-2">
          <FileText size={18} />
          Generar informe personalizado
        </button>
      </div>
    </main>
  )
}

