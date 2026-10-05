import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, Ruler, Users, Wrench, Shield, ArrowRight } from 'lucide-react';
import { roomModels } from '../data/landingData';

export default function InteractiveRoomCustomizer({ onOpenBooking }) {
  const [selectedRoomId, setSelectedRoomId] = useState('performance-120');
  const currentRoom = roomModels.find(r => r.id === selectedRoomId) || roomModels[1];

  return (
    <section id="spaces-section" className="py-28 px-4 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sport-blue/10 text-sport-blue text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Arquitectura & Equipamiento Modular
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-titanium-900 leading-tight">
          Cualquier rincón en desuso se convierte en un centro deportivo.
        </h2>
        <p className="text-base text-titanium-500 mt-4 text-balance">
          Nuestras estructuras son modulares e insonorizadas. Selecciona los metros cuadrados de los que dispone tu empresa para previsualizar la solución:
        </p>
      </div>

      {/* Model Selector Tabs (Apple Segmented Bar) */}
      <div className="flex justify-center mb-10">
        <div className="bg-black/[0.03] p-1.5 rounded-full border border-black/[0.05] inline-flex flex-wrap justify-center gap-1">
          {roomModels.map((room) => {
            const isSelected = room.id === selectedRoomId;
            return (
              <button
                key={room.id}
                onClick={() => setSelectedRoomId(room.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isSelected ? 'text-titanium-900 shadow-sm' : 'text-titanium-500 hover:text-titanium-800'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="roomTabIndicator"
                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    className="absolute inset-0 bg-white rounded-full border border-black/[0.04]"
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{room.title}</span>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full ${isSelected ? 'bg-sport-blue/10 text-sport-blue' : 'bg-black/[0.04] text-titanium-400'}`}>
                    {room.area}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Display Card (Double-Bezel Architecture) */}
      <div className="doppelrand-shell">
        <div className="doppelrand-core p-6 sm:p-10 bg-white border border-black/[0.04]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRoom.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              
              {/* Left Column: Specifications & Highlights */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-sport-emerald/10 text-sport-emerald text-xs font-semibold tracking-wide">
                    {currentRoom.badge}
                  </span>
                  <span className="text-xs text-titanium-400 font-medium">
                    Montaje garantizado en 14 días
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-titanium-900">
                    {currentRoom.title}
                  </h3>
                  <p className="text-sm text-titanium-600 mt-3 leading-relaxed">
                    {currentRoom.description}
                  </p>
                </div>

                {/* Key Spec Badges */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-titanium-50 p-3.5 rounded-2xl border border-black/[0.03] flex items-center gap-3">
                    <Ruler className="w-5 h-5 text-sport-blue" />
                    <div>
                      <div className="text-[10px] uppercase font-bold text-titanium-400">Espacio Necesario</div>
                      <div className="text-sm font-semibold text-titanium-800">{currentRoom.area}</div>
                    </div>
                  </div>

                  <div className="bg-titanium-50 p-3.5 rounded-2xl border border-black/[0.03] flex items-center gap-3">
                    <Users className="w-5 h-5 text-sport-cyan" />
                    <div>
                      <div className="text-[10px] uppercase font-bold text-titanium-400">Capacidad Turno</div>
                      <div className="text-sm font-semibold text-titanium-800">{currentRoom.capacity}</div>
                    </div>
                  </div>
                </div>

                {/* Features Included */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-titanium-400">
                    Equipamiento y acabados incluidos:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentRoom.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-titanium-700">
                        <CheckCircle2 className="w-4 h-4 text-sport-emerald shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-titanium-800 text-white text-xs font-medium hover:bg-black transition-all shadow-apple-card active:scale-95"
                  >
                    <span>Solicitar Estudio de Viabilidad Gratuito</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs text-titanium-400 font-medium">
                    Diseñado para: {currentRoom.idealFor}
                  </span>
                </div>
              </div>

              {/* Right Column: Architectural Visual Representation & Floorplan */}
              <div className="lg:col-span-5 bg-gradient-to-b from-titanium-100 to-titanium-50 rounded-[2rem] p-6 border border-black/[0.04] text-center flex flex-col items-center justify-between min-h-[360px] relative overflow-hidden">
                
                {/* Visual badge */}
                <div className="w-full flex items-center justify-between text-xs text-titanium-500 pb-4 border-b border-black/[0.05]">
                  <span className="font-mono text-[11px] font-semibold">PLANTA TÉCNICA 3D</span>
                  <span className="text-sport-emerald font-medium flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5" /> Certificación Acústica
                  </span>
                </div>

                {/* Conceptual Floorplan Graphic */}
                <div className="my-auto py-8 w-full flex flex-col items-center justify-center">
                  <div className="relative w-56 h-44 rounded-2xl bg-white border-2 border-dashed border-titanium-300 p-3 shadow-inner flex flex-col justify-between">
                    <div className="flex justify-between items-center text-[10px] text-titanium-400 font-mono">
                      <span>ZONA A: FUERZA</span>
                      <span>VENTILACIÓN</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 my-auto">
                      <div className="h-10 rounded-lg bg-sport-blue/10 border border-sport-blue/20 flex items-center justify-center text-[9px] font-bold text-sport-blue">
                        RACK
                      </div>
                      <div className="h-10 rounded-lg bg-sport-cyan/10 border border-sport-cyan/20 flex items-center justify-center text-[9px] font-bold text-sport-cyan">
                        CARDIO
                      </div>
                      <div className="h-10 rounded-lg bg-titanium-200/50 border border-black/[0.05] flex items-center justify-center text-[9px] font-bold text-titanium-600">
                        MATS
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[10px] text-titanium-400 font-mono">
                      <span>ACCESO RFID</span>
                      <span>PANTALLA</span>
                    </div>

                    {/* Dimensions Pill */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-titanium-800 text-white text-[10px] font-mono px-3 py-0.5 rounded-full shadow-sm">
                      {currentRoom.area}
                    </div>
                  </div>
                </div>

                <div className="text-xs text-titanium-400 mt-3">
                  Incluye suelo técnico fonoabsorbente (cero ruidos para los despachos contiguos).
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
