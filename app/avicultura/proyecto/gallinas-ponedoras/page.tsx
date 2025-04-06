"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Plus,
  FileText,
  Egg,
  Thermometer,
  Utensils,
} from "lucide-react"
import { AppHeader } from "@/components/app-header"

// Datos de ejemplo para el proyecto de gallinas ponedoras
const proyectoData = {
  nombre: "Gallinas ponedoras",
  imagen: "🐔",
  fechaInicio: "15/01/2024",
  diasActivo: 80,
  cantidadInicial: 150,
  cantidadActual: 147,
  mortalidad: 2,
  produccionDiaria: [
    { fecha: "28/03/2024", cantidad: 118 },
    { fecha: "29/03/2024", cantidad: 120 },
    { fecha: "30/03/2024", cantidad: 119 },
    { fecha: "31/03/2024", cantidad: 122 },
    { fecha: "01/04/2024", cantidad: 120 },
    { fecha: "02/04/2024", cantidad: 121 },
    { fecha: "03/04/2024", cantidad: 120 },
  ],
  alimentacion: {
    consumoDiario: "17.5 kg",
    costoMensual: "$525.000",
    tipoAlimento: "Ponedora Fase 1 (18% proteína)",
  },
  salud: {
    ultimaVacunacion: "15/02/2024",
    proximaVacunacion: "15/05/2024",
    incidencias: [
      { fecha: "10/02/2024", descripcion: "Muerte de 2 aves por estrés de transporte", resuelto: true },
      { fecha: "25/02/2024", descripcion: "Disminución leve de consumo de alimento", resuelto: true },
      { fecha: "15/03/2024", descripcion: "Inicio de postura", resuelto: true },
    ],
  },
  finanzas: {
    inversionInicial: "$2.250.000",
    gastosMensuales: "$650.000",
    ingresosMensuales: "$1.080.000",
    rentabilidadActual: "66%",
  },
}

