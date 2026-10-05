import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Users, ArrowUpRight, DollarSign, Clock, ShieldCheck } from 'lucide-react';

export default function RoiCalculator({ onOpenBooking }) {
  const [employees, setEmployees] = useState(120);

  // Fórmulas realistas de salud laboral B2B
  // En promedio un empleado en oficina tiene 6.2 días de baja al año, de los cuales ~35% son músculo-esqueléticas/estrés
  const sickLeaveReductionPercent = 0.38;
  const avgCostPerSickDay = 180; // Coste medio de baja por empleado/día
  const annualSavedSickDays = Math.round(employees * 6.2 * sickLeaveReductionPercent);
  const annualDirectSavings = annualSavedSickDays * avgCostPerSickDay;
  const annualProductivityGainHours = Math.round(employees * 48); // 1 hora más de energía/foco por semana
  const estimatedRoiRatio = (3.4 + (employees / 400)).toFixed(1);

  return (
    <section id="roi-section" className="py-24 px-4 bg-titanium-100/60 border-y border-black/[0.04]">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sport-emerald/10 text-sport-emerald text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" /> Modelo Financiero para Dirección
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-titanium-900">
            Calcula el Retorno de Inversión de Room for Sport
          </h2>
          <p className="text-sm text-titanium-500 mt-3 text-balance">
            Mueve el deslizador según el tamaño de tu plantilla para proyectar el ahorro en absentismo y la ganancia de productividad.
          </p>
        </div>

        {/* Double-Bezel Card Container */}
        <div className="doppelrand-shell">
          <div className="doppelrand-core p-6 sm:p-10 bg-white border border-black/[0.04]">
            
            {/* Interactive Slider Input */}
            <div className="mb-10 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <label htmlFor="employees-slider" className="text-sm font-semibold text-titanium-800 flex items-center gap-2">
                  <Users className="w-4 h-4 text-sport-blue" />
                  Número de Empleados en Oficina:
                </label>
                <div className="text-2xl font-bold tracking-tight text-titanium-900 bg-titanium-50 px-4 py-1.5 rounded-xl border border-black/[0.04] inline-block self-start sm:self-auto">
                  {employees} <span className="text-xs font-normal text-titanium-500">colaboradores</span>
                </div>
              </div>

              <input
                id="employees-slider"
                type="range"
                min="20"
                max="800"
                step="10"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2.5 bg-titanium-200 rounded-lg appearance-none cursor-pointer accent-sport-blue transition-all"
              />
              <div className="flex justify-between text-[11px] text-titanium-400 mt-2 font-mono">
                <span>20 empleados</span>
                <span>200</span>
                <span>400</span>
                <span>600</span>
                <span>800+ empleados</span>
              </div>
            </div>

            {/* Calculated Output Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-black/[0.05] text-left">
              
              <div className="bg-titanium-50 p-5 rounded-2xl border border-black/[0.03]">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-titanium-400 uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-sport-blue" /> Días de Baja Ahorrados
                </div>
                <div className="text-3xl font-bold text-titanium-900 mt-2">
                  {annualSavedSickDays.toLocaleString()} <span className="text-xs font-normal text-titanium-500">días/año</span>
                </div>
                <p className="text-[11px] text-titanium-500 mt-2">
                  Reducción comprobada en bajas por ciática, cervicalgia y fatiga mental.
                </p>
              </div>

              <div className="bg-titanium-50 p-5 rounded-2xl border border-black/[0.03]">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-sport-emerald uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4" /> Ahorro Económico Estimado
                </div>
                <div className="text-3xl font-bold text-sport-emerald mt-2">
                  ${annualDirectSavings.toLocaleString()} <span className="text-xs font-normal text-titanium-500">/año</span>
                </div>
                <p className="text-[11px] text-titanium-500 mt-2">
                  Evita costes de sustitución de personal y jornadas laborales perdidas.
                </p>
              </div>

              <div className="bg-titanium-50 p-5 rounded-2xl border border-black/[0.03]">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-titanium-400 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-sport-cyan" /> Retorno de Inversión (ROI)
                </div>
                <div className="text-3xl font-bold text-titanium-900 mt-2">
                  {estimatedRoiRatio}x <span className="text-xs font-normal text-titanium-500">retorno medio</span>
                </div>
                <p className="text-[11px] text-titanium-500 mt-2">
                  Amortización completa del servicio a partir del 4º mes de implantación.
                </p>
              </div>

            </div>

            {/* Bottom CTA within Calculator */}
            <div className="mt-8 pt-6 border-t border-black/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-titanium-500 text-left">
                ¿Quieres una auditoría detallada con la masa salarial y datos de tu empresa?
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-titanium-800 text-white text-xs font-medium hover:bg-black transition-all shadow-sm active:scale-95 group"
              >
                <span>Descargar Informe de Viabilidad Personalizado</span>
                <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
