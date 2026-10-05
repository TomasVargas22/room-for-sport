import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Building, Mail, User, Phone, Sparkles } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '50-150',
    area: '40-80 m²',
    phone: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Auto reset after 4s
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        
        {/* Backdrop with Apple blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-md"
        />

        {/* Modal Window (Double-Bezel) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative z-10 w-full max-w-lg doppelrand-shell shadow-2xl my-8"
        >
          <div className="doppelrand-core p-6 sm:p-8 bg-white border border-black/[0.05]">
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-black/[0.04] hover:bg-black/[0.08] flex items-center justify-center text-titanium-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sport-blue/10 text-sport-blue text-xs font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> Diagnóstico Sin Coste
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-titanium-900">
                  Agenda una Visita Técnica o Estudio 3D
                </h3>
                <p className="text-xs text-titanium-500 mt-1 leading-relaxed">
                  Evaluamos la viabilidad arquitectónica de tu espacio y te presentamos un proyecto llave en mano con ROI garantizado.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-3.5 text-left">
                  <div>
                    <label className="text-xs font-semibold text-titanium-700 block mb-1">Tu Nombre y Cargo</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-titanium-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        required
                        type="text"
                        placeholder="Ej. Laura Méndez — Directora de Personas"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-black/[0.08] bg-titanium-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sport-blue/20 focus:border-sport-blue transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-titanium-700 block mb-1">Email Corporativo</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-titanium-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        required
                        type="email"
                        placeholder="laura@tuempresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-black/[0.08] bg-titanium-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sport-blue/20 focus:border-sport-blue transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-titanium-700 block mb-1">Nombre de la Empresa</label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-titanium-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          required
                          type="text"
                          placeholder="Tu Empresa S.L."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-black/[0.08] bg-titanium-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sport-blue/20 focus:border-sport-blue transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-titanium-700 block mb-1">Teléfono Directo</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-titanium-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          required
                          type="tel"
                          placeholder="+34 600 000 000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-black/[0.08] bg-titanium-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sport-blue/20 focus:border-sport-blue transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-titanium-700 block mb-1">Empleados en Sede</label>
                      <select
                        value={formData.employees}
                        onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-black/[0.08] bg-titanium-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sport-blue/20 focus:border-sport-blue transition-all"
                      >
                        <option value="20-50">20 a 50 empleados</option>
                        <option value="50-150">50 a 150 empleados</option>
                        <option value="150-500">150 a 500 empleados</option>
                        <option value="+500">+500 empleados</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-titanium-700 block mb-1">Metros Disponibles</label>
                      <select
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-black/[0.08] bg-titanium-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sport-blue/20 focus:border-sport-blue transition-all"
                      >
                        <option value="30-50 m²">30 - 50 m² (Studio)</option>
                        <option value="50-120 m²">50 - 120 m² (Performance)</option>
                        <option value="+150 m²">+150 m² (Club)</option>
                        <option value="No sé seguro">No lo sé con certeza</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3.5 rounded-2xl bg-titanium-800 text-white text-sm font-semibold hover:bg-black transition-all flex items-center justify-center gap-2 shadow-apple-card active:scale-[0.98]"
                  >
                    <span>Solicitar Diagnóstico y Estudio Gratuito</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-titanium-400 text-center mt-2">
                    Respuesta garantizada en menos de 24 horas por nuestro equipo técnico.
                  </p>
                </form>
              </div>
            ) : (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-sport-emerald/10 text-sport-emerald flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-titanium-900 tracking-tight">
                  ¡Solicitud Recibida con Éxito!
                </h4>
                <p className="text-sm text-titanium-600 max-w-sm mx-auto leading-relaxed">
                  Nos pondremos en contacto contigo en las próximas 24 horas para coordinar la visita técnica a vuestras oficinas o revisar los planos.
                </p>
                <div className="inline-block px-4 py-1.5 rounded-full bg-titanium-50 text-xs text-titanium-500 font-mono">
                  Referencia de expediente: #RFS-{Math.floor(1000 + Math.random() * 9000)}
                </div>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
