"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search, Calendar, Users, Scale, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { AppHeader } from "@/components/app-header"

// Datos de ejemplo para los proyectos avícolas
const proyectos = [
  {
    id: "gallinas-ponedoras",
    nombre: "Gallinas Ponedoras",
    imagen: "🐔",
    duracion: "18-24 meses (ciclo productivo)",
    espacio: "4-5 gallinas por m²",
    produccion: "250-300 huevos por gallina/año",
    rentabilidad: "Media-Alta",
    descripcion:
      "Las gallinas ponedoras son aves especializadas en la producción de huevos para consumo humano. Su ciclo productivo suele durar entre 18 y 24 meses, tras lo cual la producción disminuye.",
  },
  {
    id: "pollos-engorde",
    nombre: "Pollos de Engorde",
    imagen: "🐓",
    duracion: "42-49 días (ciclo completo)",
    espacio: "10-12 pollos por m²",
    produccion: "2.5-3 kg por ave",
    rentabilidad: "Alta",
    descripcion:
      "Los pollos de engorde o broilers son aves de rápido crecimiento destinadas a la producción de carne. Su ciclo es corto pero requieren cuidados intensivos para maximizar su crecimiento.",
  },
  {
    id: "pavos",
    nombre: "Pavos",
    imagen: "🦃",
    duracion: "14-18 semanas (ciclo completo)",
    espacio: "2-3 pavos por m²",
    produccion: "8-12 kg por ave",
    rentabilidad: "Media",
    descripcion:
      "Los pavos son aves de mayor tamaño que requieren más espacio y tiempo para alcanzar su peso de mercado. Son populares para ocasiones especiales y festividades.",
  },
  {
    id: "codornices",
    nombre: "Codornices",
    imagen: "🪶",
    duracion: "6-8 semanas (inicio de postura)",
    espacio: "40-50 codornices por m²",
    produccion: "280-300 huevos por ave/año",
    rentabilidad: "Media-Alta",
    descripcion:
      "Las codornices son aves pequeñas que requieren poco espacio y tienen una alta producción de huevos en relación a su tamaño. Su ciclo productivo es rápido y eficiente.",
  },
  {
    id: "patos",
    nombre: "Patos",
    imagen: "🦆",
    duracion: "7-9 semanas (engorde)",
    espacio: "3-4 patos por m²",
    produccion: "3-4 kg por ave",
    rentabilidad: "Media",
    descripcion:
      "Los patos son aves acuáticas que pueden criarse para carne o huevos. Son resistentes a enfermedades pero requieren acceso a agua para nadar o al menos para sumergir la cabeza.",
  },
  {
    id: "gansos",
    nombre: "Gansos",
    imagen: "🪿",
    duracion: "12-15 semanas (engorde)",
    espacio: "1-2 gansos por m²",
    produccion: "5-7 kg por ave",
    rentabilidad: "Media-Baja",
    descripcion:
      "Los gansos son aves de gran tamaño que requieren más espacio y tiempo para crecer. Son excelentes para el control de malezas y pueden integrarse en sistemas agrícolas mixtos.",
  },
]

export default function NuevoProyecto() {
  const [busqueda, setBusqueda] = useState("")
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<string | null>(null)

  const proyectosFiltrados = proyectos.filter((proyecto) =>
    proyecto.nombre.toLowerCase().includes(busqueda.toLowerCase()),
  )

  const proyectoDetalle = proyectos.find((proyecto) => proyecto.id === proyectoSeleccionado)

  return (
    <main className="flex min-h-screen flex-col items-center bg-primary-light p-4">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        {/* Header */}
        <AppHeader />

        {/* Back button and title */}
        <div className="w-full flex items-center gap-3 mb-2">
          <Link
            href="/avicultura"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/50 transition-colors"
          >
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bebas tracking-wider">Nuevo Proyecto Avícola</h1>
        </div>

        {/* Search bar */}
        <div className="w-full relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar tipo de ave..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#57b8d9]"
          />
        </div>

        {/* Proyectos grid or detail view */}
        {!proyectoSeleccionado ? (
          <div className="w-full grid grid-cols-2 gap-3">
            {proyectosFiltrados.map((proyecto) => (
              <motion.div
                key={proyecto.id}
                className="bg-white rounded-xl p-4 shadow-sm cursor-pointer"
                whileHover={{ scale: 1.03, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                onClick={() => setProyectoSeleccionado(proyecto.id)}
              >
                <div className="text-4xl mb-2">{proyecto.imagen}</div>
                <h3 className="font-medium">{proyecto.nombre}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                  <Calendar size={14} />
                  {proyecto.duracion.split(" ")[0]}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="w-full bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-5xl mb-2">{proyectoDetalle?.imagen}</div>
                <h2 className="text-2xl font-bold">{proyectoDetalle?.nombre}</h2>
              </div>
              <button onClick={() => setProyectoSeleccionado(null)} className="p-2 rounded-full hover:bg-gray-100">
                <ArrowLeft size={20} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <Calendar className="text-[#57b8d9] mt-0.5 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium">Duración del ciclo</h4>
                  <p className="text-sm text-gray-600">{proyectoDetalle?.duracion}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <Users className="text-[#57b8d9] mt-0.5 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium">Densidad recomendada</h4>
                  <p className="text-sm text-gray-600">{proyectoDetalle?.espacio}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <Scale className="text-[#57b8d9] mt-0.5 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium">Producción esperada</h4>
                  <p className="text-sm text-gray-600">{proyectoDetalle?.produccion}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <TrendingUp className="text-[#57b8d9] mt-0.5 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium">Rentabilidad</h4>
                  <p className="text-sm text-gray-600">{proyectoDetalle?.rentabilidad}</p>
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-1">Descripción</h4>
                <p className="text-sm text-gray-600">{proyectoDetalle?.descripcion}</p>
              </div>
            </div>

            <Link href={`/avicultura/configurar/${proyectoDetalle?.id}`}>
              <button className="w-full py-3 bg-[#57b8d9] rounded-full text-center font-medium shadow-sm hover:bg-[#48a6c4] transition-colors">
                Configurar proyecto
              </button>
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}

