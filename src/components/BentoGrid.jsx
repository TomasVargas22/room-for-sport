import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BarChart3, Smartphone, Activity, CheckCircle2, ArrowRight } from 'lucide-react';
import { bentoFeatures } from '../data/landingData';

export default function BentoGrid({ onOpenBooking }) {
  return (
    <section className="py-28 px-4 max-w-6xl mx-auto">
      
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-xs uppercase tracking-widest font-semibold text-sport-blue mb-2">
          Ventajas Diferenciales
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-titanium-900 leading-tight">
          La solución integral que elimina la fricción para RRHH.
        </h2>
        <p className="text-base text-titanium-500 mt-4 text-balance">
          No compres máquinas sueltas que nadie use. Room for Sport combina infraestructura modular, monitores certificados y tecnología de adopción.
        </p>
      </div>

      {/* Asymmetrical Bento Grid */}
      <div className="grid grid-cols-12 gap-5">
        
        {/* Card 1: 360 Full Management (Large 8-col) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 lg:col-span-8 doppelrand-shell"
        >
          <div className="doppelrand-core p-8 md:p-10 h-full flex flex-col justify-between text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sport-blue/10 text-sport-blue text-xs font-semibold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5" /> Llave en Mano
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-titanium-900 leading-snug">
                Nosotros nos encargamos de todo. Tu equipo solo entrena y rinde.
              </h3>
              <p className="text-sm text-titanium-500 mt-3 max-w-xl leading-relaxed">
                Olvídate de presupuestos de compras, nóminas de monitores, seguros especiales o averías. Room for Sport opera la sala como un servicio mensual todo incluido.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                {[
                  'Monitores titulados presenciales y streaming',
                  'Mantenimiento preventivo mensual y limpieza',
                  'Seguro de responsabilidad civil de alta cobertura',
                  'Renovación y actualización de material sin coste extra'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-titanium-700">
                    <CheckCircle2 className="w-4 h-4 text-sport-emerald shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/[0.04] flex items-center justify-between">
              <span className="text-xs text-titanium-400">Cero carga de trabajo adicional para tu equipo de Facilities</span>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sport-blue hover:underline"
              >
                Conocer detalles de servicio <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Health Analytics / Data (Small 4-col) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 lg:col-span-4 doppelrand-shell"
        >
          <div className="doppelrand-core p-8 h-full flex flex-col justify-between text-left bg-gradient-to-b from-white to-titanium-50/50">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] text-titanium-600 text-xs font-semibold uppercase tracking-wider mb-4">
                <BarChart3 className="w-3.5 h-3.5 text-sport-blue" /> Telemetría B2B
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-titanium-900">
                Informes de Salud para tu Comité de Dirección
              </h3>
              <p className="text-xs text-titanium-500 mt-2 leading-relaxed">
                Datos agregados y anónimos de participación, calorías activas y reducción del estrés para medir el ROI con precisión.
              </p>

              <div className="my-6 p-4 rounded-2xl bg-white border border-black/[0.04] shadow-sm">
                <div className="text-3xl font-bold text-sport-blue">+88%</div>
                <div className="text-xs text-titanium-600 mt-1 font-medium">Tasa de adopción activa en los primeros 60 días</div>
              </div>
            </div>

            <div className="text-[11px] text-titanium-400 border-t border-black/[0.04] pt-4">
              Cumplimiento 100% RGPD y anonimato biométrico médico.
            </div>
          </div>
        </motion.div>

        {/* Card 3: App & Tech Experience (Small 4-col) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 lg:col-span-4 doppelrand-shell"
        >
          <div className="doppelrand-core p-8 h-full flex flex-col justify-between text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sport-cyan/10 text-sport-cyan text-xs font-semibold uppercase tracking-wider mb-4">
                <Smartphone className="w-3.5 h-3.5" /> App Móvil
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-titanium-900">
                Reserva de Clases y Retos en 1 Clic
              </h3>
              <p className="text-xs text-titanium-500 mt-2 leading-relaxed">
                Cada colaborador cuenta con una app intuitiva para agendar sus sesiones, seguir sus progresos y apuntarse a los retos de equipo.
              </p>

              <div className="mt-6 space-y-2">
                <div className="p-3 bg-titanium-50 rounded-xl border border-black/[0.03] text-xs flex items-center justify-between">
                  <span className="text-titanium-700 font-medium">Sincronización de Calendario</span>
                  <span className="text-sport-emerald text-[11px] font-semibold">Outlook & GCal</span>
                </div>
                <div className="p-3 bg-titanium-50 rounded-xl border border-black/[0.03] text-xs flex items-center justify-between">
                  <span className="text-titanium-700 font-medium">Control de Aforos en Tiempo Real</span>
                  <span className="text-sport-blue text-[11px] font-semibold">Sensor RFID</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black/[0.04] text-xs text-titanium-400">
              Disponible en App Store y Google Play con la marca de tu empresa.
            </div>
          </div>
        </motion.div>

        {/* Card 4: Postural Ergonomics & Pain Prevention (Large 8-col) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 lg:col-span-8 doppelrand-shell"
        >
          <div className="doppelrand-core p-8 md:p-10 h-full flex flex-col justify-between text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sport-emerald/10 text-sport-emerald text-xs font-semibold uppercase tracking-wider mb-4">
                <Activity className="w-3.5 h-3.5" /> Salud Ocupacional
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-titanium-900 leading-snug">
                Erradicamos las dolencias posturales del trabajo de oficina.
              </h3>
              <p className="text-sm text-titanium-500 mt-3 max-w-xl leading-relaxed">
                El 72% del dolor lumbar y cervical en oficina proviene de la inactividad continua. Nuestros fisioterapeutas diseñan pausas activas específicas para neutralizar estos efectos.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                <div className="p-4 bg-titanium-50 rounded-2xl border border-black/[0.03]">
                  <div className="text-xs font-bold text-titanium-800">Protocolo 15 min</div>
                  <div className="text-[11px] text-titanium-500 mt-1">Pausa activa guiada sin necesidad de cambiarse de ropa.</div>
                </div>
                <div className="p-4 bg-titanium-50 rounded-2xl border border-black/[0.03]">
                  <div className="text-xs font-bold text-titanium-800">Talleres Ergonómicos</div>
                  <div className="text-[11px] text-titanium-500 mt-1">Educación postural directa en el puesto de trabajo.</div>
                </div>
                <div className="p-4 bg-titanium-50 rounded-2xl border border-black/[0.03]">
                  <div className="text-xs font-bold text-titanium-800">Citas de Fisioterapia</div>
                  <div className="text-[11px] text-titanium-500 mt-1">Tratamiento preventivo presencial in-office.</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/[0.04] flex items-center justify-between">
              <span className="text-xs text-titanium-400">Programas avalados por colegios de fisioterapia y medicina del deporte</span>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sport-blue hover:underline"
              >
                Solicitar protocolo postural <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
