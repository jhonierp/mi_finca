"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import { HouseIcon } from "@/components/icons"

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    tipoFinca: "agricultura",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de registro
    console.log("Datos de registro:", formData)
    // Redirigir al dashboard después del registro
    window.location.href = "/dashboard"
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-primary-light p-4">
      <div className="w-full max-w-md flex flex-col items-center gap-6 py-6">
        {/* Header */}
        <div className="w-full flex items-center justify-between mb-2">
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary-button/50 transition-colors"
          >
            <ArrowLeft size={24} />
          </Link>
          <div className="flex items-center gap-2">
            <HouseIcon className="h-10 w-auto" />
            <h1 className="text-2xl font-bebas tracking-wider">TU FINCA</h1>
          </div>
          <div className="w-10"></div> {/* Spacer for alignment */}
        </div>

        {/* Registration Form */}
        <div className="w-full bg-white rounded-3xl p-6 shadow-md">
          <h2 className="text-2xl font-bebas text-center mb-6 tracking-wider">CREAR CUENTA</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="nombre" className="block text-sm font-medium">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-button"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="apellido" className="block text-sm font-medium">
                  Apellido
                </label>
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  required
                  value={formData.apellido}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-button"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-button"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Contraseña
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-button pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="tipoFinca" className="block text-sm font-medium">
                Tipo de finca
              </label>
              <select
                id="tipoFinca"
                name="tipoFinca"
                value={formData.tipoFinca}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-button"
              >
                <option value="agricultura">Agricultura</option>
                <option value="ganaderia">Ganadería</option>
                <option value="avicultura">Avicultura</option>
                <option value="porcicultura">Porcicultura</option>
                <option value="piscicultura">Piscicultura</option>
                <option value="forestal">Forestal</option>
              </select>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 bg-primary-dark rounded-full text-center text-lg font-medium text-white uppercase"
              >
                Registrarse
              </button>
            </div>

            <p className="text-center text-sm mt-4">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/" className="text-primary-dark font-medium">
                Iniciar sesión
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  )
}

