import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  Search, 
  Link as LinkIcon,
  Globe,
  Share2
} from 'lucide-react';

export default function FrostSkiLanding({ onSwitchToCorporate }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const events = [
    { date: '04', month: 'Oct', location: 'Whistler, Canada', title: 'Alpine Winter Challenge', time: 'Sat 9:00 AM' },
    { date: '14', month: 'Oct', location: 'Zermatt, Switzerland', title: 'Matterhorn Ski Cup', time: 'Fri 8:00 AM' },
    { date: '16', month: 'Oct', location: 'Aspen, USA', title: 'Snow Masters Invitational', time: 'Sat 7:00 AM' },
    { date: '20', month: 'Oct', location: 'Niseko, Japan', title: 'Powder Run Festival', time: 'Thu 09:30 AM' },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0A0B0D] font-sans antialiased overflow-x-hidden selection:bg-[#FF4900] selection:text-white">
      
      {/* Top Floating View Switcher Bar (To seamlessly switch between Dribbble & Room for Sport) */}
      <div className="bg-[#0A0B0D] text-white py-2 px-4 text-xs flex items-center justify-between z-50 relative">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#CDFF00] animate-pulse" />
          <span className="font-semibold uppercase tracking-wider text-[11px] text-[#CDFF00]">
            Dribbble Shot Replica
          </span>
          <span className="text-gray-400 hidden sm:inline">• Réplica fiel de alta fidelidad con animaciones activas</span>
        </div>
        <button
          onClick={onSwitchToCorporate}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-all active:scale-95"
        >
          <span>Ir a Room for Sport (Corporativo)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* HEADER / NAVIGATION */}
      <header className="w-full max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-8 h-8 rounded-full border-2 border-[#FF4900] flex items-center justify-center relative">
            <div className="w-3.5 h-2 rounded-full border-2 border-[#FF4900]" />
          </div>
          <span className="font-black text-xl tracking-tighter text-[#0A0B0D]">
            FROSTSKI
          </span>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-gray-700">
          <a href="#resorts" className="hover:text-black transition-colors">Ski Resorts</a>
          <a href="#lessons" className="hover:text-black transition-colors">Lessons & Training</a>
          <a href="#events" className="hover:text-black transition-colors">Events & Tours</a>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-700 hover:border-black transition-all">
            <span className="text-sm">🇬🇧</span>
            <span>ENG</span>
          </button>
          
          <button className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full border border-gray-300 hover:border-black text-xs font-semibold text-gray-800 transition-all active:scale-95 group">
            <span>Book Now</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </header>

      {/* SECTION 1: HERO */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-6 pb-20 overflow-hidden">
        
        {/* Snow Background Texture */}
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-40 mix-blend-multiply"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=1600&q=80')`
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 z-10 space-y-6 text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl lg:text-[84px] font-black tracking-[-0.04em] text-[#0A0B0D] leading-[0.92] uppercase"
            >
              TURN<br />
              SPEED<br />
              INTO<br />
              THRILL
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm text-gray-600 font-medium max-w-xs leading-relaxed"
            >
              Our skis provide control and speed that elevate your journey across every alpine slope.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF4900] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#e04000] shadow-md transition-all active:scale-95 group">
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Center Dynamic Skier Image */}
          <div className="lg:col-span-3 flex justify-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-72 sm:w-80 h-96 sm:h-[450px]"
            >
              <img
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=85"
                alt="Skier downhill carving"
                className="w-full h-full object-cover rounded-3xl shadow-2xl filter contrast-105"
              />
            </motion.div>
          </div>

          {/* Right Floating Orange Coaching Card */}
          <div className="lg:col-span-3 z-20 flex justify-end">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-xs rounded-3xl bg-[#FF4900] text-white p-5 shadow-xl flex flex-col justify-between text-left space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                  <LinkIcon className="w-4 h-4 text-white" />
                </div>
                <span className="font-extrabold text-xs uppercase tracking-tight leading-tight">
                  SKI COACHING<br />EXCELLENCE
                </span>
              </div>

              {/* Inner Cutout Image */}
              <div className="rounded-2xl overflow-hidden bg-white p-1 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80"
                  alt="Ski coach with Oakley goggles"
                  className="w-full h-44 object-cover rounded-xl"
                />
              </div>

              <div>
                <p className="text-xs font-semibold text-white/90">
                  Precision. Every turn counts.
                </p>
                <div className="pt-3 flex items-center justify-between border-t border-white/20 mt-3 text-xs font-bold uppercase tracking-wider">
                  <span>EXPLORE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </section>

      {/* SECTION 2: GIANT "SNOW RUSH" & DARK BENTO SECTION */}
      <section className="w-full bg-[#0F1012] text-white py-16 px-6 relative rounded-t-[2.5rem] -mt-6">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Giant Cutout Typography */}
          <div className="text-left">
            <h2 
              className="text-7xl sm:text-9xl lg:text-[160px] font-black uppercase tracking-[-0.05em] leading-[0.82] select-none"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&w=1600&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              SNOW<br />
              RUSH
            </h2>
          </div>

          {/* Bento Sub-Cards with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            
            {/* Bento Card 1 */}
            <div className="bg-[#1A1C20] rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/5 hover:border-white/15 transition-all">
              <div className="space-y-3 max-w-xs">
                <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  GLIDE TO PERFECTION
                </div>
                <h3 className="text-base sm:text-lg font-bold tracking-tight uppercase leading-snug">
                  FOCUSED GUIDANCE TO REFINE YOUR MOVEMENTS, BALANCE, AND CONTROL.
                </h3>
              </div>
              <div className="w-full sm:w-44 h-44 rounded-2xl overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1565992441121-4367c2967103?auto=format&fit=crop&w=600&q=80"
                  alt="Ski carving training"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="bg-[#1A1C20] rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/5 hover:border-white/15 transition-all">
              <div className="space-y-3 max-w-xs">
                <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  SKILL ASSESSMENT
                </div>
                <h3 className="text-base sm:text-lg font-bold tracking-tight uppercase leading-snug">
                  EVALUATE YOUR SKI SKILLS TO IDENTIFY STRENGTHS AND AREAS TO IMPROVE.
                </h3>
              </div>
              <div className="w-full sm:w-44 h-44 rounded-2xl overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1482867996988-29ec3a0f1aac?auto=format&fit=crop&w=600&q=80"
                  alt="Skier in red evaluating terrain"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: THIS MONTH'S BEST SKI EVENTS (PANORAMIC SNOWBOARDER) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <div 
          className="relative rounded-[2.5rem] overflow-hidden p-6 sm:p-12 min-h-[550px] flex flex-col lg:flex-row items-center justify-between gap-8 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.05)), url('https://images.unsplash.com/photo-1520255870062-bd79d3865de7?auto=format&fit=crop&w=1600&q=80')`
          }}
        >
          
          {/* Left area: Powder explosion aesthetic space */}
          <div className="lg:w-1/2 text-left self-start lg:self-center">
            <span className="inline-block px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider mb-4 border border-white/20">
              Season 2025/2026 Calendar
            </span>
          </div>

          {/* Right Floating White Event Container */}
          <div className="lg:w-1/2 w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl relative text-left">
            
            {/* Neon Lime Circular Action Badge */}
            <div className="absolute -top-6 -right-4 sm:-right-6 w-14 h-14 rounded-full bg-[#CDFF00] text-black flex items-center justify-center shadow-lg active:scale-95 transition-transform cursor-pointer group">
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 leading-tight">
                This Month's Best<br />Ski Events
              </h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed max-w-md">
                From thrilling downhill races to freestyle challenges — experience the excitement on every slope!
              </p>
            </div>

            {/* 2x2 Events Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-gray-100">
              {events.map((ev, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-black text-white flex flex-col items-center justify-center shrink-0">
                    <span className="text-[9px] uppercase tracking-wider text-gray-400 font-mono">{ev.month}</span>
                    <span className="text-base font-bold leading-none">{ev.date}</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">{ev.location}</div>
                    <div className="text-[11px] text-gray-500 font-medium">{ev.title}</div>
                    <div className="text-[10px] text-gray-400 font-mono mt-0.5">{ev.time}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Link at bottom */}
            <div className="pt-4 flex items-center justify-between text-xs font-bold text-gray-900">
              <button className="flex items-center gap-1.5 hover:text-[#FF4900] transition-colors">
                <span>View all upcoming ski events</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: 3-COLUMN FEATURE CARDS */}
      <section className="w-full max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Card 1 */}
          <div className="rounded-3xl bg-white p-5 border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
            <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80"
                alt="Mountain peaks"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4 flex flex-col justify-between h-24 flex-1">
              <h4 className="text-sm font-bold text-gray-900 leading-snug">
                Explore The<br />Slopes
              </h4>
              <button className="inline-flex items-center gap-1 text-[11px] font-bold text-gray-700 hover:text-black transition-colors">
                <span>Learn More</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl bg-white p-5 border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
            <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=400&q=80"
                alt="Ski gear"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4 flex flex-col justify-between h-24 flex-1">
              <h4 className="text-sm font-bold text-gray-900 leading-snug">
                Gear Up For<br />Winter
              </h4>
              <button className="inline-flex items-center gap-1 text-[11px] font-bold text-gray-700 hover:text-black transition-colors">
                <span>Learn More</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 3: Neon Lime Deals Card */}
          <div className="rounded-3xl bg-[#D4F724] p-5 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
            <div className="w-24 h-24 rounded-2xl bg-white/30 flex items-center justify-center shrink-0">
              <span className="text-5xl font-black text-black select-none">%</span>
            </div>
            <div className="ml-4 flex flex-col justify-between h-24 flex-1">
              <h4 className="text-sm font-bold text-gray-900 leading-snug">
                Season Deals<br />Now On
              </h4>
              <button className="inline-flex items-center gap-1 text-[11px] font-bold text-gray-800 hover:text-black transition-colors">
                <span>Learn More</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: NEWSLETTER BANNER (SLOPES INSIDER CLUB) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-12">
        <div 
          className="relative rounded-[2.5rem] overflow-hidden p-8 sm:p-14 bg-cover bg-center text-left text-white shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(10, 11, 13, 0.75), rgba(10, 11, 13, 0.2)), url('https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&w=1600&q=80')`
          }}
        >
          <div className="max-w-lg space-y-4">
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight uppercase leading-none">
              Join the Slopes<br />Insider Club
            </h3>
            <p className="text-xs sm:text-sm text-gray-200">
              Receive ski tips, season highlights, and exclusive offers every month directly to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="pt-2 flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                required
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3 rounded-full bg-white text-gray-900 text-xs font-medium focus:outline-none shadow-md"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#FF4900] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#e04000] shadow-md transition-all active:scale-95 whitespace-nowrap"
              >
                SUBSCRIBE ↗
              </button>
            </form>

            {subscribed && (
              <div className="text-xs text-[#CDFF00] font-semibold flex items-center gap-1.5 pt-1">
                <CheckCircle2 className="w-4 h-4" /> Thank you for subscribing to FrostSki Insider Club!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-7xl mx-auto px-6 pt-12 pb-16 text-left border-t border-gray-200">
        
        {/* Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 text-xs">
          
          <div>
            <div className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-[11px]">Experiences</div>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-black">Ski Lessons</a></li>
              <li><a href="#" className="hover:text-black">Mountain Tours</a></li>
              <li><a href="#" className="hover:text-black">Equipment Rental</a></li>
              <li><a href="#" className="hover:text-black">Seasonal Packages</a></li>
              <li><a href="#" className="hover:text-black">Lift Passes</a></li>
              <li><a href="#" className="hover:text-black">All Destinations</a></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-[11px]">For Skiers</div>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-black">How to Start Skiing</a></li>
              <li><a href="#" className="hover:text-black">Technique & Safety Tips</a></li>
              <li><a href="#" className="hover:text-black">Gear & Maintenance Guide</a></li>
              <li><a href="#" className="hover:text-black">Skill Improvement Programs</a></li>
              <li><a href="#" className="hover:text-black">Event Schedule</a></li>
              <li><a href="#" className="hover:text-black">Book a Coach</a></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-[11px]">Support</div>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-black">Booking & Payment</a></li>
              <li><a href="#" className="hover:text-black">Cancellations & Refunds</a></li>
              <li><a href="#" className="hover:text-black">Insurance & Safety Info</a></li>
              <li><a href="#" className="hover:text-black">Track Your Reservation</a></li>
              <li><a href="#" className="hover:text-black">Gift Cards</a></li>
              <li><a href="#" className="hover:text-black">FAQs</a></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-[11px]">About</div>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-black">Our Story</a></li>
              <li><a href="#" className="hover:text-black">Sustainability</a></li>
              <li><a href="#" className="hover:text-black">Join as Coach</a></li>
              <li><a href="#" className="hover:text-black">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-[11px]">Social Media</div>
            <div className="flex items-center gap-2 text-gray-600 mt-2">
              <a href="#" className="w-7 h-7 rounded-full bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center transition-colors text-[11px] font-bold" aria-label="Facebook">f</a>
              <a href="#" className="w-7 h-7 rounded-full bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center transition-colors text-[11px] font-bold" aria-label="Instagram">ig</a>
              <a href="#" className="w-7 h-7 rounded-full bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center transition-colors text-[11px] font-bold" aria-label="X">𝕏</a>
              <a href="#" className="w-7 h-7 rounded-full bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center transition-colors text-[11px] font-bold" aria-label="LinkedIn">in</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Address & Legal */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-gray-400">
          <div>
            PeakHub, 123 Club Road, Greenwich, London SE10 8NY, United Kingdom
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Term of service</a>
            <span>All right reserved @ FrostSki2025</span>
          </div>
        </div>

      </footer>

    </div>
  );
}
