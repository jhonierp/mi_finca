import Link from "next/link"
import { HouseIcon } from "@/components/icons"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-primary-light p-4">
      <div className="w-full max-w-md flex flex-col items-center justify-center gap-8 py-12">
        <div className="w-full max-w-xs">
          <div className="border-b-2 border-primary-dark pb-4">
            <HouseIcon className="w-full h-auto" />
          </div>

          <h1 className="text-7xl font-bebas text-center mt-4 tracking-wider">TU FINCA</h1>
        </div>

        <div className="w-full max-w-xs mt-auto flex flex-col gap-4">
          <Link
            href="/dashboard"
            className="w-full py-4 bg-primary-button rounded-full text-center text-xl font-medium"
          >
            iniciar sesión
          </Link>

          <Link
            href="/register"
            className="w-full py-4 bg-primary-dark rounded-full text-center text-xl font-medium text-white uppercase"
          >
            REGISTRATE
          </Link>
        </div>
      </div>
    </main>
  )
}

