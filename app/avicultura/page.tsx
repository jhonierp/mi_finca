import Link from "next/link"
import { CategoryLayout } from "@/components/category-layout"
import { AviculturaIcon } from "@/components/category-icons"

export default function Avicultura() {
  return (
    <CategoryLayout
      title="avicultura"
      description="Gestión de aves y producción avícola"
      color="bg-[#57b8d9]"
      icon={<AviculturaIcon />}
    >
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-medium mb-2">Proyectos Activos</h3>
          <div className="space-y-2">
            <Link href="/avicultura/proyecto/gallinas-ponedoras">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span>Gallinas ponedoras</span>
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">En producción</span>
              </div>
            </Link>
            <Link href="/avicultura/proyecto/pollos-engorde">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span>Pollos de engorde</span>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Día 15 de 45</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-medium mb-2">Producción Actual</h3>
          <div className="space-y-2">
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-1">
                <span>Recolección de huevos</span>
                <span className="text-sm font-medium">120 huevos/día</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-[#57b8d9] h-2.5 rounded-full" style={{ width: "80%" }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Meta: 150 huevos/día</span>
                <span>80%</span>
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-1">
                <span>Crecimiento pollos</span>
                <span className="text-sm font-medium">0.8 kg promedio</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-[#57b8d9] h-2.5 rounded-full" style={{ width: "40%" }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Meta: 2 kg</span>
                <span>40%</span>
              </div>
            </div>
          </div>
        </div>

        <Link href="/avicultura/nuevo-proyecto" className="block w-full">
          <button className="w-full py-3 bg-[#57b8d9] rounded-full text-center font-medium shadow-sm hover:bg-[#48a6c4] transition-colors">
            Iniciar nuevo proyecto
          </button>
        </Link>
      </div>
    </CategoryLayout>
  )
}

