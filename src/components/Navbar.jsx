import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, Activity, Building2, LayoutGrid, Users } from 'lucide-react';

export default function Navbar({ activeVariant, setActiveVariant, onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'corporate', label: 'Visión Corporativa', icon: Building2 },
    { id: 'spaces', label: 'Salas & Espacios', icon: LayoutGrid },
    { id: 'athletes', label: 'Experiencia Empleado', icon: Users },
  ];

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4 pointer-events-none flex justify-center">
        <div className="pointer-events-auto w-full max-w-5xl rounded-full apple-glass shadow-apple-float px-4 py-2.5 flex items-center justify-between transition-all duration-300">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setActiveVariant('corporate')}>
            <div className="w-8 h-8 rounded-full bg-titanium-800 flex items-center justify-center text-white shadow-sm ring-2 ring-white/60">
              <Activity className="w-4 h-4 text-sport-cyan animate-pulse-subtle" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-titanium-850 flex items-center gap-1.5">
                Room for Sport
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 bg-black/[0.04] text-titanium-500 rounded-md">B2B</span>
              </span>
            </div>
          </div>

          {/* Desktop Tab Switcher (Apple Segmented Control) */}
          <nav className="hidden md:flex items-center bg-black/[0.03] p-1 rounded-full border border-black/[0.04]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeVariant === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveVariant(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 flex items-center gap-1.5 ${
                    isActive ? 'text-titanium-900' : 'text-titanium-500 hover:text-titanium-800'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadge"
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                      className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-black/[0.04]"
                    />
                  )}
                  <Icon className={`w-3.5 h-3.5 relative z-10 ${isActive ? 'text-sport-blue' : 'text-titanium-400'}`} />
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions & Button-in-Button CTA */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="relative inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-titanium-800 text-white text-xs font-medium hover:bg-black transition-all duration-300 active:scale-[0.97] shadow-sm group"
            >
              <span className="hidden sm:inline">Diagnóstico Corporativo</span>
              <span className="sm:hidden">Diagnóstico</span>
              <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full bg-black/[0.04] flex items-center justify-center text-titanium-700 active:scale-90 transition-transform"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden apple-glass rounded-3xl p-4 shadow-2xl border border-black/[0.08]"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-titanium-400 mb-3 px-2">
              Explorar Vistas de la Landing
            </div>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeVariant === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveVariant(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between p-3 rounded-2xl text-sm font-medium transition-all ${
                      isActive ? 'bg-white text-titanium-900 shadow-sm border border-black/[0.04]' : 'text-titanium-600 hover:bg-black/[0.02]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isActive ? 'bg-sport-blue/10 text-sport-blue' : 'bg-black/[0.03] text-titanium-500'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{item.label}</span>
                    </div>
                    {isActive && <div className="w-2 h-2 rounded-full bg-sport-blue" />}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t border-black/[0.06]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-2xl bg-titanium-800 text-white text-sm font-medium flex items-center justify-center gap-2 active:scale-98 shadow-sm"
              >
                Solicitar Visita Técnica Gratuita
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
