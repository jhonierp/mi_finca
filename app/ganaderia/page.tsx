import { CategoryLayout } from "@/components/category-layout"
import { GanaderiaIcon } from "@/components/category-icons"

export default function Ganaderia() {
  return (
    <CategoryLayout
      title="ganadería"
      description="Gestión de ganado y producción animal"
      color="bg-[#57d9a2]"
      icon={<GanaderiaIcon />}
    >
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-medium mb-2">Inventario de Ganado</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Vacas lecheras</span>
              <span className="text-sm font-medium">24 cabezas</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Terneros</span>
              <span className="text-sm font-medium">8 cabezas</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Toros</span>
              <span className="text-sm font-medium">3 cabezas</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-medium mb-2">Producción Láctea</h3>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <span>Producción diaria</span>
              <span className="text-sm font-medium">320 litros</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-[#57d9a2] h-2.5 rounded-full" style={{ width: "85%" }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Meta: 350 litros</span>
              <span>85%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-medium mb-2">Próximas Actividades</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Vacunación</span>
              <span className="text-sm text-gray-500">Mañana</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Revisión veterinaria</span>
              <span className="text-sm text-gray-500">En 3 días</span>
            </div>
          </div>
        </div>

        <button className="w-full py-3 bg-[#57d9a2] rounded-full text-center font-medium shadow-sm hover:bg-[#48c48f] transition-colors">
          Registrar actividad
        </button>
      </div>
    </CategoryLayout>
  )
}

