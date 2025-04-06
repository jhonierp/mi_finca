"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search, Info, ThermometerSun, Clock, Mountain, Droplets } from "lucide-react"
import { motion } from "framer-motion"
import { AppHeader } from "@/components/app-header"

// Datos de ejemplo para los cultivos
const cultivos = [
  {
    id: "maiz",
    nombre: "Maíz",
    imagen: "🌽",
    duracion: "3-5 meses",
    clima: "Cálido a templado (20-30°C)",
    tierra: "Suelo franco, bien drenado, pH 5.5-7.5",
    agua: "Requiere riego regular, 500-800 mm por temporada",
    descripcion:
      "El maíz es uno de los cereales más importantes a nivel mundial. Se adapta a diversas condiciones climáticas y es relativamente fácil de cultivar.",
    consejos: [
      "Sembrar cuando la temperatura del suelo alcance los 10°C",
      "Espaciar las plantas 20-30 cm entre sí",
      "Fertilizar con nitrógeno durante el crecimiento",
    ],
  },
  {
    id: "trigo",
    nombre: "Trigo",
    imagen: "🌾",
    duracion: "7-9 meses (trigo de invierno), 3-4 meses (trigo de primavera)",
    clima: "Templado a frío (15-25°C)",
    tierra: "Suelo franco a franco-arcilloso, pH 6.0-7.5",
    agua: "Moderadamente resistente a sequía, 450-650 mm por temporada",
    descripcion:
      "El trigo es un cereal básico en la alimentación mundial. Existen variedades de invierno y primavera, adaptándose a diferentes ciclos de cultivo.",
    consejos: [
      "El trigo de invierno se siembra en otoño y se cosecha en verano",
      "El trigo de primavera se siembra en primavera y se cosecha en otoño",
      "Rotar con leguminosas para mejorar la fertilidad del suelo",
    ],
  },
  {
    id: "frijol",
    nombre: "Frijol",
    imagen: "🫘",
    duracion: "2-4 meses",
    clima: "Templado (18-25°C)",
    tierra: "Suelo franco-arenoso, bien drenado, pH 5.5-7.5",
    agua: "Sensible a exceso de humedad, 300-500 mm por temporada",
    descripcion:
      "El frijol es una leguminosa rica en proteínas. Tiene la capacidad de fijar nitrógeno en el suelo, mejorando su fertilidad.",
    consejos: [
      "Sembrar cuando haya pasado el riesgo de heladas",
      "Evitar el exceso de humedad para prevenir enfermedades",
      "Ideal para rotación de cultivos",
    ],
  },
  {
    id: "papa",
    nombre: "Papa",
    imagen: "🥔",
    duracion: "3-5 meses",
    clima: "Fresco (15-20°C)",
    tierra: "Suelo franco-arenoso, suelto, pH 5.0-6.5",
    agua: "Requiere humedad constante, 500-700 mm por temporada",
    descripcion:
      "La papa es un tubérculo muy versátil y nutritivo. Prefiere climas frescos y es sensible a las heladas.",
    consejos: [
      "Sembrar tubérculos certificados para evitar enfermedades",
      "Aporcar las plantas para estimular la producción de tubérculos",
      "Rotar cada 3-4 años para evitar plagas y enfermedades",
    ],
  },
  {
    id: "tomate",
    nombre: "Tomate",
    imagen: "🍅",
    duracion: "3-4 meses",
    clima: "Cálido (20-27°C)",
    tierra: "Suelo franco, bien drenado, pH 5.5-7.0",
    agua: "Requiere riego regular, 400-600 mm por temporada",
    descripcion:
      "El tomate es una hortaliza muy popular. Requiere tutoreo y poda para maximizar su producción y calidad.",
    consejos: [
      "Trasplantar cuando haya pasado el riesgo de heladas",
      "Podar regularmente para mejorar la ventilación",
      "Regar por la mañana para evitar enfermedades fúngicas",
    ],
  },
  {
    id: "zanahoria",
    nombre: "Zanahoria",
    imagen: "🥕",
    duracion: "2-4 meses",
    clima: "Templado (15-20°C)",
    tierra: "Suelo franco-arenoso, suelto, pH 6.0-7.0",
    agua: "Requiere humedad constante, 350-500 mm por temporada",
    descripcion:
      "La zanahoria es una raíz rica en vitamina A. Prefiere suelos sueltos y profundos para desarrollar raíces rectas y uniformes.",
    consejos: [
      "Sembrar directamente en el suelo, las semillas son muy pequeñas",
      "Mantener el suelo húmedo durante la germinación",
      "Ralear para permitir el desarrollo adecuado de las raíces",
    ],
  },
]

