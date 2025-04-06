"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download, Calendar, TrendingUp, TrendingDown, PieChart } from "lucide-react"
import { AppHeader } from "@/components/app-header"

// Datos de ejemplo para el informe de rentabilidad
const datosRentabilidad = {
  periodoActual: "Abril 2024",
  resumen: {
    ingresosTotales: "$5.280.000",
    gastosTotales: "$3.150.000",
    gananciaTotal: "$2.130.000",
    rentabilidad: "40.3%",
    tendencia: "+5.2%",
  },
  proyectos: [
    {
      nombre: "Gallinas Ponedoras",
      icono: "🐔",
      ingresos: "$1.080.000",
      gastos: "$650.000",
      ganancia: "$430.000",
      rentabilidad: "39.8%",
      tendencia: "+2.3%",
    },
    {
      nombre: "Pollos de Engorde",
      icono: "🐓",
      ingresos: "$0",
      gastos: "$800.000",
      ganancia: "-$800.000",
      rentabilidad: "-100%",
      tendencia: "N/A",
    },
    {
      nombre: "Cultivo de Maíz",
      icono: "🌽",
      ingresos: "$1.200.000",
      gastos: "$450.000",
      ganancia: "$750.000",
      rentabilidad: "62.5%",
      tendencia: "+8.1%",
    },
    {
      nombre: "Vacas Lecheras",
      icono: "🐄",
      ingresos: "$2.400.000",
      gastos: "$1.100.000",
      ganancia: "$1.300.000",
      rentabilidad: "54.2%",
      tendencia: "+3.7%",
    },
    {
      nombre: "Estanque de Tilapia",
      icono: "🐟",
      ingresos: "$600.000",
      gastos: "$150.000",
      ganancia: "$450.000",
      rentabilidad: "75.0%",
      tendencia: "+12.5%",
    },
  ],
  historico: [
    { mes: "Nov", ingresos: 3800000, gastos: 2500000 },
    { mes: "Dic", ingresos: 4200000, gastos: 2700000 },
    { mes: "Ene", ingresos: 4500000, gastos: 2800000 },
    { mes: "Feb", ingresos: 4800000, gastos: 2900000 },
    { mes: "Mar", ingresos: 5100000, gastos: 3050000 },
    { mes: "Abr", ingresos: 5280000, gastos: 3150000 },
  ],
}

