"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, AlertCircle, Check } from "lucide-react"
import { AppHeader } from "@/components/app-header"

// Datos de ejemplo para los proyectos avícolas
const proyectos = {
  "gallinas-ponedoras": {
    nombre: "Gallinas Ponedoras",
    imagen: "🐔",
    densidad: 5, // aves por m²
    minimo: 10, // mínimo de aves recomendado
    alimentacion: {
      diaria: "110-120 g por ave/día",
      tipo: "Alimento balanceado con 16-18% de proteína",
      frecuencia: "2-3 veces al día",
    },
    instalaciones: [
      "Galpón con buena ventilación y protección contra depredadores",
      "Nidos: 1 por cada 4-5 gallinas (30x30x30 cm)",
      "Perchas: 15-20 cm por ave a 40-50 cm del suelo",
      "Comederos: 10-12 cm lineales por ave",
      "Bebederos: 1 bebedero tipo campana por cada 25 aves",
    ],
  },
  "pollos-engorde": {
    nombre: "Pollos de Engorde",
    imagen: "🐓",
    densidad: 12, // aves por m²
    minimo: 50, // mínimo de aves recomendado
    alimentacion: {
      diaria: "Varía según la edad: 10-50 g por ave/día (inicio), 50-180 g (finalización)",
      tipo: "Iniciador (0-21 días): 22-24% proteína, Finalizador (22-42 días): 18-20% proteína",
      frecuencia: "Alimentación continua (ad libitum)",
    },
    instalaciones: [
      "Galpón con excelente ventilación y control de temperatura",
      "Cama de viruta o cascarilla de arroz de 5-10 cm de espesor",
      "Comederos: 1 comedero tubular por cada 25-30 aves",
      "Bebederos: 1 bebedero tipo campana por cada 80-100 aves",
      "Calefacción para los primeros 21 días (criadora o bombillas)",
    ],
  },
  pavos: {
    nombre: "Pavos",
    imagen: "🦃",
    densidad: 3, // aves por m²
    minimo: 10, // mínimo de aves recomendado
    alimentacion: {
      diaria: "300-500 g por ave/día (adultos)",
      tipo: "Iniciador (0-6 semanas): 26-28% proteína, Crecimiento (7-14 semanas): 22-24% proteína, Finalizador (15+ semanas): 16-19% proteína",
      frecuencia: "3-4 veces al día",
    },
    instalaciones: [
      "Galpón amplio con buena ventilación y áreas de sombra",
      "Perchas fuertes a 60-70 cm del suelo",
      "Comederos: 15-20 cm lineales por ave",
      "Bebederos: 1 bebedero tipo campana por cada 40-50 aves",
      "Áreas de pastoreo si es posible (3-4 m² adicionales por ave)",
    ],
  },
  codornices: {
    nombre: "Codornices",
    imagen: "🪶",
    densidad: 50, // aves por m²
    minimo: 100, // mínimo de aves recomendado
    alimentacion: {
      diaria: "20-25 g por ave/día",
      tipo: "Alimento balanceado con 20-24% de proteína",
      frecuencia: "2 veces al día",
    },
    instalaciones: [
      "Jaulas en batería o corrales pequeños",
      "Altura mínima de jaula: 20 cm",
      "Comederos: 2-3 cm lineales por ave",
      "Bebederos: tipo nipple, 1 por cada 5-10 aves",
      "Bandeja recolectora de huevos con ligera inclinación",
    ],
  },
  patos: {
    nombre: "Patos",
    imagen: "🦆",
    densidad: 4, // aves por m²
    minimo: 10, // mínimo de aves recomendado
    alimentacion: {
      diaria: "150-200 g por ave/día",
      tipo: "Iniciador (0-2 semanas): 20-22% proteína, Crecimiento (3-7 semanas): 16-18% proteína",
      frecuencia: "2-3 veces al día",
    },
    instalaciones: [
      "Galpón con acceso a área exterior",
      "Piscina o recipiente con agua para baño (no indispensable pero recomendado)",
      "Cama seca de paja o viruta",
      "Comederos: 10-15 cm lineales por ave",
      "Bebederos: profundos para sumergir el pico",
    ],
  },
  gansos: {
    nombre: "Gansos",
    imagen: "🪿",
    densidad: 2, // aves por m²
    minimo: 5, // mínimo de aves recomendado
    alimentacion: {
      diaria: "300-350 g por ave/día",
      tipo: "Pueden alimentarse principalmente de pasto si tienen acceso a pastoreo. Suplementar con granos y alimento con 16-18% de proteína",
      frecuencia: "2 veces al día",
    },
    instalaciones: [
      "Galpón amplio con acceso a área de pastoreo",
      "Área de pastoreo: 10-15 m² por ave",
      "Refugio simple contra lluvia y sol",
      "Comederos: 15-20 cm lineales por ave",
      "Bebederos: profundos y amplios",
    ],
  },
}

