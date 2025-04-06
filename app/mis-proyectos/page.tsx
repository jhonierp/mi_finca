"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Filter, Plus, ArrowRight } from "lucide-react"
import { AppHeader } from "@/components/app-header"

// Datos de ejemplo para los proyectos
const proyectos = [
  {
    id: "gallinas-ponedoras",
    nombre: "Gallinas Ponedoras",
    categoria: "avicultura",
    fechaInicio: "15/01/2024",
    estado: "En producción",
    estadoColor: "bg-green-100 text-green-800",
    icono: "🐔",
    datos: "120 huevos/día",
    ruta: "/avicultura/proyecto/gallinas-ponedoras",
  },
  {
    id: "pollos-engorde",
    nombre: "Pollos de Engorde",
    categoria: "avicultura",
    fechaInicio: "20/03/2024",
    estado: "En crecimiento",
    estadoColor: "bg-blue-100 text-blue-800",
    icono: "🐓",
    datos: "Día 15 de 45",
    ruta: "/avicultura/proyecto/pollos-engorde",
  },
  {
    id: "maiz",
    nombre: "Cultivo de Maíz",
    categoria: "agricultura",
    fechaInicio: "10/02/2024",
    estado: "En crecimiento",
    estadoColor: "bg-blue-100 text-blue-800",
    icono: "🌽",
    datos: "2 hectáreas",
    ruta: "/agricultura/cultivo/maiz",
  },
  {
    id: "vacas-lecheras",
    nombre: "Vacas Lecheras",
    categoria: "ganaderia",
    fechaInicio: "05/12/2023",
    estado: "En producción",
    estadoColor: "bg-green-100 text-green-800",
    icono: "🐄",
    datos: "320 litros/día",
    ruta: "/ganaderia/proyecto/vacas-lecheras",
  },
  {
    id: "tilapia",
    nombre: "Estanque de Tilapia",
    categoria: "piscicultura",
    fechaInicio: "20/01/2024",
    estado: "En crecimiento",
    estadoColor: "bg-blue-100 text-blue-800",
    icono: "🐟",
    datos: "500 peces",
    ruta: "/piscicultura/proyecto/tilapia",
  },
]

// Colores para las categorías
const categoriaColores: Record<string, string> = {
  agricultura: "bg-[#7ed957]/10",
  ganaderia: "bg-[#57d9a2]/10",
  avicultura: "bg-[#57b8d9]/10",
  porcicultura: "bg-[#d957b8]/10",
  piscicultura: "bg-[#5768d9]/10",
  forestal: "bg-[#d9c957]/10",
}

export default function MisProyectos() {
  const [busqueda, setBusqueda] = useState("")
  const [filtroCategoria, setFiltroCategoria] = useState<string | null>(null)

  // Filtrar proyectos según búsqueda y categoría
  const proyectosFiltrados = proyectos.filter((proyecto) => {
    const coincideBusqueda = proyecto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    const coincideCategoria = filtroCategoria ? proyecto.categoria === filtroCategoria : true
    return coincideBusqueda && coincideCategoria
  })

  return (
    <main className="flex min-h-screen flex-col items-center bg-primary-light p-4">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        {/* Header */}
        <AppHeader />

        <h1 className="text-2xl font-bebas tracking-wider w-full">Mis Proyectos</h1>

        {/* Search and filter */}
        <div className="w-full flex gap-2">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar proyecto..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-button"
            />
          </div>
          <div className="relative">
            <select
              value={filtroCategoria || ""}
              onChange={(e) => setFiltroCategoria(e.target.value || null)}
              className="h-full px-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-button appearance-none pr-8"
            >
              <option value="">Todos</option>
              <option value="agricultura">Agricultura</option>
              <option value="ganaderia">Ganadería</option>
              <option value="avicultura">Avicultura</option>
              <option value="porcicultura">Porcicultura</option>
              <option value="piscicultura">Piscicultura</option>
              <option value="forestal">Forestal</option>
            </select>
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
              <Filter size={18} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Projects list */}
        <div className="w-full space-y-3">
          {proyectosFiltrados.length > 0 ? (
            proyectosFiltrados.map((proyecto) => (
              <Link key={proyecto.id} href={proyecto.ruta}>
                <div
                  className={`w-full rounded-xl p-4 ${categoriaColores[proyecto.categoria]} hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{proyecto.icono}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{proyecto.nombre}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${proyecto.estadoColor}`}>
                          {proyecto.estado}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="text-sm text-gray-500 capitalize">{proyecto.categoria}</div>
                        <div className="text-sm font-medium">{proyecto.datos}</div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Inicio: {proyecto.fechaInicio}</div>
                    </div>
                    <ArrowRight size={18} className="text-gray-400" />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No se encontraron proyectos</p>
            </div>
          )}
        </div>

        {/* Add new project button */}
        <Link href="/dashboard" className="w-full">
          <button className="w-full py-3 bg-primary-button rounded-full text-center font-medium shadow-sm hover:bg-primary-button/80 transition-colors flex items-center justify-center gap-2">
            <Plus size={18} />
            Nuevo proyecto
          </button>
        </Link>
      </div>
    </main>
  )
}