export default function ProyectoGallinasPonedoras() {
  const [activeTab, setActiveTab] = useState("produccion")

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
          <h1 className="text-2xl font-bebas tracking-wider">Gallinas Ponedoras</h1>
        </div>

        {/* Project overview card */}
        <div className="w-full bg-white rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-4xl">{proyectoData.imagen}</div>
            <div>
              <h2 className="text-xl font-bold">{proyectoData.nombre}</h2>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar size={14} />
                <span>
                  Inicio: {proyectoData.fechaInicio} ({proyectoData.diasActivo} días)
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-gray-500">Aves actuales</div>
              <div className="text-xl font-bold">{proyectoData.cantidadActual}</div>
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <TrendingDown size={12} className="text-red-500" />
                <span>-{proyectoData.mortalidad} desde inicio</span>
              </div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-gray-500">Producción actual</div>
              <div className="text-xl font-bold">
                {proyectoData.produccionDiaria[proyectoData.produccionDiaria.length - 1].cantidad} huevos/día
              </div>
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <TrendingUp size={12} className="text-green-500" />
                <span>81% de capacidad</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b mb-4">
            <button
              className={`flex-1 py-2 text-sm font-medium ${activeTab === "produccion" ? "text-[#57b8d9] border-b-2 border-[#57b8d9]" : "text-gray-500"}`}
              onClick={() => setActiveTab("produccion")}
            >
              Producción
            </button>
            <button
              className={`flex-1 py-2 text-sm font-medium ${activeTab === "salud" ? "text-[#57b8d9] border-b-2 border-[#57b8d9]" : "text-gray-500"}`}
              onClick={() => setActiveTab("salud")}
            >
              Salud
            </button>
            <button
              className={`flex-1 py-2 text-sm font-medium ${activeTab === "finanzas" ? "text-[#57b8d9] border-b-2 border-[#57b8d9]" : "text-gray-500"}`}
              onClick={() => setActiveTab("finanzas")}
            >
              Finanzas
            </button>
          </div>

          {/* Tab content */}
          {activeTab === "produccion" && (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Egg size={18} />
                  Producción de huevos
                </h3>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Últimos 7 días</span>
                      <span className="text-sm font-medium">120 huevos/día (promedio)</span>
                    </div>
                    <div className="flex h-16 items-end gap-1">
                      {proyectoData.produccionDiaria.map((dia, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div
                            className="w-full bg-[#57b8d9] rounded-t-sm"
                            style={{
                              height: `${(dia.cantidad / 150) * 100}%`,
                              opacity: 0.5 + index * 0.07,
                            }}
                          ></div>
                          <div className="text-xs mt-1">{dia.fecha.split("/")[0]}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <div>
                      <div className="text-gray-500">Tasa de postura</div>
                      <div className="font-medium">81%</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Huevos/ave/semana</div>
                      <div className="font-medium">5.7</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Calidad A</div>
                      <div className="font-medium">92%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Utensils size={18} />
                  Alimentación
                </h3>
                <div className="bg-gray-50 p-3 rounded-lg space-y-3">
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Consumo diario</div>
                    <div className="text-sm font-medium">{proyectoData.alimentacion.consumoDiario}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Consumo por ave</div>
                    <div className="text-sm font-medium">119 g/día</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Tipo de alimento</div>
                    <div className="text-sm font-medium">{proyectoData.alimentacion.tipoAlimento}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Conversión alimenticia</div>
                    <div className="text-sm font-medium">2.1 kg/docena</div>
                  </div>
                </div>
              </div>

              <Link href="/avicultura/registro/produccion">
                <button className="w-full py-3 bg-[#57b8d9] rounded-full text-center font-medium shadow-sm hover:bg-[#48a6c4] transition-colors flex items-center justify-center gap-2">
                  <Plus size={18} />
                  Registrar producción
                </button>
              </Link>
            </div>
          )}

          {activeTab === "salud" && (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <AlertCircle size={18} />
                  Estado sanitario
                </h3>
                <div className="bg-gray-50 p-3 rounded-lg space-y-3">
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Última vacunación</div>
                    <div className="text-sm font-medium">{proyectoData.salud.ultimaVacunacion}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Próxima vacunación</div>
                    <div className="text-sm font-medium">{proyectoData.salud.proximaVacunacion}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Mortalidad acumulada</div>
                    <div className="text-sm font-medium">
                      {((proyectoData.mortalidad / proyectoData.cantidadInicial) * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Thermometer size={18} />
                  Condiciones ambientales
                </h3>
                <div className="bg-gray-50 p-3 rounded-lg space-y-3">
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Temperatura promedio</div>
                    <div className="text-sm font-medium">22°C</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Humedad relativa</div>
                    <div className="text-sm font-medium">65%</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Ventilación</div>
                    <div className="text-sm font-medium">Adecuada</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Incidencias registradas</h3>
                <div className="space-y-2">
                  {proyectoData.salud.incidencias.map((incidencia, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div className="text-sm font-medium">{incidencia.fecha}</div>
                        <div
                          className={`text-xs px-2 py-0.5 rounded-full ${incidencia.resuelto ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                        >
                          {incidencia.resuelto ? "Resuelto" : "Pendiente"}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{incidencia.descripcion}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/avicultura/registro/salud">
                <button className="w-full py-3 bg-[#57b8d9] rounded-full text-center font-medium shadow-sm hover:bg-[#48a6c4] transition-colors flex items-center justify-center gap-2">
                  <Plus size={18} />
                  Registrar incidencia
                </button>
              </Link>
            </div>
          )}

          {activeTab === "finanzas" && (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <TrendingUp size={18} />
                  Resumen financiero
                </h3>
                <div className="bg-gray-50 p-3 rounded-lg space-y-3">
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Inversión inicial</div>
                    <div className="text-sm font-medium">{proyectoData.finanzas.inversionInicial}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Gastos mensuales</div>
                    <div className="text-sm font-medium">{proyectoData.finanzas.gastosMensuales}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Ingresos mensuales</div>
                    <div className="text-sm font-medium">{proyectoData.finanzas.ingresosMensuales}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Rentabilidad actual</div>
                    <div className="text-sm font-medium">{proyectoData.finanzas.rentabilidadActual}</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Desglose de gastos mensuales</h3>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="space-y-3 mb-3">
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-500">Alimentación</div>
                      <div className="text-sm font-medium">{proyectoData.alimentacion.costoMensual}</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-500">Medicamentos</div>
                      <div className="text-sm font-medium">$45.000</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-500">Mano de obra</div>
                      <div className="text-sm font-medium">$80.000</div>
                    </div>
                  </div>

                  <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="flex h-full">
                      <div className="bg-[#57b8d9] h-full" style={{ width: "80%" }}></div>
                      <div className="bg-[#57d9a2] h-full" style={{ width: "7%" }}></div>
                      <div className="bg-[#d957b8] h-full" style={{ width: "13%" }}></div>
                    </div>
                  </div>
                  <div className="flex text-xs mt-2 justify-between">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-[#57b8d9] rounded-full"></div>
                      <span>Alimentación</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-[#57d9a2] rounded-full"></div>
                      <span>Medicamentos</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-[#d957b8] rounded-full"></div>
                      <span>Mano de obra</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Proyección financiera</h3>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <div className="text-sm text-gray-500">Retorno de inversión estimado</div>
                    <div className="text-sm font-medium">5.5 meses</div>
                  </div>
                  <div className="flex justify-between mb-2">
                    <div className="text-sm text-gray-500">Ganancia proyectada (12 meses)</div>
                    <div className="text-sm font-medium">$5.160.000</div>
                  </div>

                  <div className="h-16 flex items-end gap-1 mt-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((mes) => (
                      <div key={mes} className="flex-1 flex flex-col items-center">
                        <div
                          className={`w-full rounded-t-sm ${mes <= 5 ? "bg-red-400" : "bg-green-400"}`}
                          style={{
                            height: `${mes <= 5 ? 40 + (mes * 10) : 60 + ((mes - 5) * 5)}%`,
                          }}
                        ></div>
                        <div className="text-xs mt-1">{mes}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Mes</span>
                    <span>Punto de equilibrio: mes 5</span>
                  </div>
                </div>
              </div>

              <Link href="/avicultura/registro/finanzas">
                <button className="w-full py-3 bg-[#57b8d9] rounded-full text-center font-medium shadow-sm hover:bg-[#48a6c4] transition-colors flex items-center justify-center gap-2">
                  <FileText size={18} />
                  Ver informe completo
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

