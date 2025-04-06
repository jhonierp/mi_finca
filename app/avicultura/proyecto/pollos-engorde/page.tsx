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
  Scale,
  Thermometer,
  Utensils,
} from "lucide-react"
import { AppHeader } from "@/components/app-header"

// Datos de ejemplo para el proyecto de pollos de engorde
const proyectoData = {
  nombre: "Pollos de engorde",
  imagen: "🐓",
  fechaInicio: "20/03/2024",
  diasActivo: 15,
  diasTotal: 45,
  cantidadInicial: 200,
  cantidadActual: 196,
  mortalidad: 4,
  pesoPromedio: [
    { dia: 1, peso: 0.042 },
    { dia: 7, peso: 0.17 },
    { dia: 14, peso: 0.45 },
    { dia: 15, peso: 0.48 },
  ],
  alimentacion: {
    consumoDiario: "22 kg",
    costoMensual: "$660.000",
    tipoAlimento: "Iniciador (22% proteína)",
  },
  salud: {
    ultimaVacunacion: "22/03/2024",
    proximaVacunacion: "N/A",
    incidencias: [
      { fecha: "21/03/2024", descripcion: "Muerte de 2 pollos por aplastamiento", resuelto: true },
      { fecha: "25/03/2024", descripcion: "Ajuste de temperatura por clima frío", resuelto: true },
      { fecha: "02/04/2024", descripcion: "Muerte de 2 pollos por problemas respiratorios", resuelto: true },
    ],
  },
  finanzas: {
    inversionInicial: "$1.800.000",
    gastosMensuales: "$1.200.000",
    ingresoProyectado: "$3.920.000",
    rentabilidadProyectada: "45%",
  },
}

