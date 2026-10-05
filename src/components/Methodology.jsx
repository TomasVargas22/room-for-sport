import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../data/landingData';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Methodology({ onOpenBooking }) {
  return (
    <section className="py-24 px-4 bg-white/50 border-t border-black/[0.04]">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest font-semibold text-sport-blue mb-2">
            Proceso de Implantación
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-titanium-900">
            De espacio vacío a sala deportiva en 4 sencillos pasos.
          </h2>
          <p className="text-sm text-titanium-500 mt-3 text-balance">
            Un método probado para empresas de 30 a +2.000 empleados sin alterar la actividad habitual de la oficina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 rounded-3xl bg-titanium-50 border border-black/[0.04] flex flex-col justify-between text-left shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-white border border-black/[0.05] shadow-sm flex items-center justify-center font-mono font-bold text-sm text-titanium-800 mb-6">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-titanium-900 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-titanium-500 mt-2.5 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/[0.04] flex items-center gap-1.5 text-[11px] font-semibold text-sport-emerald">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Garantía de cumplimiento</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-[2rem] bg-titanium-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 text-left shadow-apple-card">
          <div>
            <div className="text-xs uppercase tracking-wider text-sport-cyan font-bold">Paso 1 Gratuito</div>
            <h4 className="text-xl sm:text-2xl font-semibold mt-1">¿Tienes dudas sobre si tu oficina es adecuada?</h4>
            <p className="text-xs text-titanium-400 mt-1 max-w-lg">
              Uno de nuestros arquitectos técnicos visita tu sede sin ningún coste ni compromiso para evaluar la viabilidad.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-titanium-900 text-xs font-semibold hover:bg-titanium-100 transition-all active:scale-95 shadow-sm"
          >
            <span>Agendar Visita Técnica Gratuita</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
