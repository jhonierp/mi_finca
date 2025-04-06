"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Menu,
  X,
  LogOut,
  User,
  Settings,
  Home,
  HelpCircle,
  Leaf,
  FileText,
  Bell,
  MessageSquare,
  BarChart2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { HouseLogoSmall } from "@/components/icons"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setIsOpen(false)} />}

      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary-button/50 transition-colors"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-72 bg-white z-50 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-primary-light">
            <div className="flex items-center gap-2">
              <HouseLogoSmall className="h-8 w-auto" />
              <h2 className="text-xl font-bebas tracking-wider">TU FINCA</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-primary-button/50"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* User info */}
          <div className="p-4 border-b bg-primary-light/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-button flex items-center justify-center">
                <User size={24} />
              </div>
              <div>
                <p className="font-medium">Usuario</p>
                <p className="text-sm text-gray-600">user4312@tufinca.com</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-2">
            <div className="mb-4">
              <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Principal</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-light"
                    onClick={() => setIsOpen(false)}
                  >
                    <Home size={20} className="text-primary-dark" />
                    <span>Inicio</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-light"
                    onClick={() => setIsOpen(false)}
                  >
                    <User size={20} className="text-primary-dark" />
                    <span>Mi Perfil</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/notifications"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-light"
                    onClick={() => setIsOpen(false)}
                  >
                    <Bell size={20} className="text-primary-dark" />
                    <span>Notificaciones</span>
                    <span className="ml-auto bg-primary-button text-xs font-medium px-2 py-1 rounded-full">3</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/messages"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-light"
                    onClick={() => setIsOpen(false)}
                  >
                    <MessageSquare size={20} className="text-primary-dark" />
                    <span>Mensajes</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Mi Finca</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/mis-proyectos"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-light"
                    onClick={() => setIsOpen(false)}
                  >
                    <Leaf size={20} className="text-primary-dark" />
                    <span>Mis Proyectos</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/informes"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-light"
                    onClick={() => setIsOpen(false)}
                  >
                    <FileText size={20} className="text-primary-dark" />
                    <span>Informes</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rentabilidad"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-light"
                    onClick={() => setIsOpen(false)}
                  >
                    <BarChart2 size={20} className="text-primary-dark" />
                    <span>Rentabilidad</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Configuración</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/settings"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-light"
                    onClick={() => setIsOpen(false)}
                  >
                    <Settings size={20} className="text-primary-dark" />
                    <span>Configuración</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary-light"
                    onClick={() => setIsOpen(false)}
                  >
                    <HelpCircle size={20} className="text-primary-dark" />
                    <span>Ayuda y Soporte</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 text-red-600 rounded-lg hover:bg-red-50"
              onClick={() => setIsOpen(false)}
            >
              <LogOut size={20} />
              <span className="font-medium">Cerrar sesión</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

