import type React from "react"
import Link from "next/link"
import { AppHeader } from "@/components/app-header"
import { GanaderiaIcon, PorciculturaIcon, ForestalIcon } from "@/components/category-icons"

export default function Profile() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-primary-light p-4">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        {/* Header */}
        <AppHeader />

        {/* User profile card */}
        <div className="w-full bg-gray-300 rounded-3xl p-6">
          <h2 className="text-3xl font-bold mb-8">user 4312</h2>

          <div className="grid grid-cols-2 gap-4 w-full mb-8">
            <CategoryCard title="ganadería" icon={<GanaderiaIcon />} href="/ganaderia" />
            <CategoryCard title="porcicultura" icon={<PorciculturaIcon />} href="/porcicultura" />
            <CategoryCard title="forestal" icon={<ForestalIcon />} href="/forestal" />
          </div>

          <Link href="/" className="text-2xl font-medium">
            singout
          </Link>
        </div>
      </div>
    </main>
  )
}

function CategoryCard({
  title,
  icon,
  href,
}: {
  title: string
  icon: React.ReactNode
  href: string
}) {
  return (
    <Link
      href={href}
      className="bg-primary-button rounded-3xl flex flex-col items-center justify-center p-6 aspect-square"
    >
      <div className="mb-2 h-16 flex items-center justify-center">{icon}</div>
      <span className="text-xl font-medium">{title}</span>
    </Link>
  )
}