export default function ConfigurarProyecto({ params }: { params: { proyecto: string } }) {
  const router = useRouter()
  const proyectoId = params.proyecto
  const proyectoInfo = proyectos[proyectoId as keyof typeof proyectos]

  const [formData, setFormData] = useState({
    cantidadAves: "",
    espacioDisponible: "",
    tieneGalpon: "no",
    fechaInicio: "",
  })

  const [viabilidad, setViabilidad] = useState<{
    esViable: boolean
    mensaje: string
    capacidadMaxima: number
    espacioRequerido: number
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    // Calcular viabilidad cuando cambian los valores
    if (formData.cantidadAves && formData.espacioDisponible) {
      const cantidadAves = Number.parseInt(formData.cantidadAves)
      const espacioDisponible = Number.parseInt(formData.espacioDisponible)
      const densidad = proyectoInfo.densidad

      const capacidadMaxima = Math.floor(espacioDisponible * densidad)
      const espacioRequerido = Math.ceil(cantidadAves / densidad)

      setViabilidad({
        esViable: cantidadAves <= capacidadMaxima,
        mensaje:
          cantidadAves <= capacidadMaxima
            ? `El espacio es suficiente para ${cantidadAves} aves.`
            : `El espacio es insuficiente. Reduzca la cantidad de aves o aumente el espacio.`,
        capacidadMaxima,
        espacioRequerido,
      })
    } else {
      setViabilidad(null)
    }
  }, [formData.cantidadAves, formData.espacioDisponible, proyectoInfo])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar el proyecto
    console.log("Datos del proyecto:", { proyecto: proyectoId, ...formData })
    // Redirigir al dashboard de avicultura
    router.push("/avicultura")
  }

  if (!proyectoInfo) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-primary-light p-4">
        <div className="w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Proyecto no encontrado</h1>
          <Link href="/avicultura/nuevo-proyecto" className="text-[#57b8d9] hover:underline">
            Volver a selección de proyectos
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
            href="/avicultura/nuevo-proyecto"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/50 transition-colors"
          >
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bebas tracking-wider">Configurar {proyectoInfo.nombre}</h1>
        </div>

        {/* Form */}
        <div className="w-full bg-white rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">{proyectoInfo.imagen}</div>
            <h2 className="text-xl font-bold">{proyectoInfo.nombre}</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="cantidadAves" className="block text-sm font-medium">
                Cantidad de aves
              </label>
              <input
                id="cantidadAves"
                name="cantidadAves"
                type="number"
                min={proyectoInfo.minimo}
                required
                value={formData.cantidadAves}
                onChange={handleChange}
                placeholder={`Mínimo recomendado: ${proyectoInfo.minimo}`}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#57b8d9]"
              />
              <p className="text-xs text-gray-500">Cantidad mínima recomendada: {proyectoInfo.minimo} aves</p>
            </div>

            <div className="space-y-2">
              <label htmlFor="espacioDisponible" className="block text-sm font-medium">
                Espacio disponible (m²)
              </label>
              <input
                id="espacioDisponible"
                name="espacioDisponible"
                type="number"
                required
                value={formData.espacioDisponible}
                onChange={handleChange}
                placeholder="Ej: 20"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#57b8d9]"
              />
              <p className="text-xs text-gray-500">Densidad recomendada: {proyectoInfo.densidad} aves por m²</p>
            </div>

            {viabilidad && (
              <div className={`p-3 rounded-lg ${viabilidad.esViable ? "bg-green-50" : "bg-red-50"}`}>
                <div className="flex items-start gap-2">
                  {viabilidad.esViable ? (
                    <Check className="text-green-500 mt-0.5 shrink-0" size={18} />
                  ) : (
                    <AlertCircle className="text-red-500 mt-0.5 shrink-0" size={18} />
                  )}
                  <div>
                    <p className={`text-sm ${viabilidad.esViable ? "text-green-700" : "text-red-700"}`}>
                      {viabilidad.mensaje}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Capacidad máxima para este espacio: {viabilidad.capacidadMaxima} aves
                    </p>
                    <p className="text-xs text-gray-500">
                      Espacio requerido para {formData.cantidadAves} aves: {viabilidad.espacioRequerido} m²
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="tieneGalpon" className="block text-sm font-medium">
                ¿Ya cuenta con galpón/instalaciones?
              </label>
              <select
                id="tieneGalpon"
                name="tieneGalpon"
                value={formData.tieneGalpon}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#57b8d9]"
              >
                <option value="no">No, necesito construirlo</option>
                <option value="parcial">Parcialmente, necesito adaptarlo</option>
                <option value="si">Sí, ya tengo instalaciones adecuadas</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="fechaInicio" className="block text-sm font-medium">
                Fecha de inicio
              </label>
              <input
                id="fechaInicio"
                name="fechaInicio"
                type="date"
                required
                value={formData.fechaInicio}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#57b8d9]"
              />
            </div>

            {/* Información de alimentación */}
            <div className="mt-6">
              <h3 className="font-medium mb-2">Alimentación recomendada</h3>
              <div className="bg-gray-50 p-3 rounded-lg space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Cantidad diaria:</span> {proyectoInfo.alimentacion.diaria}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Tipo de alimento:</span> {proyectoInfo.alimentacion.tipo}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Frecuencia:</span> {proyectoInfo.alimentacion.frecuencia}
                </p>
              </div>
            </div>

            {/* Información de instalaciones */}
            <div className="mt-2">
              <h3 className="font-medium mb-2">Requerimientos de instalaciones</h3>
              <div className="bg-gray-50 p-3 rounded-lg">
                <ul className="space-y-2">
                  {proyectoInfo.instalaciones.map((item, index) => (
                    <li key={index} className="text-sm flex items-start gap-2">
                      <span className="text-[#57b8d9] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 flex gap-3">
              <Link
                href="/avicultura/nuevo-proyecto"
                className="flex-1 py-3 bg-gray-100 rounded-full text-center font-medium hover:bg-gray-200 transition-colors"
              >
                Cancelar
              </Link>
              <button
                type="submit"
                className="flex-1 py-3 bg-[#57b8d9] rounded-full text-center font-medium shadow-sm hover:bg-[#48a6c4] transition-colors"
                disabled={viabilidad && !viabilidad.esViable}
              >
                Iniciar proyecto
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

