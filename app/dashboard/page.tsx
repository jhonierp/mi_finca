import { AppHeader } from "@/components/app-header"
import { CategoryCard } from "@/components/category-card"
import {
  AgriculturaIcon,
  GanaderiaIcon,
  AviculturaIcon,
  PorciculturaIcon,
  PisciculturaIcon,
  ForestalIcon,
} from "@/components/category-icons"

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-primary-light p-4">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        {/* Header */}
        <AppHeader />

        {/* Search button */}
        <button className="w-full py-3 bg-accent rounded-full text-center text-xl font-medium mb-2 shadow-sm hover:shadow-md transition-shadow">
          buscar
        </button>

        {/* Category grid */}
        <div className="grid grid-cols-2 gap-4 w-full">
          <CategoryCard
            title="agricultura"
            icon={<AgriculturaIcon />}
            href="/agricultura"
            color="bg-[#7ed957]"
            hoverColor="bg-[#6bc348]"
          />
          <CategoryCard
            title="ganadería"
            icon={<GanaderiaIcon />}
            href="/ganaderia"
            color="bg-[#57d9a2]"
            hoverColor="bg-[#48c48f]"
          />
          <CategoryCard
            title="avicultura"
            icon={<AviculturaIcon />}
            href="/avicultura"
            color="bg-[#57b8d9]"
            hoverColor="bg-[#48a6c4]"
          />
          <CategoryCard
            title="porcicultura"
            icon={<PorciculturaIcon />}
            href="/porcicultura"
            color="bg-[#d957b8]"
            hoverColor="bg-[#c448a6]"
          />
          <CategoryCard
            title="piscicultura"
            icon={<PisciculturaIcon />}
            href="/piscicultura"
            color="bg-[#5768d9]"
            hoverColor="bg-[#4857c4]"
          />
          <CategoryCard
            title="forestal"
            icon={<ForestalIcon />}
            href="/forestal"
            color="bg-[#d9c957]"
            hoverColor="bg-[#c4b548]"
          />
        </div>
      </div>
    </main>
  )
}

