import { CategoryLayout } from "@/components/category-layout"
import { ForestalIcon } from "@/components/category-icons"

export default function Forestal() {
  return (
    <CategoryLayout
      title="forestal"
      description="Gestión de bosques y producción maderera"
      color="bg-[#d9c957]"
      icon={<ForestalIcon />}
    >
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-medium mb-2">Áreas Forestales</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Bosque de pinos</span>
              <span className="text-sm font-medium">12 hectáreas</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Bosque de eucaliptos</span>
              <span className="text-sm font-medium">8 hectáreas</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Área de reforestación</span>
              <span className="text-sm font-medium">5 hectáreas</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-medium mb-2">Inventario de Árboles</h3>
          <div className="space-y-2">
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span>Pinos</span>
                <span className="text-sm font-medium">~3,500 árboles</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Edad promedio: 8 años</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span>Eucaliptos</span>
                <span className="text-sm font-medium">~2,200 árboles</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Edad promedio: 5 años</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span>Nuevas plantaciones</span>
                <span className="text-sm font-medium">500 árboles</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Plantados hace 6 meses</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-medium mb-2">Próximas Actividades</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Poda de mantenimiento</span>
              <span className="text-sm text-gray-500">Próxima semana</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Control de plagas</span>
              <span className="text-sm text-gray-500">En 2 semanas</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Cosecha selectiva</span>
              <span className="text-sm text-gray-500">En 3 meses</span>
            </div>
          </div>
        </div>

        <button className="w-full py-3 bg-[#d9c957] rounded-full text-center font-medium shadow-sm hover:bg-[#c4b548] transition-colors">
          Planificar actividad
        </button>
      </div>
    </CategoryLayout>
  )
}

