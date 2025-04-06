import { CategoryLayout } from "@/components/category-layout"
import { PorciculturaIcon } from "@/components/category-icons"

export default function Porcicultura() {
  return (
    <CategoryLayout
      title="porcicultura"
      description="Gestión de cerdos y producción porcina"
      color="bg-[#d957b8]"
      icon={<PorciculturaIcon />}
    >
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-medium mb-2">Inventario Porcino</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Cerdas reproductoras</span>
              <span className="text-sm font-medium">12 cerdos</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Cerdos de engorde</span>
              <span className="text-sm font-medium">45 cerdos</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Lechones</span>
              <span className="text-sm font-medium">28 cerdos</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-medium mb-2">Ciclo Reproductivo</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Cerdas gestantes</span>
              <span className="text-sm font-medium">5 cerdas</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Próximo parto</span>
              <span className="text-sm text-gray-500">En 2 semanas</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-medium mb-2">Alimentación</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Consumo diario</span>
              <span className="text-sm font-medium">180 kg</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Inventario de alimento</span>
              <span className="text-sm text-yellow-600">Bajo (3 días)</span>
            </div>
          </div>
        </div>

        <button className="w-full py-3 bg-[#d957b8] rounded-full text-center font-medium shadow-sm hover:bg-[#c448a6] transition-colors">
          Registrar actividad
        </button>
      </div>
    </CategoryLayout>
  )
}