export default function NuevoCultivo() {
  const [busqueda, setBusqueda] = useState("")
  const [cultivoSeleccionado, setCultivoSeleccionado] = useState<string | null>(null)

  const cultivosFiltrados = cultivos.filter((cultivo) => cultivo.nombre.toLowerCase().includes(busqueda.toLowerCase()))

  const cultivoDetalle = cultivos.find((cultivo) => cultivo.id === cultivoSeleccionado)

  return (
    <main className="flex min-h-screen flex-col items-center bg-primary-light p-4">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        {/* Header */}
        <AppHeader />

        {/* Back button and title */}
        <div className="w-full flex items-center gap-3 mb-2">
          <Link
            href="/agricultura"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/50 transition-colors"
          >
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bebas tracking-wider">Nuevo Cultivo</h1>
        </div>

        {/* Search bar */}
        <div className="w-full relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar cultivo..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7ed957]"
          />
        </div>

        {/* Cultivos grid or detail view */}
        {!cultivoSeleccionado ? (
          <div className="w-full grid grid-cols-2 gap-3">
            {cultivosFiltrados.map((cultivo) => (
              <motion.div
                key={cultivo.id}
                className="bg-white rounded-xl p-4 shadow-sm cursor-pointer"
                whileHover={{ scale: 1.03, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                onClick={() => setCultivoSeleccionado(cultivo.id)}
              >
                <div className="text-4xl mb-2">{cultivo.imagen}</div>
                <h3 className="font-medium">{cultivo.nombre}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                  <Clock size={14} />
                  {cultivo.duracion}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="w-full bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-5xl mb-2">{cultivoDetalle?.imagen}</div>
                <h2 className="text-2xl font-bold">{cultivoDetalle?.nombre}</h2>
              </div>
              <button onClick={() => setCultivoSeleccionado(null)} className="p-2 rounded-full hover:bg-gray-100">
                <ArrowLeft size={20} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <Clock className="text-[#7ed957] mt-0.5 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium">Duración del ciclo</h4>
                  <p className="text-sm text-gray-600">{cultivoDetalle?.duracion}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <ThermometerSun className="text-[#7ed957] mt-0.5 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium">Clima óptimo</h4>
                  <p className="text-sm text-gray-600">{cultivoDetalle?.clima}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <Mountain className="text-[#7ed957] mt-0.5 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium">Tipo de tierra</h4>
                  <p className="text-sm text-gray-600">{cultivoDetalle?.tierra}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <Droplets className="text-[#7ed957] mt-0.5 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium">Requerimiento de agua</h4>
                  <p className="text-sm text-gray-600">{cultivoDetalle?.agua}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <Info className="text-[#7ed957] mt-0.5 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium">Descripción</h4>
                  <p className="text-sm text-gray-600">{cultivoDetalle?.descripcion}</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Consejos de cultivo</h3>
              <ul className="space-y-2">
                {cultivoDetalle?.consejos.map((consejo, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <span className="text-[#7ed957] font-bold">•</span>
                    <span>{consejo}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href={`/agricultura/agregar/${cultivoDetalle?.id}`}>
              <button className="w-full py-3 bg-[#7ed957] rounded-full text-center font-medium shadow-sm hover:bg-[#6bc348] transition-colors">
                Agregar {cultivoDetalle?.nombre}
              </button>
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}

