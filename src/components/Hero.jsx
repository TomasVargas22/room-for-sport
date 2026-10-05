import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, ShieldCheck, Sparkles, Flame, HeartPulse, Clock, Users2, ChevronRight } from 'lucide-react';
import { landingVariants } from '../data/landingData';

export default function Hero({ activeVariant, onOpenBooking, onScrollToRoi }) {
  const data = landingVariants[activeVariant] || landingVariants.corporate;
  const [interactiveMode, setInteractiveMode] = useState('session'); // 'session' | 'stats' | 'view'

  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 px-4 overflow-hidden">
      
      {/* Background Soft Glows (Subtle, diffused Apple style - non distracting) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-sport-blue/[0.04] via-sport-cyan/[0.03] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto text-center">
        
        {/* Eyebrow Pill Tag */}
        <motion.div
          key={`badge-${activeVariant}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] shadow-apple-sm text-[11px] font-semibold tracking-wide text-titanium-600 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-sport-cyan animate-pulse" />
          <span className="uppercase tracking-widest">{data.badge}</span>
        </motion.div>

        {/* Massive Typography Headline */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={`title-${activeVariant}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-[72px] font-semibold tracking-[-0.035em] text-titanium-900 leading-[1.08] max-w-4xl mx-auto text-balance"
          >
            {data.heroTitle}
          </motion.h1>
        </AnimatePresence>

        {/* Subtitle */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`sub-${activeVariant}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-xl text-titanium-500 font-normal max-w-2xl mx-auto mt-6 text-balance leading-relaxed"
          >
            {data.heroSubtitle}
          </motion.p>
        </AnimatePresence>

        {/* CTA Buttons - Button-in-Button architecture */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-titanium-800 text-white text-sm font-medium hover:bg-black transition-all duration-300 shadow-apple-card active:scale-[0.98] group"
          >
            <span>{data.primaryCta}</span>
            <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </span>
          </button>

          <button
            onClick={onScrollToRoi}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-black/[0.06] text-titanium-700 text-sm font-medium hover:bg-black/[0.02] shadow-apple-sm transition-all duration-300 active:scale-[0.98]"
          >
            <Sparkles className="w-4 h-4 text-sport-blue" />
            <span>{data.secondaryCta}</span>
          </button>
        </motion.div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-6 mt-6 text-xs text-titanium-500 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-sport-emerald" /> Sin obras molestas
          </span>
          <span className="hidden sm:inline-block text-black/10">•</span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-sport-blue" /> 100% deducible fiscalmente
          </span>
          <span className="hidden sm:inline-block text-black/10">•</span>
          <span className="hidden sm:flex items-center gap-1.5">
            <Users2 className="w-4 h-4 text-titanium-600" /> Monitores homologados
          </span>
        </div>

        {/* Double-Bezel Interactive Hardware Frame (Simulador en Vivo) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="doppelrand-shell max-w-5xl mx-auto mt-14"
        >
          <div className="doppelrand-core p-4 sm:p-6 md:p-8 bg-white border border-black/[0.04]">
            
            {/* Top Bar of the Interactive Surface */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-black/[0.05]">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-2xl bg-black/[0.03] border border-black/[0.04] flex items-center justify-center text-titanium-800">
                  <Flame className="w-5 h-5 text-sport-blue" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-titanium-400">
                    Sede Central • Sala 01
                  </div>
                  <div className="text-sm font-semibold text-titanium-900 flex items-center gap-2">
                    Room for Sport — Wellness & Athletic Space
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-sport-emerald bg-sport-emerald/10 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-sport-emerald animate-ping" />
                      En Directo
                    </span>
                  </div>
                </div>
              </div>

              {/* View Switchers within the Hardware Screen */}
              <div className="flex items-center bg-black/[0.03] p-1 rounded-xl self-start sm:self-auto border border-black/[0.04]">
                <button
                  onClick={() => setInteractiveMode('session')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${interactiveMode === 'session' ? 'bg-white shadow-sm text-titanium-900' : 'text-titanium-500'}`}
                >
                  Sesión en Curso
                </button>
                <button
                  onClick={() => setInteractiveMode('stats')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${interactiveMode === 'stats' ? 'bg-white shadow-sm text-titanium-900' : 'text-titanium-500'}`}
                >
                  Biometría de Equipo
                </button>
                <button
                  onClick={() => setInteractiveMode('schedule')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${interactiveMode === 'schedule' ? 'bg-white shadow-sm text-titanium-900' : 'text-titanium-500'}`}
                >
                  Agenda del Día
                </button>
              </div>
            </div>

            {/* Dynamic Interactive Body */}
            <div className="py-6">
              {interactiveMode === 'session' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-left">
                  {/* Active Class Highlight */}
                  <div className="md:col-span-7 bg-titanium-50 rounded-2xl p-5 border border-black/[0.04] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-sport-blue bg-sport-blue/10 px-2.5 py-1 rounded-md">
                          En Progreso • 12:30 - 13:00
                        </span>
                        <span className="text-xs text-titanium-400 font-medium flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> Quedan 14 min
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-titanium-900 tracking-tight">
                        Pausa Activa: Corrección Postural y Descompresión Lumbar
                      </h4>
                      <p className="text-xs text-titanium-500 mt-2 leading-relaxed">
                        Dirigida por Coach Carlos Ruiz (Fisioterapeuta Deportivo). Diseñada para personal que pasa más de 6 horas sentado frente a pantallas.
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-black/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          <span className="w-7 h-7 rounded-full bg-titanium-300 border-2 border-white flex items-center justify-center text-[10px] font-bold text-titanium-700">MR</span>
                          <span className="w-7 h-7 rounded-full bg-sport-blue/20 border-2 border-white flex items-center justify-center text-[10px] font-bold text-sport-blue">AL</span>
                          <span className="w-7 h-7 rounded-full bg-sport-cyan/20 border-2 border-white flex items-center justify-center text-[10px] font-bold text-sport-cyan">JP</span>
                          <span className="w-7 h-7 rounded-full bg-titanium-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-titanium-600">+8</span>
                        </div>
                        <span className="text-xs text-titanium-600 font-medium">11 colaboradores asistiendo</span>
                      </div>
                      <span className="text-xs font-semibold text-sport-emerald bg-sport-emerald/10 px-2 py-0.5 rounded-full">
                        Sala al 92% aforo
                      </span>
                    </div>
                  </div>

                  {/* Real-time Health Metrics Cards */}
                  <div className="md:col-span-5 grid grid-cols-2 gap-3">
                    <div className="bg-titanium-50 rounded-2xl p-4 border border-black/[0.04]">
                      <div className="flex items-center justify-between text-titanium-400 mb-2">
                        <HeartPulse className="w-4 h-4 text-sport-coral" />
                        <span className="text-[10px] uppercase font-bold text-titanium-400">Cardio</span>
                      </div>
                      <div className="text-2xl font-bold tracking-tight text-titanium-900">114 <span className="text-xs font-normal text-titanium-500">PPM</span></div>
                      <div className="text-[11px] text-titanium-500 mt-1">Ritmo cardiovascular aeróbico saludable</div>
                    </div>

                    <div className="bg-titanium-50 rounded-2xl p-4 border border-black/[0.04]">
                      <div className="flex items-center justify-between text-titanium-400 mb-2">
                        <Flame className="w-4 h-4 text-sport-blue" />
                        <span className="text-[10px] uppercase font-bold text-titanium-400">Energía</span>
                      </div>
                      <div className="text-2xl font-bold tracking-tight text-sport-blue">+34%</div>
                      <div className="text-[11px] text-titanium-500 mt-1">Incremento en energía post-sesión</div>
                    </div>

                    <div className="col-span-2 bg-gradient-to-br from-titanium-900 to-titanium-800 text-white rounded-2xl p-4 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-titanium-400 font-bold">Próxima Actividad</div>
                        <div className="text-sm font-semibold mt-0.5">14:00 • Functional HIIT & Core</div>
                        <div className="text-[11px] text-titanium-300">Coach Laura Méndez • 14 inscritos</div>
                      </div>
                      <button
                        onClick={onOpenBooking}
                        className="px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/20 text-xs font-medium text-white transition-colors"
                      >
                        Ver Horarios
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {interactiveMode === 'stats' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                  <div className="bg-titanium-50 p-5 rounded-2xl border border-black/[0.04]">
                    <div className="text-xs font-semibold text-titanium-400 uppercase tracking-wider">Absentismo Médico</div>
                    <div className="text-3xl font-bold text-sport-emerald mt-2">-41%</div>
                    <p className="text-xs text-titanium-500 mt-2">Reducción en licencias médicas por afecciones músculo-esqueléticas en empresas piloto.</p>
                  </div>
                  <div className="bg-titanium-50 p-5 rounded-2xl border border-black/[0.04]">
                    <div className="text-xs font-semibold text-titanium-400 uppercase tracking-wider">Clima Laboral (eNPS)</div>
                    <div className="text-3xl font-bold text-sport-blue mt-2">+54 pts</div>
                    <p className="text-xs text-titanium-500 mt-2">Valoración del departamento de personas como un empleador que cuida su salud real.</p>
                  </div>
                  <div className="bg-titanium-50 p-5 rounded-2xl border border-black/[0.04]">
                    <div className="text-xs font-semibold text-titanium-400 uppercase tracking-wider">Uso Semanal Promedio</div>
                    <div className="text-3xl font-bold text-titanium-900 mt-2">3.8 días</div>
                    <p className="text-xs text-titanium-500 mt-2">Frecuencia semanal con la que cada colaborador hace al menos una sesión de bienestar.</p>
                  </div>
                </div>
              )}

              {interactiveMode === 'schedule' && (
                <div className="space-y-2.5 text-left">
                  {[
                    { time: '08:00 - 08:45', name: 'Morning Awakening & Yoga Vinyasa', coach: 'Elena Vega', spots: 'Cupo completo' },
                    { time: '12:30 - 13:00', name: 'Postural Reset Anti-Pantalla', coach: 'Carlos Ruiz', spots: '3 plazas libres' },
                    { time: '14:00 - 14:45', name: 'Functional Performance HIIT', coach: 'Laura Méndez', spots: '5 plazas libres' },
                    { time: '18:00 - 19:00', name: 'Torneo Inter-Equipos de Pádel / Cross-Training', coach: 'Staff Room for Sport', spots: 'Abierto' },
                  ].map((row, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3.5 bg-titanium-50 rounded-xl border border-black/[0.04] text-xs">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-semibold text-titanium-600 bg-white px-2 py-1 rounded-md border border-black/[0.04]">{row.time}</span>
                        <div>
                          <div className="font-semibold text-titanium-900 text-sm">{row.name}</div>
                          <div className="text-titanium-500 text-[11px]">{row.coach}</div>
                        </div>
                      </div>
                      <span className="font-medium text-titanium-600">{row.spots}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Guarantee Banner */}
            <div className="pt-4 border-t border-black/[0.04] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-titanium-500">
              <span>* Datos generados a partir de telemetría de uso corporativo en empresas activas.</span>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1 font-semibold text-sport-blue hover:underline"
              >
                Solicitar informe técnico para tu comité de dirección <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
