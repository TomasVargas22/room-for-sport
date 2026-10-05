import React from 'react';
import { motion } from 'framer-motion';
import { Star, Building, Award, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Teníamos una sala de reuniones secundaria que casi nadie usaba. En 10 días Room for Sport la convirtió en un estudio de movilidad y fuerza. Hoy es el beneficio mejor valorado en nuestras encuestas de clima laboral.",
      author: "Marta Gómez",
      role: "Chief People Officer",
      company: "Fintech de 180 empleados",
      stat: "91% satisfacción de empleados"
    },
    {
      quote: "Como CFO, lo miré con escepticismo inicial por el coste. Pero los datos hablan solos: en el primer año redujimos las bajas por problemas lumbares en un 43%. La inversión se pagó sola en el primer trimestre.",
      author: "Alejandro S.",
      role: "CFO & Director de Operaciones",
      company: "Consultora Tecnológica (320 empleados)",
      stat: "4.1x ROI medido"
    },
    {
      quote: "Poder hacer una pausa activa de 20 minutos con un fisioterapeuta a las 12:30 cambió radicalmente mis tardes. Ya no salgo de la oficina con dolor de cuello ni fatiga.",
      author: "David R.",
      role: "Senior Software Engineer",
      company: "Colaborador Activo",
      stat: "3 sesiones semanales"
    }
  ];

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-xs uppercase tracking-widest font-semibold text-sport-blue mb-2">
          Casos de Éxito
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-titanium-900">
          Lo que dicen las empresas que ya entrenan con nosotros.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-1 rounded-[2rem] bg-black/[0.02] border border-black/[0.04]"
          >
            <div className="p-7 rounded-[calc(2rem-0.25rem)] bg-white h-full flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.02)] text-left">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-titanium-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-black/[0.05]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm text-titanium-900">{t.author}</div>
                    <div className="text-xs text-titanium-500">{t.role}</div>
                    <div className="text-[11px] text-titanium-400 mt-0.5">{t.company}</div>
                  </div>
                  <span className="text-[11px] font-semibold text-sport-emerald bg-sport-emerald/10 px-2 py-1 rounded-md">
                    {t.stat}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
