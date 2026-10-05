import React from 'react';
import { Activity, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ setActiveVariant, onOpenBooking }) {
  return (
    <footer className="bg-white border-t border-black/[0.06] pt-16 pb-12 px-4 text-left">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-black/[0.05]">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-titanium-800 flex items-center justify-center text-white">
                <Activity className="w-4 h-4 text-sport-cyan" />
              </div>
              <span className="font-semibold text-base tracking-tight text-titanium-900">
                Room for Sport
              </span>
            </div>
            <p className="text-xs text-titanium-500 max-w-sm leading-relaxed">
              El servicio integral de salud física, deporte y bienestar corporativo para empresas de alto rendimiento. Transformamos oficinas en espacios de vitalidad y productividad sostenible.
            </p>
            <div className="flex items-center gap-2 text-xs text-sport-emerald font-medium pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantía de cumplimiento PRL y Responsabilidad Civil Integral</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-titanium-400">
              Soluciones B2B
            </div>
            <ul className="space-y-2 text-xs text-titanium-600">
              <li>
                <button onClick={() => setActiveVariant('corporate')} className="hover:text-titanium-900 transition-colors">
                  Visión Corporativa & ROI
                </button>
              </li>
              <li>
                <button onClick={() => setActiveVariant('spaces')} className="hover:text-titanium-900 transition-colors">
                  Modelos de Sala (30 a 250 m²)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveVariant('athletes')} className="hover:text-titanium-900 transition-colors">
                  Experiencia del Colaborador
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-titanium-900 transition-colors">
                  Visita Técnica de Arquitectura
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-titanium-400">
              Contacto para Empresas
            </div>
            <ul className="space-y-2 text-xs text-titanium-600">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-titanium-400" />
                <span>empresas@roomforsport.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-titanium-400" />
                <span>+34 900 800 200 (Línea Exclusiva B2B)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-titanium-400" />
                <span>Instalaciones en toda España y sedes internacionales</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-titanium-400">
          <div>
            © {new Date().getFullYear()} Room for Sport Technologies S.L. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-titanium-700 transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-titanium-700 transition-colors">Privacidad RGPD</a>
            <a href="#" className="hover:text-titanium-700 transition-colors">Seguridad de Datos Médicos</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