export default function ProyectoPollosEngorde() {
  const [activeTab, setActiveTab] = useState("crecimiento")

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
          <h1 className="text-2xl font-bebas tracking-wider">Pollos de Engorde</h1>
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
                  Día {proyectoData.diasActivo} de {proyectoData.diasTotal}
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
              <div className="text-sm text-gray-500">Peso promedio</div>
              <div className="text-xl font-bold">
                {proyectoData.pesoPromedio[proyectoData.pesoPromedio.length - 1].peso.toFixed(3)} kg
              </div>
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <TrendingUp size={12} className="text-green-500" />
                <span>
                  +
                  {(
                    proyectoData.pesoPromedio[proyectoData.pesoPromedio.length - 1].peso -
                    proyectoData.pesoPromedio[proyectoData.pesoPromedio.length - 2].peso
                  ).toFixed(3)}{" "}
                  kg en 24h
                </span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b mb-4">
            <button
              className={`flex-1 py-2 text-sm font-medium ${activeTab === "crecimiento" ? "text-[#57b8d9] border-b-2 border-[#57b8d9]" : "text-gray-500"}`}
              onClick={() => setActiveTab("crecimiento")}
            >
              Crecimiento
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
          {activeTab === "crecimiento" && (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Scale size={18} />
                  Evolución de peso
                </h3>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Curva de crecimiento</span>
                      <span className="text-sm font-medium">
                        {((proyectoData.pesoPromedio[proyectoData.pesoPromedio.length - 1].peso / 2.5) * 100).toFixed(
                          1,
                        )}
                        % del objetivo
                      </span>
                    </div>
                    <div className="flex h-16 items-end gap-1">
                      {proyectoData.pesoPromedio.map((dato, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div
                            className="w-full bg-[#57b8d9] rounded-t-sm"
                            style={{
                              height: `${(dato.peso / 2.5) * 100}%`,
                              opacity: 0.5 + index * 0.1,
                            }}
                          ></div>
                          <div className="text-xs mt-1">Día {dato.dia}</div>
                        </div>
                      ))}
                      {/* Proyección */}
                      <div className="flex-1 flex flex-col items-center">
                        <div className="w-full bg-gray-300 rounded-t-sm" style={{ height: "60%" }}></div>
                        <div className="text-xs mt-1">Día 21</div>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <div className="w-full bg-gray-300 rounded-t-sm" style={{ height: "80%" }}></div>
                        <div className="text-xs mt-1">Día 28</div>
                      </div>
                      <div className="flex-1 flex flex-col items-center">
                        <div className="w-full bg-gray-300 rounded-t-sm" style={{ height: "100%" }}></div>
                        <div className="text-xs mt-1">Día 45</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <div>
                      <div className="text-gray-500">Ganancia diaria</div>
                      <div className="font-medium">32 g/día</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Peso objetivo</div>
                      <div className="font-medium">2.5 kg</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Uniformidad</div>
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
                    <div className="text-sm font-medium">112 g/día</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Tipo de alimento</div>
                    <div className="text-sm font-medium">{proyectoData.alimentacion.tipoAlimento}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Conversión alimenticia</div>
                    <div className="text-sm font-medium">1.6</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Próximo cambio de alimento</div>
                    <div className="text-sm font-medium">Día 21 (Crecimiento)</div>
                  </div>
                </div>
              </div>

              <Link href="/avicultura/registro/peso">
                <button className="w-full py-3 bg-[#57b8d9] rounded-full text-center font-medium shadow-sm hover:bg-[#48a6c4] transition-colors flex items-center justify-center gap-2">
                  <Plus size={18} />
                  Registrar peso
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
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Viabilidad</div>
                    <div className="text-sm font-medium">
                      {(100 - (proyectoData.mortalidad / proyectoData.cantidadInicial) * 100).toFixed(1)}%
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
                    <div className="text-sm text-gray-500">Temperatura actual</div>
                    <div className="text-sm font-medium">28°C</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Humedad relativa</div>
                    <div className="text-sm font-medium">60%</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Calidad de la cama</div>
                    <div className="text-sm font-medium">Buena</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Densidad actual</div>
                    <div className="text-sm font-medium">9.8 aves/m²</div>
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
                  Proyección financiera
                </h3>
                <div className="bg-gray-50 p-3 rounded-lg space-y-3">
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Inversión inicial</div>
                    <div className="text-sm font-medium">{proyectoData.finanzas.inversionInicial}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Costo total proyectado</div>
                    <div className="text-sm font-medium">{proyectoData.finanzas.gastosMensuales}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Ingreso proyectado</div>
                    <div className="text-sm font-medium">{proyectoData.finanzas.ingresoProyectado}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Ganancia estimada</div>
                    <div className="text-sm font-medium">$2.720.000</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Desglose de costos</h3>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="space-y-3 mb-3">
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-500">Pollitos</div>
                      <div className="text-sm font-medium">$400.000</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-500">Alimentación</div>
                      <div className="text-sm font-medium">$660.000</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-500">Medicamentos</div>
                      <div className="text-sm font-medium">$60.000</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-500">Servicios</div>
                      <div className="text-sm font-medium">$80.000</div>
                    </div>
                  </div>

                  <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="flex h-full">
                      <div className="bg-[#d9c957] h-full" style={{ width: "33%" }}></div>
                      <div className="bg-[#57b8d9] h-full" style={{ width: "55%" }}></div>
                      <div className="bg-[#57d9a2] h-full" style={{ width: "5%" }}></div>
                      <div className="bg-[#d957b8] h-full" style={{ width: "7%" }}></div>
                    </div>
                  </div>
                  <div className="flex text-xs mt-2 flex-wrap gap-y-1">
                    <div className="flex items-center gap-1 mr-3">
                      <div className="w-2 h-2 bg-[#d9c957] rounded-full"></div>
                      <span>Pollitos</span>
                    </div>
                    <div className="flex items-center gap-1 mr-3">
                      <div className="w-2 h-2 bg-[#57b8d9] rounded-full"></div>
                      <span>Alimentación</span>
                    </div>
                    <div className="flex items-center gap-1 mr-3">
                      <div className="w-2 h-2 bg-[#57d9a2] rounded-full"></div>
                      <span>Medicamentos</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-[#d957b8] rounded-full"></div>
                      <span>Servicios</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Indicadores económicos</h3>
                <div className="bg-gray-50 p-3 rounded-lg space-y-3">
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Costo por kg producido</div>
                    <div className="text-sm font-medium">$2.450</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Precio de venta por kg</div>
                    <div className="text-sm font-medium">$8.000</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Margen por kg</div>
                    <div className="text-sm font-medium">$5.550</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Rentabilidad proyectada</div>
                    <div className="text-sm font-medium">{proyectoData.finanzas.rentabilidadProyectada}</div>
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