export default function Rentabilidad() {
  const [periodoSeleccionado, setPeriodoSeleccionado] = useState(datosRentabilidad.periodoActual)

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
          <h1 className="text-2xl font-bebas tracking-wider">Informe de Rentabilidad</h1>
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
          <button className="flex items-center gap-1 text-sm text-primary-dark font-medium">
            <Download size={16} />
            <span>Exportar</span>
          </button>
        </div>

        {/* Summary card */}
        <div className="w-full bg-white rounded-xl p-5 shadow-sm">
          <h2 className="text-lg font-medium mb-4">Resumen del periodo</h2>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-sm text-gray-600">Ingresos totales</div>
              <div className="text-xl font-bold text-green-700">{datosRentabilidad.resumen.ingresosTotales}</div>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <div className="text-sm text-gray-600">Gastos totales</div>
              <div className="text-xl font-bold text-red-700">{datosRentabilidad.resumen.gastosTotales}</div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-600">Ganancia neta</div>
                <div className="text-2xl font-bold text-blue-700">{datosRentabilidad.resumen.gananciaTotal}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Rentabilidad</div>
                <div className="text-xl font-bold text-blue-700 flex items-center gap-1">
                  {datosRentabilidad.resumen.rentabilidad}
                  <TrendingUp size={16} className="text-green-500" />
                </div>
                <div className="text-xs text-green-600">{datosRentabilidad.resumen.tendencia} vs. mes anterior</div>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-sm">Evolución de ingresos y gastos</h3>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="h-40 flex items-end gap-1">
                {datosRentabilidad.historico.map((dato, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="w-full flex flex-col items-center">
                      <div
                        className="w-full bg-green-400 rounded-t-sm"
                        style={{
                          height: `${(dato.ingresos / 6000000) * 100}%`,
                        }}
                      ></div>
                      <div
                        className="w-full bg-red-400 rounded-t-sm mt-0.5"
                        style={{
                          height: `${(dato.gastos / 6000000) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <div className="text-xs mt-1">{dato.mes}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-2 gap-4">
                <div className="flex items-center gap-1 text-xs">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Ingresos</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Gastos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Distribution chart */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-sm">Distribución de ingresos</h3>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-center mb-3">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" fill="transparent" stroke="#f0f0f0" strokeWidth="10" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="transparent"
                      stroke="#57b8d9"
                      strokeWidth="10"
                      strokeDasharray="282.6"
                      strokeDashoffset="240"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="transparent"
                      stroke="#7ed957"
                      strokeWidth="10"
                      strokeDasharray="282.6"
                      strokeDashoffset="170"
                      transform="rotate(-90 50 50)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="transparent"
                      stroke="#57d9a2"
                      strokeWidth="10"
                      strokeDasharray="282.6"
                      strokeDashoffset="100"
                      transform="rotate(-180 50 50)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="transparent"
                      stroke="#5768d9"
                      strokeWidth="10"
                      strokeDasharray="282.6"
                      strokeDashoffset="270"
                      transform="rotate(-270 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PieChart size={24} className="text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-1 text-xs">
                  <div className="w-2 h-2 bg-[#57b8d9] rounded-full"></div>
                  <span>Avicultura (20%)</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <div className="w-2 h-2 bg-[#7ed957] rounded-full"></div>
                  <span>Agricultura (23%)</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <div className="w-2 h-2 bg-[#57d9a2] rounded-full"></div>
                  <span>Ganadería (45%)</span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <div className="w-2 h-2 bg-[#5768d9] rounded-full"></div>
                  <span>Piscicultura (12%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Projects breakdown */}
          <div>
            <h3 className="font-medium mb-3">Rentabilidad por proyecto</h3>
            <div className="space-y-2">
              {datosRentabilidad.proyectos.map((proyecto, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-xl">{proyecto.icono}</div>
                    <div className="font-medium">{proyecto.nombre}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <div className="text-gray-500">Ingresos</div>
                      <div className="font-medium text-green-600">{proyecto.ingresos}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Gastos</div>
                      <div className="font-medium text-red-600">{proyecto.gastos}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Ganancia</div>
                      <div
                        className={`font-medium ${proyecto.ganancia.startsWith("-") ? "text-red-600" : "text-blue-600"}`}
                      >
                        {proyecto.ganancia}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="text-sm">
                      <span className="text-gray-500">Rentabilidad:</span>
                      <span
                        className={`ml-1 font-medium ${proyecto.rentabilidad.startsWith("-") ? "text-red-600" : "text-blue-600"}`}
                      >
                        {proyecto.rentabilidad}
                      </span>
                    </div>
                    <div className="text-xs flex items-center gap-1">
                      {proyecto.tendencia !== "N/A" ? (
                        <>
                          {proyecto.tendencia.startsWith("+") ? (
                            <TrendingUp size={12} className="text-green-500" />
                          ) : (
                            <TrendingDown size={12} className="text-red-500" />
                          )}
                          <span className={proyecto.tendencia.startsWith("+") ? "text-green-600" : "text-red-600"}>
                            {proyecto.tendencia}
                          </span>
                        </>
                      ) : (
                        <span className="text-gray-500">N/A</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download full report button */}
        <button className="w-full py-3 bg-primary-dark text-white rounded-full text-center font-medium shadow-sm hover:bg-primary-darkest transition-colors flex items-center justify-center gap-2">
          <Download size={18} />
          Descargar informe completo
        </button>
      </div>
    </main>
  )
}

