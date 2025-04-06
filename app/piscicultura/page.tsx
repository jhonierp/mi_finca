import { CategoryLayout } from "@/components/category-layout"
import { PisciculturaIcon } from "@/components/category-icons"

export default function Piscicultura() {
  return (
    <CategoryLayout
      title="piscicultura"
      description="Gestión de peces y producción acuícola"
      color="bg-[#5768d9]"
      icon={<PisciculturaIcon />}
    >
      <div className="space-y-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-medium mb-2">Estanques Activos</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Estanque 1 - Tilapia</span>
              <span className="text-sm font-medium">500 peces</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Estanque 2 - Carpa</span>
              <span className="text-sm font-medium">350 peces</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Estanque 3 - Trucha</span>
              <span className="text-sm font-medium">200 peces</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-medium mb-2">Calidad del Agua</h3>
          <div className="space-y-2">
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-1">
                <span>Oxígeno disuelto</span>
                <span className="text-sm font-medium">6.8 mg/L</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-1">
                <span>pH</span>
                <span className="text-sm font-medium">7.2</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-1">
                <span>Temperatura</span>
                <span className="text-sm font-medium">24°C</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-medium mb-2">Próximas Actividades</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Alimentación</span>
              <span className="text-sm text-gray-500">Diaria (3 veces)</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Cambio parcial de agua</span>
              <span className="text-sm text-gray-500">En 2 días</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span>Cosecha Estanque 1</span>
              <span className="text-sm text-gray-500">En 2 semanas</span>
            </div>
          </div>
        </div>

        <button className="w-full py-3 bg-[#5768d9] rounded-full text-center font-medium shadow-sm hover:bg-[#4857c4] transition-colors">
          Monitorear estanques
        </button>
      </div>
    </CategoryLayout>
  )
}

