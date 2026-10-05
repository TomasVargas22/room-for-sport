import React from 'react';
import { motion } from 'framer-motion';
import { corporateMetrics } from '../data/landingData';

export default function StatsSection() {
  return (
    <section className="py-20 px-4 bg-white/60 border-y border-black/[0.04] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-widest font-semibold text-sport-blue mb-2">
            Resultados Comprobables en Empresas
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-titanium-900">
            El impacto económico y humano del bienestar activo.
          </h2>
          <p className="text-sm text-titanium-500 mt-3 text-balance">
            El sedentarismo le cuesta a las organizaciones miles de horas no productivas al año. Implementar deporte en tu oficina transforma directamente la cuenta de resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {corporateMetrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-1 rounded-[2rem] bg-black/[0.02] border border-black/[0.04]"
            >
              <div className="p-6 rounded-[calc(2rem-0.25rem)] bg-white h-full flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.02)]">
                <div>
                  <div className={`text-4xl sm:text-5xl font-bold tracking-tight ${metric.accent}`}>
                    {metric.value}
                  </div>
                  <h3 className="text-sm font-semibold text-titanium-850 mt-3 leading-snug">
                    {metric.label}
                  </h3>
                </div>
                <p className="text-xs text-titanium-500 mt-4 pt-4 border-t border-black/[0.04] leading-relaxed">
                  {metric.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
