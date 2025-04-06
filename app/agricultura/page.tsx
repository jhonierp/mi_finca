import Link from "next/link"
import { CategoryLayout } from "@/components/category-layout"
import { AgriculturaIcon } from "@/components/category-icons"

export default function Agricultura() {
  return (
    <CategoryLayout
      title="agricultura"
      description="Gestión de cultivos y producción agrícola"
      color="bg-[#7ed957]"
      icon={<AgriculturaIcon />}
    >
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-medium mb-2">Cultivos Activos</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Maíz</span>
              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">En crecimiento</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Trigo</span>
              <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Próximo a cosechar</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Frijol</span>
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Recién plantado</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-medium mb-2">Próximas Actividades</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Fertilización</span>
              <span className="text-sm text-gray-500">En 2 días</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Fumigación</span>
              <span className="text-sm text-gray-500">En 5 días</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Cosecha</span>
              <span className="text-sm text-gray-500">En 2 semanas</span>
            </div>
          </div>
        </div>

        <Link href="/agricultura/nuevo-cultivo" className="block w-full">
          <button className="w-full py-3 bg-[#7ed957] rounded-full text-center font-medium shadow-sm hover:bg-[#6bc348] transition-colors">
            Agregar nuevo cultivo
          </button>
        </Link>
      </div>
    </CategoryLayout>
  )
}

