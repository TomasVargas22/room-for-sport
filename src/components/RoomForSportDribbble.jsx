import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Activity, 
  Building2, 
  Dumbbell, 
  HeartPulse, 
  Calendar, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  MapPin, 
  Award,
  ChevronRight,
  Flame,
  Percent,
  Check,
  Smartphone,
  Layers,
  Shield,
  Zap,
  Search,
  Plus,
  Minus,
  HelpCircle,
  FileCheck2,
  Sliders,
  Play,
  Sun,
  Moon,
  Globe,
  Menu,
  ArrowUp,
  Star,
  MessageSquare,
  Phone,
  Mail,
  AlertCircle,
  BookOpen,
  UserCheck,
  LogIn,
  LogOut,
  Filter,
  Trophy,
  Target,
  BarChart3,
  Bookmark,
  SlidersHorizontal,
  Share2,
  QrCode,
  Timer,
  DollarSign,
  RefreshCw
} from 'lucide-react';

// Crisp, lightweight inline SVGs for Social Media Buttons (RRSS)
const SocialLinkedin = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const SocialInstagram = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const SocialTwitter = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const SocialYoutube = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

// 16. BILINGUAL DICTIONARY (ES / EN)
const dict = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      workouts: 'Rutinas',
      memberships: 'Membresías',
      dashboard: 'Mi Panel',
      tips: 'Consejos Deportivos',
      contact: 'Contacto',
      login: 'Iniciar Sesión',
      signup: 'Registrarse',
      studios: 'Estudios Modulares',
      tech: 'App & Datos',
      events: 'Torneos',
      roi: 'Calculadora ROI',
      demo: 'Agendar Demo'
    },
    hero: {
      badge: 'Plataforma Deportiva Integral & In-Office',
      title: 'Potencia tu Cuerpo y Mente con Room for Sport',
      sub: 'La plataforma definitiva para deportes de equipo e individuales, membresías de bienestar corporativo y rutinas de entrenamiento personalizadas.',
      ctaPrimary: 'Explorar Membresías',
      ctaSecondary: 'Comienza tu Viaje',
      stats: {
        companies: 'Atletas & Empresas Activas',
        absence: 'Menos Estrés & Absentismo',
        sound: 'Aislamiento Acústico',
        tax: 'Membresías Flexibles'
      }
    },
    memberships: {
      badge: 'Planes Transparentes & Flexibles',
      title: 'Elige tu Plan de Membresía',
      desc: 'Opciones de alto rendimiento para atletas individuales y empresas comprometidas con la salud física y mental de sus equipos.',
      individual: {
        name: 'Atleta Individual',
        price: '$15',
        period: '/ mes',
        desc: 'Acceso total a seguimiento de entrenamientos, biblioteca de drills, planes personalizados y comunidad de atletas.',
        cta: 'Elegir Individual'
      },
      corporate: {
        name: 'Membresía Corporate Team',
        price: '$45',
        period: '/ colaborador / mes',
        desc: 'Salas modulares insonorizadas en tu sede, entrenadores titulados in-office, torneos inter-empresa y telemetría de salud laboral.',
        cta: 'Solicitar Acceso Corporativo'
      }
    },
    services: {
      badge: 'Disciplinas & Rendimiento',
      title: 'Servicios & Actividades Deportivas',
      desc: 'Explora nuestro catálogo deportivo dividido en deportes de equipo, disciplinas individuales y planes de entrenamiento de alta intensidad.',
      filters: {
        all: 'Todos los Deportes',
        team: 'Deportes de Equipo',
        individual: 'Deportes Individuales',
        workouts: 'Rutinas de Entrenamiento'
      }
    },
    dashboard: {
      badge: 'Seguimiento de Rendimiento',
      welcome: '¡Bienvenido de nuevo, Tomás Kax!',
      sub: 'Tu centro de mando deportivo personal. Registra tus sesiones de hoy, analiza tus métricas de recuperación y calibra tus objetivos semanales.',
      widget1Title: 'Mi Diario de Entrenamiento',
      widget1Sub: 'Registrar Entrenamiento de Hoy',
      widget2Title: 'Progreso Físico & Objetivos',
      widget2Sub: 'Métricas, Racha y Recuperación',
      widget3Title: 'Configuración & Personalización',
      widget3Sub: 'Metas Semanales y Preferencias'
    },
    tips: {
      badge: 'Conocimiento & Alto Rendimiento',
      title: 'Consejos Deportivos y Consejos de Expertos',
      desc: 'Estrategias probadas de fisiología deportiva, nutrición avanzada y fortaleza mental para llevar tu nivel atlético al siguiente escalón.',
      filters: {
        all: 'Todos los Artículos',
        performance: 'Rendimiento & Entrenamiento',
        nutrition: 'Nutrición & Bienestar',
        mindset: 'Mentalidad & Dinámica de Equipo'
      }
    },
    studios: {
      badge: 'Soluciones Llave en Mano',
      title: 'Espacios Diseñados para Rendir y Recuperar',
      desc: 'Cuatro formatos modulares concebidos para integrarse en cualquier edificio de oficinas sin obras invasivas ni ruidos.',
      cta: 'Solicitar Render 3D de esta Sala'
    },
    testimonials: {
      badge: 'Casos Reales B2B & Atletas',
      title: 'Avalado por Directores de Personas y Deportistas',
      desc: 'Equipos y profesionales que transformaron su condición física y bienestar con Room for Sport.'
    },
    contact: {
      badge: 'Atención Inmediata & Diagnóstico',
      title: 'Ponte en Contacto con Nosotros',
      desc: 'Ya sea para una membresía individual de $15/mes o para diseñar la sala deportiva de tu empresa con plan de $45/colaborador, nuestro equipo te asesorará en menos de 24 horas.',
      nameLabel: 'Nombre Completo',
      namePlaceholder: 'Ej. Tomás Kax / Ana Gómez',
      emailLabel: 'Email de Contacto',
      emailPlaceholder: 'tomas@ejemplo.com',
      companyLabel: 'Empresa u Organización (Opcional para atletas)',
      companyPlaceholder: 'Atleta Individual / Tu Empresa S.L.',
      phoneLabel: 'Teléfono Directo',
      phonePlaceholder: '+506 8888 8888 / +34 600 000 000',
      spaceLabel: 'Interés Principal',
      spaceOpt1: 'Membresía Individual ($15 / mes)',
      spaceOpt2: 'Membresía Corporate Team ($45 / emp / mes)',
      spaceOpt3: 'Instalación de Sala Modular en Oficinas (30-200 m²)',
      spaceOpt4: 'Consulta sobre Drills y Rutinas',
      messageLabel: 'Mensaje o Metas Deportivas',
      messagePlaceholder: 'Cuéntanos cuáles son tus disciplinas de interés o tus objetivos...',
      submitBtn: 'Enviar Mensaje a Room for Sport',
      submitting: 'Enviando mensaje...',
      successMsg: '¡Mensaje recibido! Un asesor de Room for Sport te contactará en breve.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      workouts: 'Workouts',
      memberships: 'Memberships',
      dashboard: 'My Dashboard',
      tips: 'Sports Tips',
      contact: 'Contact Us',
      login: 'Log In',
      signup: 'Sign Up',
      studios: 'Modular Studios',
      tech: 'App & Data',
      events: 'Tournaments',
      roi: 'ROI Calculator',
      demo: 'Book Demo'
    },
    hero: {
      badge: 'Comprehensive Athletic & In-Office Platform',
      title: 'Empower Your Body and Mind with Room for Sport',
      sub: 'The ultimate platform for team and individual sports, corporate wellness memberships, and personalized workout routines.',
      ctaPrimary: 'Explore Memberships',
      ctaSecondary: 'Start Your Journey',
      stats: {
        companies: 'Active Athletes & Companies',
        absence: 'Lower Stress & Sick Leave',
        sound: 'Acoustic Soundproofing',
        tax: 'Flexible Memberships'
      }
    },
    memberships: {
      badge: 'Transparent & Scalable Tiers',
      title: 'Choose Your Membership Plan',
      desc: 'High-performance options for individual athletes and companies committed to team vitality.',
      individual: {
        name: 'Individual Athlete',
        price: '$15',
        period: '/ month',
        desc: 'Full access to daily workout logs, drill library, personalized training plans, and athlete community.',
        cta: 'Choose Individual'
      },
      corporate: {
        name: 'Corporate Team Membership',
        price: '$45',
        period: '/ employee / month',
        desc: 'Turnkey acoustic sports studios in your headquarters, resident coaches, inter-company tournaments, and HR health telemetry.',
        cta: 'Request Corporate Access'
      }
    },
    services: {
      badge: 'Disciplines & High Performance',
      title: 'Services & Activities',
      desc: 'Explore our comprehensive sports catalog spanning team leagues, individual disciplines, and periodized training workouts.',
      filters: {
        all: 'All Sports',
        team: 'Team Sports',
        individual: 'Individual Sports',
        workouts: 'Workouts'
      }
    },
    dashboard: {
      badge: 'Performance Telemetry',
      welcome: 'Welcome back, Tomás Kax!',
      sub: 'Your personal athletic command center. Log today’s session, review recovery readiness, and calibrate weekly targets.',
      widget1Title: 'My Training Diary',
      widget1Sub: 'Log Today’s Workout',
      widget2Title: 'Physical Progress & Goals',
      widget2Sub: 'Biometrics, Streak & Recovery',
      widget3Title: 'Personalization Settings',
      widget3Sub: 'Weekly Targets & Preferences'
    },
    tips: {
      badge: 'Knowledge & Elite Guidance',
      title: 'Sports Tips & Expert Advice',
      desc: 'Evidence-based strategies on sports physiology, performance nutrition, and mental resilience to sharpen your athletic edge.',
      filters: {
        all: 'All Articles',
        performance: 'Performance & Training',
        nutrition: 'Nutrition & Wellness',
        mindset: 'Mindset & Team Dynamics'
      }
    },
    studios: {
      badge: 'Turnkey Architectural Solutions',
      title: 'Spaces Engineered to Perform and Recover',
      desc: 'Four modular formats designed to integrate into any corporate building without invasive construction or noise pollution.',
      cta: 'Request 3D Render for this Studio'
    },
    testimonials: {
      badge: 'Real B2B & Athlete Case Studies',
      title: 'Trusted by People Leaders & Athletes Alike',
      desc: 'Teams and competitors who elevated their physical stamina and work-life balance with Room for Sport.'
    },
    contact: {
      badge: '24/7 Dedicated Support',
      title: 'Get in Touch with Us',
      desc: 'Whether you want an Individual Athlete plan at $15/mo or an office studio buildout at $45/emp/mo, our specialists respond within 24 hours.',
      nameLabel: 'Full Name',
      namePlaceholder: 'E.g. Tomás Kax / Ana Gómez',
      emailLabel: 'Contact Email',
      emailPlaceholder: 'tomas@example.com',
      companyLabel: 'Company / Organization (Optional for athletes)',
      companyPlaceholder: 'Individual Athlete / Your Company Inc.',
      phoneLabel: 'Direct Phone',
      phonePlaceholder: '+1 (555) 000-0000 / +506 8888 8888',
      spaceLabel: 'Primary Interest',
      spaceOpt1: 'Individual Athlete ($15 / month)',
      spaceOpt2: 'Corporate Team Membership ($45 / employee / month)',
      spaceOpt3: 'Turnkey In-Office Modular Studio (30-200 m²)',
      spaceOpt4: 'Drills & Routine Guidance Inquiry',
      messageLabel: 'Message or Athletic Goals',
      messagePlaceholder: 'Tell us about your sports focus, routine goals, or team requirements...',
      submitBtn: 'Send Message to Room for Sport',
      submitting: 'Sending message...',
      successMsg: 'Message received! A Room for Sport representative will contact you shortly.'
    }
  }
};

// 18. VERIFIED CORPORATE TESTIMONIALS DATA
const corporateTestimonials = [
  {
    name: 'Marta Salgado',
    role: 'Chief People Officer',
    roleEn: 'Chief People Officer',
    company: 'Santander Global Tech',
    metric: '-38% Bajas Médicas',
    metricEn: '-38% Sick Leave',
    quote: 'Instalar el Active Reset Studio fue la mejor decisión de bienestar laboral del año. En solo un trimestre redujimos el absentismo por lumbalgias y contracturas un 38%, y el NPS de empleado subió a 9.4/10.',
    quoteEn: 'Installing the Active Reset Studio was our best workplace wellness decision this year. In just one quarter, musculoskeletal absenteeism fell by 38%, and our employee NPS surged to 9.4/10.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&q=80',
    stars: 5,
    location: 'Sede Madrid • 450 empleados',
    locationEn: 'Madrid HQ • 450 employees'
  },
  {
    name: 'Gonzalo Echeverría',
    role: 'VP Workplace & Facilities',
    roleEn: 'VP Workplace & Facilities',
    company: 'Cabify Headquarters',
    metric: '12 Días de Montaje Cero Ruido',
    metricEn: '12-Day Zero-Noise Build',
    quote: 'Teníamos pánico al ruido porque los despachos ejecutivos están contiguos a la sala. La insonorización certificada Clase A absorbió todo impacto. El equipo montó todo en 12 días sin parar la actividad de la oficina.',
    quoteEn: 'We were concerned about noise transmission to neighboring executive offices. The Class A acoustic isolation absorbed every decibel. The crew assembled everything in 12 days without disrupting workflow.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=240&q=80',
    stars: 5,
    location: 'Sede Barcelona • 280 empleados',
    locationEn: 'Barcelona HQ • 280 employees'
  },
  {
    name: 'Dra. Lucía Valenzuela',
    role: 'Directora de Salud Laboral',
    roleEn: 'Occupational Health Director',
    company: 'Sanitas B2B & Prevención',
    metric: '100% Gasto Deducible',
    metricEn: '100% Tax Deductible',
    quote: 'El protocolo de 15 minutos guiado por fisioterapeutas colegiados combate directamente el sedentarismo frente a las pantallas. Es la inversión en salud preventiva con mayor retorno financiero directo que hemos auditado.',
    quoteEn: 'The 15-minute routine guided by certified sports physical therapists directly combats computer sedentary strain. It is the preventive wellness investment with the highest verified fiscal ROI we have audited.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&q=80',
    stars: 5,
    location: 'Sede Bilbao • 190 empleados',
    locationEn: 'Bilbao HQ • 190 employees'
  }
];

// OFFICIAL SPECIFICATION: 7 SERVICES & ACTIVITIES (Team Sports, Individual Sports, Workouts)
const servicesData = [
  // Team Sports
  {
    id: 'soccer',
    category: 'team',
    name: 'Soccer',
    nameEs: 'Fútbol Sala & 5v5',
    categoryName: 'Team Sports',
    categoryNameEs: 'Deportes de Equipo',
    badge: 'Torneos & Ligas',
    badgeEn: 'Leagues & Cups',
    intensity: 'Alta',
    intensityEn: 'High',
    duration: '60 min',
    calories: '650 kcal',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    description: 'Partidos 5v5 en canchas acústicas inteligentes con registro de goles, asistencias y mapa de calor. Clínicas tácticas semanales y ligas inter-departamentales.',
    descriptionEn: '5v5 smart-pitch matches with goal, assist, and heat-map tracking. Weekly tactical clinics and competitive team leagues.',
    drills: [
      'Circuito de agilidad con conos y remate a primer toque (15 min)',
      'Posesión en espacio reducido 4v2 con límite de dos toques (20 min)',
      'Simulación de partido 5v5 con cronómetro reglamentario (25 min)'
    ],
    drillsEn: [
      'Agility cone circuit with one-touch finishing drill (15 min)',
      'Small-sided 4v2 possession drill with two-touch limit (20 min)',
      '5v5 match simulation with official game clock (25 min)'
    ],
    features: ['Superficie anti-impacto certificada FIFA', 'Registro de estadísticas en app', 'Balones térmicos y petos lavables', 'Arbitraje federado opcional'],
    featuresEn: ['FIFA-certified anti-shock synthetic surface', 'In-app match statistics and heatmaps', 'Thermal match balls and squad bibs', 'Certified league referees available']
  },
  {
    id: 'basketball',
    category: 'team',
    name: 'Basketball',
    nameEs: 'Baloncesto 3v3',
    categoryName: 'Team Sports',
    categoryNameEs: 'Deportes de Equipo',
    badge: 'Pick & Roll Clinics',
    badgeEn: 'Pick & Roll Clinics',
    intensity: 'Muy Alta',
    intensityEn: 'Very High',
    duration: '45 - 60 min',
    calories: '580 kcal',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    description: 'Media cancha acústica con tablero de vidrio templado reglamentario, máquina lanza-balones automática y drills de tiro con análisis de parábola.',
    descriptionEn: 'Acoustic half-court with regulation tempered-glass backboard, automated shooting machine, and shot-arc trajectory analysis.',
    drills: [
      'Spot-up shooting: 50 tiros desde 5 posiciones del perímetro (15 min)',
      'Pick & Roll reads: toma de decisiones ante defensor flotante (15 min)',
      'Torneo King of the Court 3v3 a 21 puntos (20 min)'
    ],
    drillsEn: [
      'Spot-up perimeter shooting: 50 shots from 5 key zones (15 min)',
      'Pick & Roll reads against hedge defenders (15 min)',
      'King of the Court 3v3 tournament to 21 points (20 min)'
    ],
    features: ['Máquina lanza-balones programable', 'Tablero amortiguado de cristal templado', 'Sensores de arco y velocidad de lanzamiento', 'Suelo elástico con absorción de impacto'],
    featuresEn: ['Programmable automatic shooting machine', 'Damped regulation glass backboard', 'Shot arc trajectory and speed sensors', 'Shock-absorbing sprung hardwood floor']
  },
  {
    id: 'volleyball',
    category: 'team',
    name: 'Volleyball',
    nameEs: 'Voleibol & Saltabilidad',
    categoryName: 'Team Sports',
    categoryNameEs: 'Deportes de Equipo',
    badge: 'Salto & Reflejos',
    badgeEn: 'Vertical Leap & Reflexes',
    intensity: 'Alta',
    intensityEn: 'High',
    duration: '60 min',
    calories: '520 kcal',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80',
    description: 'Entrenamientos dinámicos de salto vertical, colocación, remate y bloqueo. Desarrolla la comunicación rápida, visión espacial y sincronización colectiva.',
    descriptionEn: 'Dynamic vertical leap, setting, spiking, and blocking training. Fosters fast communication, spatial awareness, and collective synergy.',
    drills: [
      'Pliometría en cajón y despegue para bloqueo en red (15 min)',
      'Recepción dirigida de saque flotante en parejas (15 min)',
      'Secuencia de ataque K1: Pase -> Colocación -> Remate cruzado (20 min)'
    ],
    drillsEn: [
      'Plyometric box jumps and net blocking transitions (15 min)',
      'Partner target floating serve reception drill (15 min)',
      'K1 Attack phase: Pass -> Set -> Cross-court Spike (20 min)'
    ],
    features: ['Red con tensor micrométrico regulable', 'Suelo elástico vinílico con alto retorno de energía', 'Sensores de altura de salto vertical', 'Clínicas para todos los niveles'],
    featuresEn: ['Precision micrometer tension adjustable net', 'High energy-return vinyl sports surface', 'Vertical jump height telemetry sensors', 'Coached clinics for all skill levels']
  },
  // Individual Sports
  {
    id: 'swimming',
    category: 'individual',
    name: 'Swimming',
    nameEs: 'Natación a Contracorriente',
    categoryName: 'Individual Sports',
    categoryNameEs: 'Deportes Individuales',
    badge: 'Cero Impacto Articular',
    badgeEn: 'Zero Joint Impact',
    intensity: 'Moderada / Alta',
    intensityEn: 'Moderate / High',
    duration: '45 min',
    calories: '510 kcal',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
    description: 'Canales de nado a contracorriente con flujo continuo ajustable. Telemetría de brazadas por minuto, ritmo cardíaco submarino y corrección biomecánica con espejo de fondo.',
    descriptionEn: 'Endless resistance swimming flumes with adjustable laminar flow. Stroke cadence telemetry, underwater heart-rate tracking, and biomechanical review.',
    drills: [
      'Calentamiento aeróbico a velocidad de crucero 2.5 km/h (10 min)',
      'Series de brazada con palas y pull buoy a 4.0 km/h (20 min)',
      'Intervalos HIIT de sprint submarino y recuperación activa (15 min)'
    ],
    drillsEn: [
      'Aerobic warm-up at 2.5 km/h laminar cruising speed (10 min)',
      'Pull-buoy and paddle stroke intervals at 4.0 km/h (20 min)',
      'HIIT flume sprint bursts with active float recovery (15 min)'
    ],
    features: ['Flujo laminar regulable de 0 a 10 km/h', 'Agua salina ionizada sin olor a cloro', 'Cámara sumergida para análisis biomecánico', 'Pulsómetro óptico acuático'],
    featuresEn: ['Laminar flow regulator from 0 to 10 km/h', 'Saltwater ionization with zero chlorine scent', 'Submerged high-speed biomechanics camera', 'Optical aquatic heart rate telemetry']
  },
  {
    id: 'chess',
    category: 'individual',
    name: 'Chess',
    nameEs: 'Ajedrez de Competición & Blitz',
    categoryName: 'Individual Sports',
    categoryNameEs: 'Deportes Individuales',
    badge: 'Gimnasia Cognitiva',
    badgeEn: 'Cognitive Athletics',
    intensity: 'Cognitiva Alta',
    intensityEn: 'High Cognitive',
    duration: '30 - 60 min',
    calories: '180 kcal',
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80',
    description: 'Atletismo mental de alto nivel. Tableros electrónicos sensoriales DGT, análisis en vivo con módulos de IA y torneos Blitz de 5 minutos para entrenar la toma de decisiones bajo presión extrema.',
    descriptionEn: 'Elite cognitive athletics. Sensory DGT e-boards, real-time AI engine evaluation, and 5-min blitz tournaments to sharpen split-second decision-making.',
    drills: [
      'Resolución de 20 patrones tácticos cronometrados (Puzzle Rush) (15 min)',
      'Estudio de finales de torres con evaluación algorítmica (15 min)',
      '3 Partidas Blitz (3+2) con reporte post-game de imprecisiones (30 min)'
    ],
    drillsEn: [
      'Timed tactical pattern solving (Puzzle Rush) (15 min)',
      'Rook endgame drills with Stockfish engine analysis (15 min)',
      '3 Blitz (3+2) matches with post-game accuracy reports (30 min)'
    ],
    features: ['Tableros sensoriales de madera noble DGT', 'Integración con módulos de análisis Stockfish', 'Ranking Elo interno sincronizado', 'Ambiente acústico en absoluto silencio'],
    featuresEn: ['Official DGT sensory wooden e-boards', 'Integrated Stockfish AI engine evaluation', 'Synchronized live Elo ranking system', 'Acoustic whisper-quiet tournament lounge']
  },
  {
    id: 'skating',
    category: 'individual',
    name: 'Skating',
    nameEs: 'Patinaje & Inline Agility',
    categoryName: 'Individual Sports',
    categoryNameEs: 'Deportes Individuales',
    badge: 'Equilibrio & Estabilidad',
    badgeEn: 'Balance & Core Agility',
    intensity: 'Alta',
    intensityEn: 'High',
    duration: '45 min',
    calories: '490 kcal',
    image: 'https://images.unsplash.com/photo-1563299796-b729d0af54a5?auto=format&fit=crop&w=800&q=80',
    description: 'Pistas de resina pulida de baja fricción y circuitos de conos de agilidad. Fortalece el tren inferior, estabilizadores de cadera y tobillos mientras disfrutas la velocidad fluida.',
    descriptionEn: 'Low-friction polished resin tracks and agility cone circuits. Strengthens lower body, stabilizer tendons, and core balance while enjoying pure momentum.',
    drills: [
      'Circuito de conos en slalom a una pierna para propiocepción (15 min)',
      'Práctica de frenada de seguridad en T y giros cerrados (15 min)',
      'Carrera continua de resistencia en pista circular (15 min)'
    ],
    drillsEn: [
      'Single-leg slalom cone circuit for proprioception (15 min)',
      'T-stop emergency braking and tight crossover turns (15 min)',
      'Continuous endurance laps on indoor track (15 min)'
    ],
    features: ['Superficie de resina antibacteriana de alta tracción', 'Protecciones anatómicas ergonómicas D3O', 'Patinetes e inline skates profesionales', 'Talleres técnicos para todos los niveles'],
    featuresEn: ['High-traction antibacterial polished resin track', 'Ergonomic D3O impact protective gear', 'Professional modular inline skates', 'Technique clinics for beginners and pros']
  },
  // Workouts
  {
    id: 'workouts',
    category: 'workouts',
    name: 'Workout Routines & Training Plans',
    nameEs: 'Rutinas de Entrenamiento & Fuerza',
    categoryName: 'Workouts',
    categoryNameEs: 'Rutinas de Entrenamiento',
    badge: 'Fuerza & Hipertrofia',
    badgeEn: 'Strength & Hypertrophy',
    intensity: 'Adaptable',
    intensityEn: 'Scalable',
    duration: '30 - 60 min',
    calories: '600 kcal',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    description: 'Programación científica con periodización ondulatoria, movilidad articular, sobrecarga progresiva y protocolos funcionales HIIT adaptados tanto a novatos como a atletas experimentados.',
    descriptionEn: 'Periodized functional strength, joint mobility, metabolic HIIT, and postural correction routines with progressive overload logging.',
    drills: [
      'Movilidad articular de cadera y activación torácica (10 min)',
      'Bloque de fuerza principal: Sentadilla búlgara, dominadas y press militar (30 min)',
      'Finisher metabólico Tabata 20s/10s con kettlebells y battle ropes (10 min)'
    ],
    drillsEn: [
      'Hip mobility drills and thoracic spine priming (10 min)',
      'Main strength block: Bulgarian split squats, pull-ups, overhead press (30 min)',
      'Metabolic Tabata finisher 20s/10s with kettlebells and battle ropes (10 min)'
    ],
    features: ['Sobrecarga progresiva cuantificada en diario', 'Pesas libres de uretano y poleas dobles funcionales', 'Supervisión de entrenadores certificados', 'Planes de 3 a 5 días por semana'],
    featuresEn: ['Progressive overload tracking in personal diary', 'Urethane free weights and dual functional cables', 'Certified resident strength coach supervision', 'Tailored 3 to 5 day weekly splits']
  }
];

// OFFICIAL SPECIFICATION: 7 SPORTS TIPS & EXPERT ADVICE ARTICLES
const tipsArticles = [
  // Performance & Training
  {
    id: 'mental-game',
    category: 'performance',
    title: 'Mastering the Mental Game: How Visualization Improves Performance',
    titleEs: 'Dominando el Juego Mental: Cómo la Visualización Mejora tu Rendimiento',
    categoryLabel: 'Performance & Training',
    categoryLabelEs: 'Rendimiento & Entrenamiento',
    readTime: '4 min',
    author: 'Dr. Marcus Vance (Psicólogo Deportivo)',
    authorRole: 'Head of Mental Conditioning',
    authorRoleEs: 'Director de Preparación Mental',
    date: 'Updated 2026',
    dateEs: 'Actualizado 2026',
    excerpt: 'Descubre por qué los atletas olímpicos ensayan mentalmente cada movimiento antes de competir y cómo la neuro-activación potencia la fuerza y la precisión motora.',
    excerptEn: 'Discover why Olympic athletes practice mental reps before stepping onto the field and how neuro-priming enhances muscle recruitment.',
    content: [
      'La ciencia demuestra que imaginar vívidamente un movimiento activa los mismos circuitos neuronales en la corteza motora que la ejecución física real.',
      'Mediante resonancia magnética funcional (fMRI), los neurocientíficos han comprobado que la visualización repetida fortalece las vías sinápticas sin generar fatiga muscular ni sobrecargar los tendones.',
      'Protocolo de 3 Pasos para tu Sesión:\n1. Anclaje Sensorial (1 min): Cierra los ojos, respira hondo y recrea la sensación del balón en tus manos o el sonido de la cancha.\n2. Ejecución en Primera Persona (2 min): Visualiza el tiro o el sprint exactamente desde tus propios ojos, prestando atención al ángulo de la muñeca y el equilibrio.\n3. Superación de la Presión (1 min): Imagina una situación adversa (un tiro libre con el marcador en contra) y visualízate ejecutando con calma imperturbable.',
      'Conclusión: El entrenamiento físico te da la capacidad de competir; la precisión mental determina quién se lleva la victoria.'
    ],
    contentEn: [
      'Sports neuroscience proves that vividly rehearsing physical movement activates the exact same motor cortex neural circuits as physical execution.',
      'Using functional magnetic resonance imaging (fMRI), neuroscientists verified that repeated visualization reinforces synaptic pathways without inducing physical muscular fatigue.',
      '3-Step Protocol for Your Session:\n1. Sensory Anchoring (1 min): Close your eyes, breathe deeply, and recreate the texture of the ball in your hands or the court acoustics.\n2. First-Person Execution (2 min): Visualize the shot or sprint through your own eyes, focusing on wrist flick angle and kinetic balance.\n3. Pressure Simulation (1 min): Picture an adverse crunch-time scenario (a critical free throw) and imagine yourself executing with absolute calm.',
      'Conclusion: Physical conditioning gives you the tools to compete; mental conditioning determines who wins.'
    ]
  },
  {
    id: 'smart-recovery',
    category: 'performance',
    title: 'Smart Recovery: Why Rest Days Are Your Secret Weapon',
    titleEs: 'Recuperación Inteligente: Por Qué los Días de Descanso Son tu Arma Secreta',
    categoryLabel: 'Performance & Training',
    categoryLabelEs: 'Rendimiento & Entrenamiento',
    readTime: '5 min',
    author: 'Elena Rostova (Fisioterapeuta Colegiada)',
    authorRole: 'Specialist in Sports Recovery',
    authorRoleEs: 'Especialista en Fisioterapia Deportiva',
    date: 'Updated 2026',
    dateEs: 'Actualizado 2026',
    excerpt: 'Los músculos no crecen durante el esfuerzo; se micro-rompen al entrenar y se hipertrofian en el descanso reparador. Domina la curva de supercompensación.',
    excerptEn: 'Muscles do not grow in the gym; they tear down in training and rebuild during systemic rest. Master the active recovery equation.',
    content: [
      'Cada sesión de alta intensidad genera microrroturas fibrilares y agota las reservas de glucógeno. Si no otorgas entre 36 y 48 horas de recuperación al grupo muscular estimulado, caes en sobreentrenamiento crónico.',
      'Diferencia entre Descanso Pasivo y Recuperación Activa:\n• Descanso Pasivo: Cero actividad física exigente. Indispensable tras torneos extenuantes o semanas de volumen máximo.\n• Recuperación Activa: Trabajo cardiovascular en Zona 1 (menos del 60% de tu frecuencia cardíaca máxima), liberación miofascial con foam roller o natación suave. Acelera la recirculación sanguínea y la eliminación de desechos metabólicos sin daño tisular.',
      'El papel del Sueño Profundo: El pico de secreción de hormona del crecimiento (GH) ocurre durante la fase de sueño de ondas lentas (Delta). Asegura de 7 a 9 horas en una habitación fresca y totalmente oscura.'
    ],
    contentEn: [
      'Every high-intensity session produces microscopic myofibrillar tears and depletes muscular glycogen. Without 36 to 48 hours of recovery, you invite overtraining syndrome.',
      'Passive Rest vs. Active Recovery:\n• Passive Rest: Zero rigorous physical output. Crucial following taxing tournaments or peak volume blocks.\n• Active Recovery: Zone 1 cardiovascular work (<60% max HR), foam rolling, or gentle swimming flume laps. Accelerates metabolic clearance without muscle damage.',
      'The Role of Slow-Wave Sleep: Growth hormone (GH) secretion peaks during Delta deep sleep. Prioritize 7 to 9 hours in a cool, pitch-dark room.'
    ]
  },
  {
    id: 'speed-agility-drills',
    category: 'performance',
    title: 'Speed and Agility Drills You Can Do at Home with No Equipment',
    titleEs: 'Drills de Velocidad y Agilidad para Hacer en Casa Sin Equipamiento',
    categoryLabel: 'Performance & Training',
    categoryLabelEs: 'Rendimiento & Entrenamiento',
    readTime: '3 min',
    author: 'Coach J. Morales (Preparador Físico)',
    authorRole: 'Strength & Agility Coach',
    authorRoleEs: 'Preparador Físico y Agilidad',
    date: 'Updated 2026',
    dateEs: 'Actualizado 2026',
    excerpt: 'No requieres un gimnasio costoso para desarrollar una desaceleración fulminante, rapidez lateral y un cambio de dirección explosivo.',
    excerptEn: 'You do not need a multi-thousand-dollar gym to develop lightning deceleration, lateral quickness, and explosive change of direction.',
    content: [
      'La capacidad de desacelerar de forma controlada es la base del cambio de dirección. Un atleta que no sabe frenar no puede recortar rápido sin riesgo de lesión.',
      '3 Drills Clave para Casa:\n1. The Dot Drill (Patrón en Cruz): Dibuja 5 puntos imaginarios en el suelo formando un rectángulo de 60x40 cm. Salta con ambos pies juntos de esquina a esquina en sentido horario y antihorario. 3 series de 30 segundos.\n2. Caída Lateral y Fijación Unilateral: Salta lateralmente desde una pierna y cae sobre la opuesta flexionando la rodilla 45°. Mantén la postura 2 segundos inmóvil como una estatua. 4 series de 6 repeticiones por pierna.\n3. Lanzadera de 3 Pasos con Freno en Seco: Acelera 3 pasos enérgicos hacia el frente, clava los pies en posición atlética baja sin curvar la espalda y retrocede pedaleando de espaldas.'
    ],
    contentEn: [
      'The ability to decelerate in total control is the prerequisite for explosive directional change. An athlete who cannot stop cannot cut cleanly without knee or ankle risk.',
      '3 Key Home Drills:\n1. The Dot Drill: Place 5 floor markers forming a 60x40 cm rectangle. Hop with both feet together clockwise and counterclockwise. 3 sets of 30 seconds.\n2. Lateral Bound and Stick: Jump laterally off one foot and land softly on the opposite leg at 45° knee flexion. Freeze motionless for 2 seconds. 4 sets of 6 reps per leg.\n3. 3-Step Deceleration Shuttle: Accelerate hard for 3 strides, drop your hips into a low athletic stance without rounding your back, and backpedal to start.'
    ]
  },
  // Nutrition & Wellness
  {
    id: 'hydration-101',
    category: 'nutrition',
    title: 'Hydration 101: What to Drink Before, During, and After Practice',
    titleEs: 'Hidratación 101: Qué Beber Antes, Durante y Después del Entrenamiento',
    categoryLabel: 'Nutrition & Wellness',
    categoryLabelEs: 'Nutrición & Bienestar',
    readTime: '4 min',
    author: 'Sofia Mendez (Nutricionista Deportiva)',
    authorRole: 'Clinical Sports Nutritionist',
    authorRoleEs: 'Nutricionista Deportiva Clínica',
    date: 'Updated 2026',
    dateEs: 'Actualizado 2026',
    excerpt: 'Una disminución de apenas 2% en el agua corporal reduce la capacidad aeróbica hasta un 15% y ralentiza los reflejos un 23%.',
    excerptEn: 'A mere 2% drop in body water volume reduces aerobic capacity by up to 15% and slows neural reaction time by 23%.',
    content: [
      'El agua pura es vital, pero ante una sudoración intensa y prolongada, beber solo agua sin electrolitos puede diluir el sodio en sangre (hiponatremia), causando calambres y fatiga prematura.',
      'Cronología de la Hidratación:\n• 2 a 3 horas antes: Bebe 500 ml de agua con una pizca de sal marina o electrolitos esenciales.\n• Durante la sesión: Bebe de 150 a 250 ml cada 15-20 minutos. Si la sesión supera los 60 minutos, utiliza una bebida isotónica con un 4-6% de carbohidratos (glucosa + fructosa) y sodio.\n• Después de entrenar: Pésate antes y después de una sesión dura. Por cada 0.5 kg perdidos por sudor, ingiere 750 ml de agua con electrolitos (potasio, magnesio y sodio).'
    ],
    contentEn: [
      'Pure water is foundational, but during heavy prolonged sweating, drinking water without electrolytes can dilute blood sodium (hyponatremia), triggering cramping.',
      'Hydration Timeline:\n• 2 to 3 hours before: Drink 500 ml of water with a pinch of sea salt or essential electrolytes.\n• During session: Ingest 150 to 250 ml every 15-20 minutes. If exceeding 60 minutes, utilize an isotonic solution with 4-6% carbohydrates and sodium.\n• Post-workout: Weigh in before and after. For each 0.5 kg lost in sweat, consume 750 ml of electrolyte-balanced fluid.'
    ]
  },
  {
    id: 'fueling-up',
    category: 'nutrition',
    title: 'Fueling Up: Best Pre-Game Snacks for Sustained Energy',
    titleEs: 'Carga de Energía: Los Mejores Snacks Pre-Partido para Energía Constante',
    categoryLabel: 'Nutrition & Wellness',
    categoryLabelEs: 'Nutrición & Bienestar',
    readTime: '3 min',
    author: 'Sofia Mendez (Nutricionista Deportiva)',
    authorRole: 'Clinical Sports Nutritionist',
    authorRoleEs: 'Nutricionista Deportiva Clínica',
    date: 'Updated 2026',
    dateEs: 'Actualizado 2026',
    excerpt: 'Evita pesadez estomacal y mantén el glucógeno muscular lleno. Domina el índice glucémico en días de competición.',
    excerptEn: 'Avoid heavy digestive crashes while keeping glycogen stores primed. Master glycemic indexing for match-day performance.',
    content: [
      'Las grasas y el exceso de fibra ralentizan el vaciado gástrico, produciendo pesadez si se ingieren cerca del inicio del partido. La clave está en carbohidratos de fácil asimilación.',
      'Opciones Ideales según el Tiempo:\n• 60 a 90 minutos antes: Avena con plátano maduro en rodajas y un toque de miel pura, o tostada de masa madre con una capa fina de mantequilla de almendra.\n• 30 minutos antes (energía inmediata): 2 o 3 dátiles medjool con una pizca de sal marina o tortitas de arroz con mermelada natural.\n• Qué evitar en las 2 horas previas: Comidas fritas, quesos grasos o legumbres que sobrecarguen el tracto digestivo durante los sprints.'
    ],
    contentEn: [
      'Dietary fats and excess fiber delay gastric emptying, causing sluggish digestion if eaten too close to tip-off. Fast-absorbing complex carbohydrates are key.',
      'Optimal Fueling Windows:\n• 60 to 90 min before: Rolled oats with sliced banana and raw honey, or sourdough toast with thin almond butter.\n• 30 min before (instant priming): 2 or 3 medjool dates with sea salt or natural rice cakes.\n• What to avoid in the 2h window: Fried meals, greasy cheeses, and heavy legumes that burden digestion during sprint efforts.'
    ]
  },
  // Mindset & Team Dynamics
  {
    id: 'great-teammate',
    category: 'mindset',
    title: 'How to Be a Great Teammate (On and Off the Field)',
    titleEs: 'Cómo Ser un Gran Compañero de Equipo (Dentro y Fuera de la Cancha)',
    categoryLabel: 'Mindset & Team Dynamics',
    categoryLabelEs: 'Mentalidad & Dinámica de Equipo',
    readTime: '4 min',
    author: 'Coach Dave Bradley (Liderazgo Deportivo)',
    authorRole: 'Team Culture Director',
    authorRoleEs: 'Director de Cultura de Equipo',
    date: 'Updated 2026',
    dateEs: 'Actualizado 2026',
    excerpt: 'El talento gana partidos, pero la química de equipo y la responsabilidad compartida ganan campeonatos. Eleva a quienes te rodean.',
    excerptEn: 'Talent wins games, but team chemistry and radical accountability win championships. Elevate everyone around you.',
    content: [
      'Un gran compañero no siempre es el máximo anotador del partido; es aquel cuya presencia hace que los demás jueguen con mayor confianza y entrega.',
      'Los 4 Pilares del Buen Compañero:\n1. Comunicación Positiva y Constante: Avisa los bloqueos en defensa, pide el balón con claridad y señala al pasador inmediatamente tras encestar.\n2. Lenguaje Corporal ante el Error: Si un compañero pierde el balón, aplaude para animarlo y corre a defender en vez de lamentarte con gestos de desaprobación.\n3. Puntualidad como Forma de Respeto: Llegar 10 minutos antes con el calentamiento hecho demuestra respeto por el tiempo colectivo.\n4. Reconocimiento del Esfuerzo Invisible: Celebra el rebote defensivo, la cobertura táctica y la energía de quien anima desde el banquillo.'
    ],
    contentEn: [
      'A great teammate is rarely just the top scorer; they are the player whose presence elevates everyone else\'s confidence, communication, and work rate.',
      'The 4 Pillars of a Champion Teammate:\n1. Positive & Constant Voice: Call out defensive screens, demand the ball decisively, and point to the passer after finishing.\n2. Resilient Error Response: When a teammate commits a turnover, clap, elevate their morale, and sprint to recover on defense.\n3. Punctuality as Respect: Arriving 10 minutes prior with foam rolling completed honors the team\'s shared commitment.\n4. Celebrating Invisible Effort: Applaud the hustle rebound, the tactical rotation, and the bench energy that shifts momentum.'
    ]
  },
  {
    id: 'smart-goals',
    category: 'mindset',
    title: 'Setting SMART Goals for Your Athletic Season',
    titleEs: 'Definiendo Objetivos SMART para tu Temporada Deportiva',
    categoryLabel: 'Mindset & Team Dynamics',
    categoryLabelEs: 'Mentalidad & Dinámica de Equipo',
    readTime: '5 min',
    author: 'Coach Dave Bradley (Liderazgo Deportivo)',
    authorRole: 'Team Culture Director',
    authorRoleEs: 'Director de Cultura de Equipo',
    date: 'Updated 2026',
    dateEs: 'Actualizado 2026',
    excerpt: 'Deseos vagos como "quiero ponerme en forma" estancan tu progreso. Convierte aspiraciones en metas cuantificables y disciplinadas.',
    excerptEn: 'Vague wishes like "I want to get faster" lead to plateau. Turn abstract desires into measurable athletic milestones.',
    content: [
      'El método SMART es el estándar de oro en el deporte de alto rendimiento para transformar sueños en planes de acción concretos:',
      'Desglose del Método SMART:\n• S (Específico): En lugar de "quiero saltar más", define "aumentaré mi salto vertical en 5 centímetros".\n• M (Medible): Usa marcas en la pared, tapiz de salto o pruebas periódicas cada 4 semanas.\n• A (Alcanzable): Diseña la rutina de fuerza y pliometría que lo hará posible: 3 series de sentadillas búlgaras y saltos al cajón martes y viernes.\n• R (Relevante): Debe alinearse con tu deporte (para taponar tiros en baloncesto o rematar en voleibol).\n• T (Temporal): Establece una fecha límite: "Evaluación final el 15 de diciembre".',
      'Revisión Semanal: Cada domingo por la noche, revisa tu diario de entrenamiento. Si cumpliste tus días fijados, celébralo y ajusta la carga para la siguiente semana.'
    ],
    contentEn: [
      'The SMART methodology is the sports science gold standard to transform abstract aspirations into quantifiable seasonal targets:',
      'SMART Athletic Breakdown:\n• S (Specific): Rather than "I want to jump higher", define "I will increase my vertical leap by 5 centimeters".\n• M (Measurable): Use jump mats, wall markers, or periodic 4-week assessments.\n• A (Actionable): Structure the strength and plyometrics protocol: Bulgarian split squats and box drop jumps on Tuesday and Friday.\n• R (Relevant): Directly aligned with your sport (blocking volleyball spikes or basketball rim protection).\n• T (Time-bound): Establish a strict deadline: "Final evaluation by December 15th".',
      'Weekly Review: Every Sunday evening, inspect your training diary. If targets were met, celebrate and adjust load for next week.'
    ]
  }
];

export default function RoomForSportDribbble() {
  // Emil Kowalski & Apple-grade scroll animation physics variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.06
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 26,
        stiffness: 220,
        mass: 0.8
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.94 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 210
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 26,
        stiffness: 220
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 26,
        stiffness: 220
      }
    }
  };

  // Modal states for interactive buttons
  const [activeModal, setActiveModal] = useState(null); 
  // 'booking' | 'onboarding' | 'coaching' | 'event' | 'rooms' | 'roi' | 'protocol' | 'appDemo' | 'planProposal' | 'brandFilm'
  
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedStudio, setSelectedStudio] = useState('hiit');
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [faqCategory, setFaqCategory] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // 15. MODO OSCURO (Dark Mode Theme State & Persistence)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      return localStorage.getItem('rfs_theme') === 'dark' || 
        (!localStorage.getItem('rfs_theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('rfs_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('rfs_theme', 'light');
      }
    } catch {}
  }, [isDarkMode]);

  // 16. IDIOMA (Bilingual State & Translation Lookup - Defaults strictly to English)
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('rfs_user_lang_selected');
      if (saved === 'es' || saved === 'en') return saved;
      return 'en'; // Strict default: English on initial load
    } catch {
      return 'en';
    }
  });

  const t = dict[lang] || dict.en;

  // 20. TOAST NOTIFICATION & FEEDBACK
  const [toast, setToast] = useState(null);
  const triggerToast = (msg) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 3800);
  };

  const handleToggleTheme = () => {
    const nextTheme = !isDarkMode;
    setIsDarkMode(nextTheme);
    triggerToast(nextTheme 
      ? (lang === 'es' ? 'Modo oscuro activado' : 'Dark mode enabled')
      : (lang === 'es' ? 'Modo claro activado' : 'Light mode enabled')
    );
  };

  const handleToggleLang = () => {
    const nextLang = lang === 'es' ? 'en' : 'es';
    setLang(nextLang);
    try {
      localStorage.setItem('rfs_user_lang_selected', nextLang);
    } catch {}
    triggerToast(nextLang === 'es' ? 'Idioma cambiado a Español' : 'Language changed to English');
  };

  // 5. NAVEGACIÓN MÓVIL (Mobile Menu State)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // SERVICES & ACTIVITIES INTERACTIVE STATE (Hick's Law 4 filter pills)
  const [serviceFilter, setServiceFilter] = useState('all'); // 'all' | 'team' | 'individual' | 'workouts'
  const [selectedService, setSelectedService] = useState(null);

  const handleFilterServices = (filter) => {
    setServiceFilter(filter);
  };

  // SPORTS TIPS & RESOURCES STATE (Hick's Law 4 category tabs + reader modal)
  const [tipsCategory, setTipsCategory] = useState('all'); // 'all' | 'performance' | 'nutrition' | 'mindset'
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleFilterTips = (cat) => {
    setTipsCategory(cat);
  };

  // USER DASHBOARD / PROGRESS TRACKING STATE
  const [athleteName, setAthleteName] = useState('Tomás Kax');
  const [trainingDiary, setTrainingDiary] = useState([
    {
      id: 1,
      sport: 'Basketball 3v3',
      sportEs: 'Basketball 3v3',
      sportEn: 'Basketball 3v3',
      sportCategory: 'team',
      duration: 50,
      intensity: 'Alta',
      date: 'Today, 09:30 AM',
      dateEs: 'Hoy, 09:30 AM',
      dateEn: 'Today, 09:30 AM',
      calories: 490,
      notes: 'Spot-up shooting drills (50 threes) and tactical half-court scrimmage.',
      notesEs: 'Drills de tiro perimetral (50 triples) y partido táctico a media cancha.',
      notesEn: 'Spot-up shooting drills (50 threes) and tactical half-court scrimmage.'
    },
    {
      id: 2,
      sport: 'Workout: Strength & Hypertrophy',
      sportEs: 'Workout: Fuerza & Hipertrofia',
      sportEn: 'Workout: Strength & Hypertrophy',
      sportCategory: 'workouts',
      duration: 45,
      intensity: 'Muy Alta',
      date: 'Yesterday, 06:00 PM',
      dateEs: 'Ayer, 18:00 PM',
      dateEn: 'Yesterday, 06:00 PM',
      calories: 520,
      notes: 'Progressive overload: Bulgarian split squat with 24kg and weighted pull-ups.',
      notesEs: 'Sobrecarga progresiva: sentadilla búlgara con 24kg y dominadas lastradas.',
      notesEn: 'Progressive overload: Bulgarian split squat with 24kg and weighted pull-ups.'
    },
    {
      id: 3,
      sport: 'Endless Pool Swimming',
      sportEs: 'Natación a Contracorriente',
      sportEn: 'Endless Pool Swimming',
      sportCategory: 'individual',
      duration: 40,
      intensity: 'Moderada',
      date: '3 days ago, 07:15 AM',
      dateEs: 'Hace 3 días, 07:15 AM',
      dateEn: '3 days ago, 07:15 AM',
      calories: 410,
      notes: 'Stroke technique with hand paddles at 3.8 km/h continuous laminar flow.',
      notesEs: 'Técnica de brazada con palas a 3.8 km/h de flujo continuo laminar.',
      notesEn: 'Stroke technique with hand paddles at 3.8 km/h continuous laminar flow.'
    }
  ]);

  // Form state for Widget 1: Log Today's Workout
  const [diaryForm, setDiaryForm] = useState({
    sport: 'Basketball 3v3',
    duration: 45,
    intensity: 'Alta',
    notes: ''
  });

  const handleLogWorkout = (e) => {
    e.preventDefault();
    if (!diaryForm.sport || !diaryForm.duration) return;
    const newEntry = {
      id: Date.now(),
      sport: diaryForm.sport,
      sportCategory: 'custom',
      duration: Number(diaryForm.duration),
      intensity: diaryForm.intensity,
      date: lang === 'es' ? 'Recién registrado' : 'Just now',
      calories: Math.round(Number(diaryForm.duration) * (diaryForm.intensity === 'Muy Alta' ? 11.5 : diaryForm.intensity === 'Alta' ? 10 : 8)),
      notes: diaryForm.notes || (lang === 'es' ? 'Sesión completada con éxito.' : 'Session completed successfully.')
    };
    setTrainingDiary([newEntry, ...trainingDiary]);
    setDiaryForm({ sport: diaryForm.sport, duration: 45, intensity: 'Alta', notes: '' });
    triggerToast(lang === 'es' ? '¡Entrenamiento registrado en tu diario!' : 'Workout logged in your training diary!');
  };

  const handleDeleteWorkout = (id) => {
    setTrainingDiary(trainingDiary.filter(entry => entry.id !== id));
    triggerToast(lang === 'es' ? 'Entrenamiento eliminado del diario' : 'Workout removed from diary');
  };

  // Widget 3: Personalization Settings State
  const [weeklyGoal, setWeeklyGoal] = useState(5);
  const [primaryFocus, setPrimaryFocus] = useState('Baloncesto & Rutinas de Fuerza');
  const [reminderActive, setReminderActive] = useState(true);

  // AUTH MODAL STATE ([Log In] / [Sign Up])
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'
  const [authRole, setAuthRole] = useState('athlete'); // 'athlete' | 'corporate'
  const [authData, setAuthData] = useState({ name: '', email: '', password: '', teamName: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // 3. PRICING BILLING CYCLE STATE (Monthly vs Annual with ~16% discount)
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'

  // 4. OPERATIONAL SCENARIOS & USE CASES STATE (Marcus, Elena, Carlos)
  const [activeUseCase, setActiveUseCase] = useState('marcus'); // 'marcus' | 'elena' | 'carlos'
  const [marcusJoined, setMarcusJoined] = useState(false);
  const [elenaSplitActive, setElenaSplitActive] = useState(false);
  const [carlosDiscount, setCarlosDiscount] = useState(35);

  // 0. RESET SCROLL TO TOP ON MOUNT / REFRESH (Prevents browser starting at the bottom)
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  // 7. BOTÓN DE VOLVER ARRIBA (Back to Top State & Scroll Listener)
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const checkScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // 8. INITIAL LOADING SCREEN / SKELETON (Instant Mount Experience)
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingInitial(false);
    }, 650);
    return () => clearTimeout(timer);
  }, []);

  // 12. & 13. FORMULARIO DE CONTACTO & VALIDACIÓN EN TIEMPO REAL
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    space: '30 - 50 m²',
    message: ''
  });
  const [contactErrors, setContactErrors] = useState({});
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!contactForm.name.trim() || contactForm.name.trim().length < 2) {
      errs.name = lang === 'es' ? 'Introduce tu nombre completo (mín. 2 letras).' : 'Please enter your full name (min 2 chars).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactForm.email.trim() || !emailRegex.test(contactForm.email)) {
      errs.email = lang === 'es' ? 'Introduce un correo válido.' : 'Please enter a valid email address.';
    }
    const isIndividual = contactForm.space.includes('Individual');
    if (!contactForm.company.trim() && !isIndividual) {
      errs.company = lang === 'es' ? 'Introduce el nombre de tu empresa o indica "Atleta Individual".' : 'Please enter your company name or "Individual Athlete".';
    }
    const phoneDigits = contactForm.phone.replace(/\D/g, '');
    if (!contactForm.phone.trim() || phoneDigits.length < 8) {
      errs.phone = lang === 'es' ? 'Introduce un teléfono válido (mínimo 8 dígitos).' : 'Please enter a valid phone number (min 8 digits).';
    }

    if (Object.keys(errs).length > 0) {
      setContactErrors(errs);
      triggerToast(lang === 'es' ? 'Por favor revisa los campos requeridos.' : 'Please review the highlighted fields.');
      return;
    }

    setContactErrors({});
    setContactSubmitting(true);
    setTimeout(() => {
      setContactSubmitting(false);
      setContactSubmitted(true);
      triggerToast(t.contact.successMsg);
      setContactForm({
        name: '',
        email: '',
        company: '',
        phone: '',
        space: '30 - 50 m²',
        message: ''
      });
      setTimeout(() => setContactSubmitted(false), 9000);
    }, 600);
  };

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // ROI mini-calculator state
  const [calcEmployees, setCalcEmployees] = useState(150);

  // Accessibility: Close modals with Escape key (WCAG 2.1 Principle 2.1 Keyboard Accessible)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (activeModal) setActiveModal(null);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal, isMobileMenuOpen]);

  // Switch specialized studios
  const handleSelectStudio = (studioId) => {
    setSelectedStudio(studioId);
  };

  // Corporate sports events calendar (Bilingual)
  const events = [
    { 
      id: 'padel-league',
      date: '08', 
      month: 'Oct', 
      location: lang === 'es' ? 'Sede Santander • Madrid' : 'Santander HQ • Madrid', 
      title: lang === 'es' ? 'Liga Inter-Empresas de Pádel' : 'Inter-Company Padel League', 
      time: lang === 'es' ? 'Sáb 09:00 AM' : 'Sat 09:00 AM',
      category: lang === 'es' ? 'Competición de Equipos' : 'Team Competition',
      spots: lang === 'es' ? '12 plazas por empresa' : '12 spots per company',
      desc: lang === 'es'
        ? 'Torneo corporativo con fases de grupos y eliminatorias. Ideal para fortalecer el team building y la motivación interdepartamental.'
        : 'Corporate tournament featuring group stages and knockouts. Engineered to build camaraderie and cross-department collaboration.',
      requirements: lang === 'es'
        ? 'Equipos mixtos de 2 a 4 personas. Equipamiento y arbitraje incluido.'
        : 'Mixed squads of 2–4 players. Official rackets, balls and tournament referee provided.'
    },
    { 
      id: 'postural-workshop',
      date: '15', 
      month: 'Oct', 
      location: lang === 'es' ? 'Sala RFS Central • Barcelona' : 'RFS Central Studio • Barcelona', 
      title: lang === 'es' ? 'Masterclass: Espalda Cero Dolor' : 'Masterclass: Zero Back Pain', 
      time: lang === 'es' ? 'Vie 12:30 PM' : 'Fri 12:30 PM',
      category: lang === 'es' ? 'Salud Ocupacional' : 'Occupational Health',
      spots: lang === 'es' ? 'Aforo limitado a 25 personas' : 'Limited to 25 attendees',
      desc: lang === 'es'
        ? 'Taller práctico impartido por fisioterapeutas deportivos para desbloquear dorsales, activar glúteos y eliminar sobrecargas cervicales.'
        : 'Hands-on clinic run by sports physiotherapists to decompress thoracic spine, activate glutes, and relieve cervical strain.',
      requirements: lang === 'es'
        ? 'No requiere ropa deportiva. Ejercicios aplicables directamente a tu silla de oficina.'
        : 'No gym wear required. Decompression drills executable directly at your desk chair.'
    },
    { 
      id: 'hiit-challenge',
      date: '22', 
      month: 'Oct', 
      location: lang === 'es' ? 'Campus Tecnológico • Valencia' : 'Tech Campus • Valencia', 
      title: lang === 'es' ? 'Corporate Functional Challenge' : 'Corporate Functional Challenge', 
      time: lang === 'es' ? 'Sáb 10:00 AM' : 'Sat 10:00 AM',
      category: lang === 'es' ? 'Reto de Fuerza & Resistencia' : 'Strength & Endurance Challenge',
      spots: lang === 'es' ? '8 equipos de 5 personas' : '8 teams of 5 athletes',
      desc: lang === 'es'
        ? 'Circuito funcional por relevos: empuje de trineo, remo y assault bikes con medidores de potencia en directo por pantalla.'
        : 'Relay functional circuit: sled pushes, Concept2 rowing, and assault bikes with real-time wattage leaderboards on display.',
      requirements: lang === 'es'
        ? 'Todos los niveles. El ritmo lo marca el equipo.'
        : 'All fitness levels. Teams set their own pacing strategy.'
    },
    { 
      id: '5k-run',
      date: '29', 
      month: 'Oct', 
      location: lang === 'es' ? 'Parque de la Ciudad • Bilbao' : 'City Park • Bilbao', 
      title: lang === 'es' ? 'Carrera Solidaria 5K Empresas' : 'Corporate 5K Charity Run', 
      time: lang === 'es' ? 'Dom 08:30 AM' : 'Sun 08:30 AM',
      category: lang === 'es' ? 'Running & Comunidad' : 'Running & Community',
      spots: lang === 'es' ? 'Inscripción libre para toda la plantilla' : 'Open registration for entire company',
      desc: lang === 'es'
        ? 'Jornada atlética al aire libre para fomentar el hábito del running saludable entre compañeros de trabajo y sus familias.'
        : 'Outdoor road race promoting cardiovascular endurance and athletic community among colleagues and their families.',
      requirements: lang === 'es'
        ? 'Camiseta técnica y avituallamiento de fruta y electrolitos provisto por RFS.'
        : 'Technical performance tee, fruit, and electrolyte rehydration provided by RFS.'
    },
  ];

  // 4 Specialized Studio archetypes (Bilingual)
  const studios = {
    hiit: {
      id: 'hiit',
      name: 'Functional Box & HIIT',
      tag: lang === 'es' ? 'Alto Rendimiento & Fuerza' : 'High Performance & Strength',
      area: '80 - 150 m²',
      capacity: lang === 'es' ? '15 - 25 personas/turno' : '15 - 25 athletes/slot',
      soundproof: lang === 'es' 
        ? 'Certificación acústica clase A (<38 dB en despachos contiguos)' 
        : 'Class A acoustic rating (<38 dB in adjacent rooms)',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80',
      description: lang === 'es'
        ? 'El corazón deportivo de la empresa. Racks modulares de acero anodizado, suelo de caucho de alta densidad de 30mm, assault bikes, mancuernas engomadas y kettlebells.'
        : 'The athletic powerhouse of your workplace. Anodized steel modular racks, 30mm high-density impact rubber flooring, assault bikes, urethane dumbbells, and kettlebells.',
      equipment: lang === 'es' 
        ? ['Rack multifuncional modular de pared', 'Barras olímpicas y discos de uretano', 'Remo de resistencia por aire Concept2', 'Trineo de arrastre con césped sintético']
        : ['Wall-mounted modular power rack', 'Olympic barbells and urethane plates', 'Concept2 air resistance rower', 'Turf sled track with push sled']
    },
    recovery: {
      id: 'recovery',
      name: 'Recovery & Breath Lounge',
      tag: lang === 'es' ? 'Desconexión & Movilidad' : 'Mobility & Decompression',
      area: '30 - 60 m²',
      capacity: lang === 'es' ? '8 - 14 personas/turno' : '8 - 14 athletes/slot',
      soundproof: lang === 'es' 
        ? 'Aislamiento de ruido ambiental y purificador de aire HEPA' 
        : 'Ambient acoustic isolation & medical-grade HEPA purification',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
      description: lang === 'es'
        ? 'Espacio íntimo para neutralizar el estrés y la fatiga mental. Equipado con esterillas ergonómicas, espalderas de roble, presoterapia Normatec y sauna infrarroja de bajo consumo.'
        : 'Restorative sanctuary engineered to dissolve cognitive stress and physical fatigue. Fitted with oak stall bars, Normatec pneumatic compression boots, and infrared sauna.',
      equipment: lang === 'es'
        ? ['Espalderas dobles de madera maciza', 'Pistolas de percusión Theragun para cuello y trapecio', 'Camillas de presoterapia neumática para piernas', 'Iluminación circadiana regulable']
        : ['Dual solid oak Swedish ladder stall bars', 'Theragun Pro percussive therapy devices', 'Normatec pneumatic compression loungers', 'Circadian biodynamic lighting']
    },
    pilates: {
      id: 'pilates',
      name: 'Postural Pilates & Yoga Lab',
      tag: lang === 'es' ? 'Ergonomía & Columna Sana' : 'Ergonomics & Spine Health',
      area: '50 - 90 m²',
      capacity: lang === 'es' ? '12 - 18 personas/turno' : '12 - 18 athletes/slot',
      soundproof: lang === 'es' 
        ? 'Suelo de madera vinílica fonoabsorbente de tacto cálido' 
        : 'Sound-dampening warm-touch vinyl timber flooring',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
      description: lang === 'es'
        ? 'Diseñado específicamente para combatir las 8 horas diarias de sedentarismo frente al ordenador. Reformers de pilates compactos, bandas elásticas y corrección postural asistida.'
        : 'Engineered specifically to reverse desk sitting postures. Space-efficient commercial reformers, resistance loops, and assisted biomechanical alignment.',
      equipment: lang === 'es'
        ? ['Pilates Reformers profesionales plegables', 'Balones suizos y rodillos de foam miofascial', 'Espejos antireflejo con marcas de alineación postural', 'Pantalla 4K con microclases guiadas de 15 min']
        : ['Folding commercial Pilates Reformers', 'Swiss stability balls and high-density foam rollers', 'Anti-glare alignment posture mirrors', '4K display with 15-min guided micro-classes']
    },
    cardio: {
      id: 'cardio',
      name: 'Executive Cardio Suite',
      tag: lang === 'es' ? 'Salud Cardiovascular' : 'Cardiovascular Stamina',
      area: '60 - 120 m²',
      capacity: lang === 'es' ? '10 - 20 personas/turno' : '10 - 20 athletes/slot',
      soundproof: lang === 'es' 
        ? 'Maquinaria de inercia magnética ultra silenciosa' 
        : 'Ultra-silent magnetic inertia equipment',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
      description: lang === 'es'
        ? 'Cintas curvadas no motorizadas que activan un 30% más de fibras musculares, elípticas de bajo impacto y remos de agua de fresno con pantallas de competición gamificada.'
        : 'Self-powered curved treadmills engaging 30% more muscle fibers, low-impact elliptical trainers, and water rowers with gamified corporate leaderboards.',
      equipment: lang === 'es'
        ? ['Cintas autopropulsadas sin motor (cero consumo)', 'Remos de agua con resistencia fluídica', 'Cicloindoor interactivo con rutas virtuales', 'Monitores de ritmo cardíaco en tiempo real']
        : ['Zero-power self-propelled curved treadmills', 'Fluid-resistance ash wood water rowers', 'Interactive indoor cycle trainers with virtual stages', 'Real-time telemetry heart rate monitors']
    }
  };

  // Official Memberships & Pricing Plans (Comprehensive Enterprise Analysis Specification)
  const plans = [
    {
      id: 'rookie',
      name: lang === 'es' ? 'Rookie (Comunidad)' : 'Rookie Tier (Community)',
      price: '€0',
      period: lang === 'es' ? 'Gratis para siempre' : 'Free forever',
      target: lang === 'es' ? 'Participantes esporádicos y partidos informales' : 'Casual participants & community pick-up games',
      badge: lang === 'es' ? 'Entrada Gratuita' : 'Complimentary Entry',
      popular: false,
      sla: lang === 'es' ? 'SLA: Foros comunitarios y soporte por email (24–48h)' : 'SLA: Community forum & email tickets (24–48h response)',
      description: lang === 'es' 
        ? 'Entrada libre al ecosistema deportivo para descubrir recintos cercanos, foros y unirse a partidos abiertos.' 
        : 'Free entry to the sports ecosystem to discover nearby facilities, forums, and join open pick-up games.',
      features: [
        lang === 'es' ? 'Búsqueda estándar de instalaciones y pistas deportivas' : 'Basic search for nearby sports facilities & venues',
        lang === 'es' ? 'Acceso a foros de debate y comunidad atlética' : 'Standard community forum & athlete discussion access',
        lang === 'es' ? 'Reserva de sesiones individuales bajo demanda' : 'Single-session booking capabilities',
        lang === 'es' ? 'Creación de perfil atlético básico con historial público' : 'Basic profile creation with match history'
      ],
      cta: lang === 'es' ? 'Comenzar Gratis' : 'Start Free'
    },
    {
      id: 'athlete',
      name: lang === 'es' ? 'Athlete (Practicantes Habituales)' : 'Athlete Tier (Active Regulars)',
      price: billingCycle === 'annual' ? '€4.99' : '€5.99',
      period: billingCycle === 'annual' ? (lang === 'es' ? '/ mes (€59.99/año)' : '/ mo (€59.99/yr)') : (lang === 'es' ? '/ mes' : '/ month'),
      target: lang === 'es' ? 'Deportistas dedicados, corredores y jugadores de liga' : 'Dedicated sports enthusiasts, runners & league players',
      badge: lang === 'es' ? 'Atleta Verificado' : 'Verified Athlete',
      popular: false,
      sla: lang === 'es' ? 'SLA: Soporte prioritario con chat en vivo en horario laboral' : 'SLA: Priority customer support with live chat',
      description: lang === 'es'
        ? 'Diseñado para atletas activos que entrenan semanalmente y demandan reservas ilimitadas sin anuncios.'
        : 'Built for regular athletes training weekly requiring unlimited streamlined booking and zero ads.',
      features: [
        lang === 'es' ? 'Reservas ilimitadas de sesiones estándar en recintos' : 'Unlimited standard facility and session bookings',
        lang === 'es' ? 'Plataforma 100% libre de anuncios comerciales' : 'Ad-free platform interface and zero interruptions',
        lang === 'es' ? 'Reserva de franjas horarias semanales recurrentes' : 'Recurring weekly slot reservation capabilities',
        lang === 'es' ? 'Insignia digital exclusiva de "Verified Athlete"' : 'Exclusive "Verified Athlete" digital badge status',
        lang === 'es' ? 'Acceso anticipado a inscripción en torneos de alta demanda' : 'Early access to high-demand tournament registrations',
        lang === 'es' ? 'Sincronización automática con Google Calendar, Apple & Outlook' : 'Automated calendar sync (Google, Apple, Outlook)'
      ],
      cta: lang === 'es' ? 'Elegir Plan Athlete' : 'Choose Athlete'
    },
    {
      id: 'elite',
      name: lang === 'es' ? 'Elite (Capitanes & Organizadores)' : 'Elite Tier (Captains & Organizers)',
      price: billingCycle === 'annual' ? '€8.33' : '€9.99',
      period: billingCycle === 'annual' ? (lang === 'es' ? '/ usuario / mes (€99.99/año)' : '/ user / mo (€99.99/yr)') : (lang === 'es' ? '/ usuario / mes' : '/ user / month'),
      target: lang === 'es' ? 'Capitanes de equipo, organizadores de ligas y clubes' : 'Team captains, amateur league organizers & competitive squads',
      badge: lang === 'es' ? 'El Más Popular' : 'Captains Choice',
      popular: true,
      sla: lang === 'es' ? 'SLA: Soporte dedicado 24/7 con respuesta garantizada <4h' : 'SLA: 24/7 dedicated support desk (4-hour guaranteed response)',
      description: lang === 'es'
        ? 'Para capitanes y organizadores que dirigen plantillas, pizarras tácticas y división automática de gastos.'
        : 'For team captains and organizers running squads, tactical playbooks, and automated roster fee splits.',
      features: [
        lang === 'es' ? 'Dashboard avanzado de torneos y gestión de plantillas' : 'Advanced tournament & league management dashboards',
        lang === 'es' ? 'Reservas prioritarias con ventana anticipada de 72 horas' : 'Priority facility reservations (72-hour advance window)',
        lang === 'es' ? 'Herramienta de división financiera de cuotas (Roster Split Fee)' : 'Multi-user roster financial split tools across digital wallets',
        lang === 'es' ? 'Pizarra táctica interactiva (Interactive Playbook Designer)' : 'Interactive Playbook Designer for 4-3-3 tactical drills',
        lang === 'es' ? 'Analítica avanzada de rendimiento y control de lesiones' : 'Enhanced performance analytics and injury availability tracking',
        lang === 'es' ? 'Perfiles de marca personalizados para tu club o equipo' : 'Custom team branding profiles and squad crest customization'
      ],
      cta: lang === 'es' ? 'Elegir Plan Elite' : 'Choose Elite'
    },
    {
      id: 'facility',
      name: lang === 'es' ? 'Facility & Enterprise (Operadores de Recintos)' : 'Facility & Enterprise Tier',
      price: '€249',
      period: lang === 'es' ? '/ sede / mes + 2.5%' : '/ location / month + 2.5%',
      target: lang === 'es' ? 'Complejos deportivos, polideportivos municipales y cadenas de clubes' : 'Commercial sports complexes, municipal recreation & club chains',
      badge: lang === 'es' ? 'Recintos & Complejos' : 'Venue Operators',
      popular: false,
      sla: lang === 'es' ? 'SLA: Ingeniero dedicado y disponibilidad de nube 99.99%' : 'SLA: Dedicated deployment engineer & 99.99% cloud uptime SLA',
      description: lang === 'es'
        ? 'Software integral marca blanca con motor de precios dinámicos para disparar la ocupación valle del 22% al 74%.'
        : 'Complete white-label software with dynamic pricing engine to surge off-peak occupancy from 22% to 74%.',
      features: [
        lang === 'es' ? 'Software integral marca blanca para gestión de instalaciones' : 'Complete white-label facility management software',
        lang === 'es' ? 'Motor de precios dinámicos según demanda pico / valle' : 'Dynamic pricing algorithms based on peak/off-peak demand',
        lang === 'es' ? 'Integración con torniquetes RFID, códigos QR y hardware TPV / POS' : 'Hardware integration: turnstiles, QR scanners, and POS',
        lang === 'es' ? 'Control automatizado de iluminación LED y climatización HVAC' : 'Automated court LED lighting and HVAC schedule control',
        lang === 'es' ? 'Informes contables, conciliación fiscal y facturación automática' : 'Comprehensive financial reporting, tax logs & auto-reconciliation',
        lang === 'es' ? 'Acceso completo a REST API para portales y aplicaciones web' : 'RESTful API access for custom web portals & club apps'
      ],
      cta: lang === 'es' ? 'Contactar para Acceso Enterprise' : 'Contact Enterprise Team'
    }
  ];

  // Comprehensive FAQ list (Bilingual)
  const faqs = [
    {
      category: 'instalacion',
      q: lang === 'es' 
        ? '¿Qué obras o reformas requiere instalar una Room for Sport en nuestra oficina?' 
        : 'What architectural modifications or permits are required to install Room for Sport?',
      a: lang === 'es'
        ? 'Ninguna obra invasiva ni estructural. Nuestras salas utilizan módulos autoportantes de encastre y suelos técnicos vinílicos fonoabsorbentes que se colocan directamente sobre el pavimento existente. El montaje se ejecuta en un plazo garantizado de 10 a 14 días sin interrumpir la actividad laboral.'
        : 'Zero structural or disruptive construction. We utilize precision interlocking self-supporting modular frameworks and vibration-dampening acoustic subflooring laid over existing floors. Full installation completes in 10–14 business days without interrupting workday activities.'
    },
    {
      category: 'instalacion',
      q: lang === 'es' 
        ? '¿Cómo garantizan que el ruido y los impactos no molesten a los despachos vecinos?' 
        : 'How do you guarantee that noise and heavy weight drops will not disturb adjacent offices?',
      a: lang === 'es'
        ? 'Nuestros suelos técnicos cuentan con doble capa de poliuretano vulcanizado y cámaras de aire diseñadas para absorber impactos de hasta 200 kg. Todos nuestros materiales cuentan con certificación acústica clase A (nivel de transmisión sonora <38 dB), lo que garantiza el silencio en las salas de reuniones contiguas.'
        : 'Our proprietary acoustic flooring features dual vulcanized polyurethane dampening layers with air isolation pockets engineered to absorb 200kg drop loads. Certified Class A acoustic barrier rating (<38 dB sound transmission) ensures meeting rooms directly adjacent remain silent.'
    },
    {
      category: 'fiscal',
      q: lang === 'es' 
        ? '¿Es el servicio 100% deducible fiscalmente para la empresa?' 
        : 'Is Room for Sport corporate service 100% tax-deductible for our enterprise?',
      a: lang === 'es'
        ? 'Sí. Al tratarse de un servicio de Prevención de Riesgos Laborales (PRL), salud ocupacional y bienestar corporativo contratado bajo modalidad de cuota mensual, se contabiliza como gasto de explotación deducible en el Impuesto de Sociedades y con IVA 100% deducible.'
        : 'Yes. Because our services qualify as Occupational Health, Ergonomic Risk Prevention (PRL), and corporate wellness, monthly subscription retainers are treated as operating expenses (OpEx) with 100% deduction on corporate income tax and VAT recovery.'
    },
    {
      category: 'operativa',
      q: lang === 'es' 
        ? '¿Quién asume la responsabilidad legal en caso de lesión de un colaborador?' 
        : 'Who assumes legal liability in the unlikely event of an employee athletic injury?',
      a: lang === 'es'
        ? 'Room for Sport asume la cobertura íntegra. Contamos con una póliza de responsabilidad civil patronal y deportiva suscrita con aseguradoras de primer nivel con una cobertura de hasta 3.000.000 €, liberando a tu empresa de cualquier contingencia legal.'
        : 'Room for Sport assumes full contractual indemnity. We maintain a comprehensive sports liability and professional coverage policy underwritten up to €3,000,000, insulating your enterprise from legal exposure.'
    },
    {
      category: 'operativa',
      q: lang === 'es' 
        ? '¿Qué sucede si nuestra empresa cambia de sede u oficina en el futuro?' 
        : 'What happens if our company relocates to a new campus or building in the future?',
      a: lang === 'es'
        ? 'Toda nuestra infraestructura es 100% desmontable y modular. Si vuestra empresa se traslada a otro edificio, nuestro equipo técnico desmonta, traslada y vuelve a montar la sala en las nuevas instalaciones en un plazo récord de 72 horas.'
        : 'Our modular hardware is 100% demountable. When your company relocates, our deployment logistics engineers disassemble, transport, and re-commission your studio in the new facility within a guaranteed 72-hour window.'
    }
  ];

  const filteredFaqs = faqCategory === 'all' 
    ? faqs 
    : faqs.filter(f => f.category === faqCategory);

  const handleOpenEvent = (event) => {
    setSelectedEvent(event);
    setActiveModal('event');
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 4500);
      setNewsletterEmail('');
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-[#0A0B0E] text-[#F9FAFB]' : 'bg-[#F8F9FA] text-[#0A0B0D]'} font-sans antialiased overflow-x-hidden selection:bg-[#FF4900] selection:text-white transition-colors duration-300`}>

      {/* 8. INITIAL SKELETON / BRAND SPLASH SCREEN (Zero FOUC & High-End Velocity) */}
      <AnimatePresence>
        {isLoadingInitial && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-[#0A0B0D] flex flex-col items-center justify-center text-white pointer-events-none"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#FF4900] flex items-center justify-center shadow-2xl relative">
                <Activity className="w-9 h-9 text-white animate-pulse" />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#CDFF00] animate-ping" />
              </div>
              <div className="font-black text-xl tracking-wider">
                ROOM <span className="text-[#FF4900]">FOR</span> SPORT
              </div>
              <div className="w-40 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                  className="h-full bg-gradient-to-r from-[#FF4900] to-[#CDFF00]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 20. TOAST NOTIFICATION SYSTEM */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-[#0A0B0D] text-white text-xs font-bold shadow-2xl flex items-center gap-2.5 border border-white/15"
          >
            <CheckCircle2 className="w-4 h-4 text-[#CDFF00]" />
            <span>{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. BOTÓN DE VOLVER ARRIBA (Floating Back to Top) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label={lang === 'es' ? 'Volver al inicio' : 'Back to top'}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#FF4900] text-white shadow-xl flex items-center justify-center hover:bg-[#E03E00] transition-colors border border-white/20 cursor-pointer"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 11. REPEATED CTA: STICKY MOBILE ACTION BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-white/95 dark:bg-[#0F1012]/95 backdrop-blur-lg border-t border-gray-200 dark:border-white/10 flex items-center justify-between gap-3 shadow-lg">
        <div className="text-left">
          <div className="text-[10px] font-mono uppercase font-bold text-gray-500">Room for Sport</div>
          <div className="text-xs font-black text-gray-900 dark:text-white leading-tight">Auditoría 3D</div>
        </div>
        <button
          onClick={() => setActiveModal('booking')}
          className="btn-tactile-orange !py-2 !px-4 text-xs cursor-pointer"
        >
          <span>{lang === 'es' ? 'Agendar Visita' : 'Book Visit'}</span>
          <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </button>
      </div>

      {/* HEADER / NAVIGATION */}
      <motion.header 
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative z-40"
      >
        
        {/* Brand Logo */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2.5 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-9 h-9 rounded-full bg-[#FF4900] flex items-center justify-center text-white shadow-md shadow-[#FF4900]/30 ring-2 ring-[#FF4900]/20">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-black text-xl tracking-tighter text-[#0A0B0D] dark:text-white leading-none flex items-center gap-1">
              ROOM <span className="text-[#FF4900]">FOR</span> SPORT
            </span>
            <span className="text-[9px] uppercase tracking-widest font-extrabold text-gray-500">Corporate Athletics</span>
          </div>
        </motion.div>

        {/* Center Nav Links with Interactive Modals & Anchors */}
        <nav className="hidden xl:flex items-center gap-5 text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
          <a href="#hero-section" className="hover:text-[#FF4900] transition-colors">
            {t.nav.home}
          </a>
          <a 
            href="#services-section" 
            onClick={() => handleFilterServices('all')}
            className="hover:text-[#FF4900] transition-colors"
          >
            {t.nav.services}
          </a>
          <a 
            href="#services-section" 
            onClick={() => handleFilterServices('workouts')}
            className="hover:text-[#FF4900] transition-colors"
          >
            {t.nav.workouts}
          </a>
          <a href="#plans-section" className="hover:text-[#FF4900] transition-colors">
            {t.nav.memberships}
          </a>
          <a href="#use-cases-section" className="hover:text-[#FF4900] transition-colors">
            {lang === 'es' ? 'Casos de Uso' : 'Use Cases'}
          </a>
          <a href="#dashboard-section" className="hover:text-[#FF4900] transition-colors text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {t.nav.dashboard}
          </a>
          <a href="#tips-section" className="hover:text-[#FF4900] transition-colors">
            {t.nav.tips}
          </a>
          <a href="#contacto-section" className="hover:text-[#FF4900] transition-colors">
            {t.nav.contact}
          </a>
        </nav>

        {/* Right Action Buttons: Theme Toggle, Lang Switcher, Auth Button, and Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* 15. Modo Oscuro Toggle */}
          <button
            onClick={handleToggleTheme}
            aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:scale-105 transition-all cursor-pointer"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-[#CDFF00]" /> : <Moon className="w-4 h-4 text-gray-700" />}
          </button>

          {/* 16. Idioma Switcher */}
          <button
            onClick={handleToggleLang}
            aria-label={`Cambiar idioma a ${lang === 'es' ? 'Inglés' : 'Español'}`}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 text-xs font-bold text-gray-700 dark:text-gray-200 hover:border-[#FF4900] transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang.toUpperCase()}</span>
          </button>
          
          {/* Auth Button: [Log In] / [Sign Up] */}
          <button 
            onClick={() => setActiveModal('auth')}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-bold hover:bg-[#FF4900] dark:hover:bg-[#CDFF00] hover:text-white dark:hover:text-black transition-all cursor-pointer shadow-sm group"
          >
            <UserCheck className="w-3.5 h-3.5 text-[#CDFF00] dark:text-[#FF4900] group-hover:scale-110 transition-transform" />
            <span>{isLoggedIn ? athleteName : (lang === 'es' ? 'Iniciar Sesión / Registro' : 'Log In / Sign Up')}</span>
          </button>

          {/* Button-in-Button Header CTA */}
          <button 
            onClick={() => setActiveModal('booking')}
            className="hidden md:inline-flex btn-tactile-dark group cursor-pointer text-xs"
          >
            <span>{t.nav.demo}</span>
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF4900] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* 5. Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            className="xl:hidden w-9 h-9 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-800 dark:text-white cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </motion.header>

      {/* 5. NAVEGACIÓN MÓVIL (Full Drawer Menu) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="xl:hidden fixed inset-x-0 top-[72px] z-40 bg-white/95 dark:bg-[#0F1012]/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 p-6 shadow-2xl space-y-4"
          >
            <nav className="flex flex-col space-y-3 text-sm font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200">
              <a 
                href="#hero-section" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-white/5 hover:text-[#FF4900]"
              >
                <span>{t.nav.home}</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </a>
              <a 
                href="#services-section" 
                onClick={() => {
                  handleFilterServices('all');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-white/5 hover:text-[#FF4900]"
              >
                <span>{t.nav.services}</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </a>
              <a 
                href="#services-section" 
                onClick={() => {
                  handleFilterServices('workouts');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-white/5 hover:text-[#FF4900]"
              >
                <span>{t.nav.workouts}</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </a>
              <a 
                href="#plans-section" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-white/5 hover:text-[#FF4900]"
              >
                <span>{t.nav.memberships}</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </a>
              <a 
                href="#use-cases-section" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-white/5 hover:text-[#FF4900]"
              >
                <span>{lang === 'es' ? 'Casos de Uso Operativos' : 'Operational Use Cases'}</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </a>
              <a 
                href="#dashboard-section" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-white/5 text-emerald-600 dark:text-emerald-400 hover:text-[#FF4900]"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {t.nav.dashboard}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </a>
              <a 
                href="#tips-section" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-white/5 hover:text-[#FF4900]"
              >
                <span>{t.nav.tips}</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </a>
              <a 
                href="#contacto-section" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-white/5 hover:text-[#FF4900]"
              >
                <span>{t.nav.contact}</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </a>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setActiveModal('auth');
                }}
                className="flex items-center justify-between py-2.5 text-[#FF4900] font-black uppercase text-left border-b border-gray-100 dark:border-white/5"
              >
                <span className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4" />
                  {isLoggedIn ? athleteName : (lang === 'es' ? '[Iniciar Sesión] / [Registrarse]' : '[Log In] / [Sign Up]')}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </nav>

            <div className="pt-2 flex items-center justify-between border-t border-gray-100 dark:border-white/10">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleTheme}
                  aria-label="Alternar modo oscuro"
                  className="p-2.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200"
                >
                  {isDarkMode ? <Sun className="w-4 h-4 text-[#CDFF00]" /> : <Moon className="w-4 h-4 text-gray-700" />}
                </button>
                <button
                  onClick={handleToggleLang}
                  aria-label="Cambiar idioma"
                  className="px-3 py-2 rounded-full bg-gray-100 dark:bg-white/10 text-xs font-bold text-gray-700 dark:text-gray-200 flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{lang.toUpperCase()}</span>
                </button>
              </div>

              {/* 17. Botones RRSS in Mobile Menu */}
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 hover:text-[#FF4900]"><SocialLinkedin /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 hover:text-[#FF4900]"><SocialInstagram /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X Twitter" className="p-2 hover:text-[#FF4900]"><SocialTwitter /></a>
              </div>
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setActiveModal('booking');
              }}
              className="w-full btn-tactile-orange justify-center py-3"
            >
              <span>{t.nav.demo}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION 1: HERO */}
      <section id="hero-section" className="relative w-full max-w-7xl mx-auto px-6 pt-6 pb-20 overflow-hidden">
        
        {/* Soft Background Athletic Glow */}
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-30 mix-blend-multiply"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80')`
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 z-10 space-y-6 text-left">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4900]/10 border border-[#FF4900]/25 text-[#FF4900] text-[11px] font-extrabold uppercase tracking-widest shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> {t.hero.badge}
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-[72px] font-black tracking-[-0.035em] text-[#0A0B0D] dark:text-white leading-[0.96] uppercase"
            >
              {lang === 'es' ? (
                <>
                  Potencia tu <span className="text-[#FF4900]">Cuerpo</span><br />
                  y <span className="text-[#0066FF] dark:text-[#CDFF00]">Mente</span> con<br />
                  Room for Sport
                </>
              ) : (
                <>
                  Empower Your <span className="text-[#FF4900]">Body</span><br />
                  and <span className="text-[#0066FF] dark:text-[#CDFF00]">Mind</span> with<br />
                  Room for Sport
                </>
              )}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium max-w-lg leading-relaxed"
            >
              {t.hero.sub}
            </motion.p>

            {/* REDESIGNED BUTTONS: ELIMINATING COGNITIVE OVERLOAD (HICK'S LAW) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              {/* Primary Tactile Button: Explore Memberships -> Scrolls to #plans-section */}
              <a 
                href="#plans-section"
                className="btn-tactile-orange group cursor-pointer inline-flex items-center"
                aria-label="Explorar planes de membresía individuales y corporativos"
              >
                <span>{t.hero.ctaPrimary}</span>
                <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-[#FF4900] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>

              {/* Secondary Tactile Button: Start Your Journey -> Scrolls to #services-section */}
              <a 
                href="#services-section"
                className="btn-tactile-dark group cursor-pointer inline-flex items-center"
                aria-label="Comenzar viaje y explorar disciplinas deportivas"
              >
                <span>{t.hero.ctaSecondary}</span>
                <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center transition-all duration-300 group-hover:bg-[#CDFF00] group-hover:text-black group-hover:scale-110 shadow-sm">
                  <ChevronRight className="w-4 h-4" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* Center Dynamic Athlete Video Showcase */}
          <div className="lg:col-span-3 flex justify-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-72 sm:w-80 h-96 sm:h-[460px] group cursor-pointer"
              onClick={() => setActiveModal('brandFilm')}
            >
              {/* Local Ultra-Fast Video Stream */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-3xl shadow-2xl filter contrast-105 group-hover:scale-[1.02] transition-transform duration-700"
                src="/videos/basketball-loop.webm"
              />

              {/* Top Live Pill Badge */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 text-[10px] font-mono font-bold text-white shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#CDFF00] animate-ping" />
                <span>{lang === 'es' ? 'BRAND FILM · EN VIVO' : 'BRAND FILM · LIVE'}</span>
              </div>

              {/* Play Button Overlay on Hover */}
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/35 rounded-3xl transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#CDFF00] transition-all duration-300">
                  <Play className="w-7 h-7 text-black fill-black ml-1" />
                </div>
              </div>

              {/* Bottom Floating Card with Continuous Hover Physics */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 dark:bg-[#14161B]/95 backdrop-blur-md p-3.5 rounded-2xl border border-black/[0.06] dark:border-white/10 shadow-xl text-left animate-float-card">
                <div className="flex items-center gap-2 text-xs font-black text-gray-900 dark:text-white">
                  <Flame className="w-4 h-4 text-[#FF4900]" /> {lang === 'es' ? 'De la Pantalla a la Cancha' : 'From Screen to Court'}
                </div>
                <div className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">
                  {lang === 'es' ? 'Click para ver a pantalla completa' : 'Click to watch fullscreen'}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Floating Orange Coaching Card with Float Motion */}
          <div className="lg:col-span-3 z-20 flex justify-end">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-xs rounded-3xl bg-[#FF4900] text-white p-5 shadow-2xl flex flex-col justify-between text-left space-y-4 animate-float-card border border-white/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-black text-xs uppercase tracking-tight leading-tight">
                    {lang === 'es' ? <>COACHING & SALUD<br />EXCELLENCE</> : <>COACHING & HEALTH<br />EXCELLENCE</>}
                  </span>
                </div>
                <span className="text-[10px] uppercase font-mono font-bold bg-black/20 px-2 py-0.5 rounded-md">
                  In-House
                </span>
              </div>

              {/* Inner Cutout Image */}
              <div className="rounded-2xl overflow-hidden bg-white p-1 shadow-inner group cursor-pointer" onClick={() => setActiveModal('coaching')}>
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80"
                  alt="Head Coach Room for Sport"
                  className="w-full h-44 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <p className="text-xs font-semibold text-white/95 leading-snug">
                  {lang === 'es'
                    ? 'Entrenadores y fisioterapeutas colegiados. Cada minuto cuenta para tu salud.'
                    : 'Certified trainers & licensed physiotherapists. Every minute counts for your health.'}
                </p>
                <button
                  onClick={() => setActiveModal('coaching')}
                  className="w-full pt-3 flex items-center justify-between border-t border-white/25 mt-3 text-xs font-black uppercase tracking-wider group cursor-pointer hover:text-[#CDFF00] transition-colors"
                >
                  <span>{lang === 'es' ? 'CONOCE AL EQUIPO' : 'MEET THE TEAM'}</span>
                  <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            </motion.div>
          </div>

        </div>

      </section>

      {/* SECTION 2: GIANT "SPORT RUSH" & DARK BENTO SECTION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="w-full bg-[#0F1012] text-white py-20 px-6 relative rounded-t-[3rem] -mt-6"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Giant Cutout Typography with Kinetic Texture Pan Animation */}
          <motion.div variants={fadeInUp} className="text-left">
            <h2 
              className="text-7xl sm:text-9xl lg:text-[170px] font-black uppercase tracking-[-0.05em] leading-[0.82] select-none animate-pan-sport-rush"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80')`,
                backgroundSize: 'cover',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              SPORT<br />
              RUSH
            </h2>
          </motion.div>

          {/* Bento Sub-Cards with Images & Clickable Interactive Triggers */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            
            {/* Bento Card 1: Ergonomía & Dolor de Espalda */}
            <motion.div 
              variants={slideInLeft}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => setActiveModal('protocol')}
              className="bg-[#1A1C20] rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/5 hover:border-[#FF4900]/50 transition-all cursor-pointer group shadow-xl"
            >
              <div className="space-y-3 max-w-xs">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#CDFF00] flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5" /> {lang === 'es' ? 'SALUD OCUPACIONAL & PRL' : 'OCCUPATIONAL HEALTH & WELLNESS'}
                </div>
                <h3 className="text-base sm:text-lg font-black tracking-tight uppercase leading-snug group-hover:text-[#FF4900] transition-colors">
                  {lang === 'es' 
                    ? 'PAUSAS ACTIVAS DE 15 MINUTOS PARA ELIMINAR EL DOLOR LUMBAR Y CERVICAL.' 
                    : '15-MINUTE ACTIVE BREAKS TO RELIEVE BACK AND NECK TENSION.'}
                </h3>
                <p className="text-xs text-gray-400">
                  {lang === 'es'
                    ? 'Descompresión articular diseñada por médicos deportivos sin necesidad de cambio de ropa.'
                    : 'Joint decompression routines designed by sports physicians without requiring a gym change.'}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-white pt-1">
                  <span>{lang === 'es' ? 'Ver protocolo de ejercicios' : 'View exercise protocol'}</span>
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#FF4900] transition-colors">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </span>
                </div>
              </div>
              <div className="w-full sm:w-48 h-48 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
                  alt="Postural Mobility active break"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Bento Card 2: Alto Rendimiento y Fuerza */}
            <motion.div 
              variants={slideInRight}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => setActiveModal('rooms')}
              className="bg-[#1A1C20] rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/5 hover:border-[#CDFF00]/50 transition-all cursor-pointer group shadow-xl"
            >
              <div className="space-y-3 max-w-xs">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#CDFF00] flex items-center gap-1.5">
                  <Dumbbell className="w-3.5 h-3.5" /> {lang === 'es' ? 'HARDWARE MODULAR LLAVE EN MANO' : 'TURNKEY MODULAR HARDWARE'}
                </div>
                <h3 className="text-base sm:text-lg font-black tracking-tight uppercase leading-snug group-hover:text-[#CDFF00] transition-colors">
                  {lang === 'es'
                    ? 'RACKS INTELIGENTES Y PESO LIBRE EN ESPACIOS DESDE 30 HASTA 250 M².'
                    : 'SMART RACKS AND FREE WEIGHTS IN SPACES FROM 30 TO 250 SQM.'}
                </h3>
                <p className="text-xs text-gray-400">
                  {lang === 'es'
                    ? 'Suelo fonoabsorbente antibacteriano. Cero molestias o ruidos para las salas de juntas contiguas.'
                    : 'Sound-absorbing antibacterial flooring. Zero disturbance or noise for neighboring boardrooms.'}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-white pt-1">
                  <span>{lang === 'es' ? 'Explorar planos y medidas' : 'Explore layouts & specs'}</span>
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#CDFF00] group-hover:text-black transition-colors">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
              <div className="w-full sm:w-48 h-48 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80"
                  alt="Functional Fitness Box in-office"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

          </motion.div>

        </div>
      </motion.section>

      {/* NEW SECTION 2.1: THE 4 SPECIALIZED STUDIOS (INTERACTIVE ARCHITECTURE SHOWCASE) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        id="studios-section" 
        className="w-full max-w-7xl mx-auto px-6 py-24 text-left"
      >
        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF4900]/10 text-[#FF4900] text-xs font-extrabold uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5" /> {lang === 'es' ? 'Arquitectura & Acústica' : 'Architecture & Acoustics'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-gray-900 dark:text-white leading-tight">
              {lang === 'es' ? <>Los 4 Estudios Especializados<br />Room for Sport</> : <>The 4 Specialized Studios<br />Room for Sport</>}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-md">
            {lang === 'es'
              ? 'Módulos técnicos estandarizados diseñados por arquitectos e ingenieros acústicos para integrarse limpiamente en edificios de oficinas clase A.'
              : 'Standardized technical modules designed by architects and acoustic engineers to integrate seamlessly into Class A office buildings.'}
          </p>
        </motion.div>

        {/* Studio Selector Tabs with Spring Layout Indicator & Accessible Tablist */}
        <motion.div 
          variants={fadeInUp} 
          role="tablist"
          aria-label="Seleccionar arquetipo de sala deportiva"
          className="flex flex-wrap gap-2.5 mb-8 bg-gray-100 dark:bg-white/5 p-1.5 rounded-full inline-flex border border-gray-200 dark:border-white/10"
        >
          {Object.values(studios).map((st) => {
            const isSelected = selectedStudio === st.id;
            return (
              <button
                key={st.id}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`studio-panel-${st.id}`}
                onClick={() => handleSelectStudio(st.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-colors duration-200 ${
                  isSelected ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeStudioPill"
                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    className="absolute inset-0 bg-[#0A0B0D] dark:bg-[#FF4900] rounded-full shadow-md"
                  />
                )}
                <span className="relative z-10">{st.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Studio Interactive Card (smooth tab transition) */}
        {studios[selectedStudio] && (
          <div id={`studio-panel-${selectedStudio}`} role="tabpanel">
            <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedStudio}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                  className="rounded-[2.5rem] bg-white dark:bg-[#14161B] p-6 sm:p-10 border border-gray-200 dark:border-white/10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#CDFF00] text-black text-xs font-black uppercase tracking-wider">
                        {studios[selectedStudio].tag}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-mono font-bold">
                        {studios[selectedStudio].area}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
                      {studios[selectedStudio].name}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {studios[selectedStudio].description}
                    </p>

                    {/* Technical Specifications */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10">
                        <div className="text-[10px] font-mono uppercase text-gray-500 dark:text-gray-400 font-bold">
                          {lang === 'es' ? 'Capacidad & Aforo' : 'Capacity & Occupancy'}
                        </div>
                        <div className="text-xs font-bold text-gray-900 dark:text-white mt-1">{studios[selectedStudio].capacity}</div>
                      </div>
                      <div className="p-3.5 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10">
                        <div className="text-[10px] font-mono uppercase text-gray-500 dark:text-gray-400 font-bold">
                          {lang === 'es' ? 'Aislamiento Acústico' : 'Acoustic Soundproofing'}
                        </div>
                        <div className="text-xs font-bold text-gray-900 dark:text-white mt-1">{studios[selectedStudio].soundproof}</div>
                      </div>
                    </div>

                    {/* Equipment Checklist */}
                    <div className="space-y-2 pt-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        {lang === 'es' ? 'Dotación Técnica Incluida:' : 'Included Technical Equipment:'}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 dark:text-gray-300">
                        {studios[selectedStudio].equipment.map((eq, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#FF4900] shrink-0" />
                            <span>{eq}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hick's Law: 1 Clear Decisive Call-to-Action */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setActiveModal('booking')}
                        className="btn-tactile-orange group cursor-pointer"
                        aria-label={`Solicitar render 3D y propuesta técnica para ${studios[selectedStudio].name}`}
                      >
                        <span>{lang === 'es' ? 'Solicitar Render 3D de esta Sala' : 'Request 3D Render of this Studio'}</span>
                        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-[#FF4900]">
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </button>
                    </div>

                  </div>

                {/* Studio High-Res Image Preview */}
                <div className="lg:col-span-5 h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl relative group">
                  <img
                    src={studios[selectedStudio].image}
                    alt={studios[selectedStudio].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-[11px] font-mono font-bold border border-white/20">
                    {studios[selectedStudio].area}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </motion.section>

      {/* NEW SECTION 2.2: TECH-DRIVEN PULSE (APP & BIOMETRICS DASHBOARD) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        id="tech-section" 
        className="w-full bg-[#0F1012] text-white py-24 px-6 relative"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left Column: Tech Features */}
          <motion.div variants={slideInLeft} className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CDFF00]/10 text-[#CDFF00] text-xs font-black uppercase tracking-widest border border-[#CDFF00]/20">
              <Smartphone className="w-3.5 h-3.5" /> {lang === 'es' ? 'Software & Telemetría Corporativa' : 'Software & Corporate Telemetry'}
            </div>

            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-tight">
              {lang === 'es' ? 'Tecnología que Multiplica la Adopción' : 'Technology that Drives High Engagement'}
            </h2>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              {lang === 'es'
                ? 'El 80% de los gimnasios corporativos tradicionales fracasan porque nadie los dinamiza. Nuestra aplicación móvil convierte el ejercicio en una experiencia gamificada, con retos por equipos y reserva de clases en 1 clic.'
                : '80% of traditional corporate gyms fail because they lack activation. Our mobile app transforms fitness into a gamified team experience with corporate challenges and 1-click class reservations.'}
            </p>

            <motion.div variants={staggerContainer} className="space-y-3 pt-2">
              {(lang === 'es' ? [
                { title: 'Sensores RFID de Aforo en Directo', desc: 'Los colaboradores ven en su móvil cuánta gente hay entrenando antes de bajar a la sala.' },
                { title: 'Gamificación & Retos Inter-Departamentales', desc: 'Ranking de kilómetros y calorías por equipos (Ventas vs Producto vs Finanzas) con premios colectivos.' },
                { title: 'Informes Trimestrales para RRHH (RGPD)', desc: 'Métricas agregadas anónimas de salud, calorías y horas activas para justificar el ROI de la empresa.' },
              ] : [
                { title: 'Live RFID Room Occupancy Sensors', desc: 'Team members see current capacity on their phone before heading down to train.' },
                { title: 'Gamification & Team Challenges', desc: 'Departmental leaderboards (Sales vs Product vs Finance) with team-wide wellness milestones.' },
                { title: 'Quarterly HR Analytics (GDPR-Compliant)', desc: 'Aggregated, anonymized health and active-hour metrics to easily measure corporate ROI.' },
              ]).map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  whileHover={{ x: 6 }}
                  className="p-4 rounded-2xl bg-[#1A1C20] border border-white/5 space-y-1 hover:border-white/15 transition-all"
                >
                  <div className="text-xs font-black text-[#CDFF00] uppercase tracking-wide flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5" /> {item.title}
                  </div>
                  <div className="text-[11px] text-gray-400 leading-relaxed">{item.desc}</div>
                </motion.div>
              ))}
            </motion.div>

            <div className="pt-2">
              <button
                onClick={() => setActiveModal('appDemo')}
                className="btn-tactile-orange group cursor-pointer"
              >
                <span>{lang === 'es' ? 'Ver Demo Interactiva de la App' : 'View Interactive App Demo'}</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-[#FF4900]">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: App Mockup UI Card */}
          <motion.div variants={slideInRight} className="lg:col-span-6 flex justify-center">
            <motion.div 
              whileHover={{ y: -6, rotate: 0.5 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="w-full max-w-md rounded-[2.5rem] bg-[#16181C] p-6 border border-white/10 shadow-2xl relative"
            >
              
              {/* Header inside phone */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#FF4900] flex items-center justify-center font-bold text-[10px]">
                    RFS
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs">
                      {lang === 'es' ? 'App Room for Sport' : 'Room for Sport App'}
                    </div>
                    <div className="text-[10px] text-gray-400">
                      {lang === 'es' ? 'Sede Central • Sala 01' : 'HQ • Studio 01'}
                    </div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  {lang === 'es' ? 'EN VIVO' : 'LIVE'}
                </span>
              </div>

              {/* Live Metric Rings / Status */}
              <div className="my-5 p-4 rounded-2xl bg-[#202328] border border-white/5 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">
                    {lang === 'es' ? 'Aforo de la Sala Ahora' : 'Current Studio Occupancy'}
                  </span>
                  <span className="text-white font-bold font-mono">
                    {lang === 'es' ? '8 / 12 personas' : '8 / 12 athletes'}
                  </span>
                </div>
                <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-[#FF4900] rounded-full w-[66%]" />
                </div>
                <div className="text-[11px] text-gray-400">
                  {lang === 'es' ? (
                    <>Próxima clase: <strong className="text-white">Postural Reset (12:30)</strong> • Quedan 3 plazas</>
                  ) : (
                    <>Next class: <strong className="text-white">Postural Reset (12:30)</strong> • 3 spots left</>
                  )}
                </div>
              </div>

              {/* Department Leaderboard */}
              <div className="space-y-2">
                <div className="text-[10px] uppercase font-mono tracking-widest text-[#CDFF00] font-bold">
                  {lang === 'es' ? 'Reto de la Semana: Puntos de Bienestar' : 'Challenge of the Week: Wellness Points'}
                </div>
                {(lang === 'es' ? [
                  { rank: '1º', team: 'Equipo de Producto & Tech', pts: '14.850 pts', medal: '🥇' },
                  { rank: '2º', team: 'Ventas & Desarrollo de Negocio', pts: '13.200 pts', medal: '🥈' },
                  { rank: '3º', team: 'Marketing & Comunicación', pts: '11.450 pts', medal: '🥉' },
                ] : [
                  { rank: '1st', team: 'Product & Engineering Team', pts: '14,850 pts', medal: '🥇' },
                  { rank: '2nd', team: 'Sales & Business Dev', pts: '13,200 pts', medal: '🥈' },
                  { rank: '3rd', team: 'Marketing & Communications', pts: '11,450 pts', medal: '🥉' },
                ]).map((row, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-xs hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-gray-400">{row.rank}</span>
                      <span className="text-white font-semibold">{row.team}</span>
                    </div>
                    <span className="font-mono text-[#CDFF00] font-bold">{row.pts}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Action inside Mockup */}
              <button
                onClick={() => setActiveModal('appDemo')}
                className="btn-tactile-orange w-full mt-5 justify-between group cursor-pointer"
              >
                <span>{lang === 'es' ? 'Probar Reserva de Clase' : 'Try Class Booking'}</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-[#FF4900]">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>

            </motion.div>
          </motion.div>

        </div>

        {/* Core Enterprise Architecture Pillars (Official Document Specification) */}
        <div className="max-w-7xl mx-auto mt-16 pt-12 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#CDFF00] font-bold">
              {lang === 'es' ? 'Infraestructura & Especificaciones Técnicas' : 'Platform & Technical Specifications'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
              {lang === 'es' ? 'Arquitectura Robusta para Alta Demanda' : 'Robust Architecture for High Throughput'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Layers,
                title: lang === 'es' ? 'Venue Mapping Multi-Disciplina' : 'Multi-Disciplinary Venue Mapping',
                desc: lang === 'es'
                  ? 'Mapeo topológico en tiempo real de canchas de baloncesto, césped FIFA, canales de nado y dojos con inventario dinámico de material deportivo.'
                  : 'Real-time topological mapping of basketball hardcourts, FIFA turf, lap swimming flumes, and dojos with dynamic equipment rental pairing.'
              },
              {
                icon: Target,
                title: lang === 'es' ? 'Motor de Matchmaking & Ghost Slots' : 'Matchmaking & Ghost Slots Engine',
                desc: lang === 'es'
                  ? 'Emparejamiento por percentil ELO de habilidad y monetización algorítmica de huecos libres para asegurar el 100% de ocupación en recintos.'
                  : 'Skill-based matchmaking algorithms and algorithmic open-slot ghost spot monetization ensuring peak facility capacity utilization.'
              },
              {
                icon: Zap,
                title: lang === 'es' ? 'IoT Hardware & Relés de Energía' : 'IoT Hardware & Energy Relays',
                desc: lang === 'es'
                  ? 'Torniquetes ópticos con lectura QR <0.2s, pulseras RFID y relés automáticos de iluminación LED y climatización HVAC (-42% gasto fantasma).'
                  : 'Optical turnstiles (<0.2s QR read), RFID wearables, and automated court LED/HVAC relays saving 42% in idle utility overhead.'
              },
              {
                icon: ShieldCheck,
                title: lang === 'es' ? 'Nube 99.99%, PCI-DSS & RGPD' : '99.99% Cloud, PCI-DSS & GDPR',
                desc: lang === 'es'
                  ? 'Microservicios con SLA del 99.99%, pasarelas de pago con tokenización PCI-DSS Nivel 1 y encriptación de datos biométricos conforme a RGPD.'
                  : 'Cloud microservices with 99.99% uptime SLA, PCI-DSS Level 1 tokenized payment gateways, and GDPR-compliant biometrics encryption.'
              }
            ].map((pillar, pIdx) => {
              const PIcon = pillar.icon;
              return (
                <div key={pIdx} className="p-5 rounded-3xl bg-[#16181C] border border-white/10 space-y-2.5 text-left hover:border-[#FF4900]/40 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-[#FF4900] flex items-center justify-center">
                    <PIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-black text-white uppercase tracking-tight">{pillar.title}</h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Scalability Roadmap Preview */}
          <div className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-[#FF4900]/15 via-black to-[#CDFF00]/15 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#CDFF00] font-bold uppercase tracking-wider">
                {lang === 'es' ? 'Hoja de Ruta Tecnológica 2026 - 2027' : 'Technology Scalability Roadmap 2026 - 2027'}
              </span>
              <h4 className="text-lg font-black text-white uppercase tracking-tight">
                {lang === 'es' ? 'IA de Visión Computacional & Ecosistema Wearables' : 'AI Computer Vision & Wearables Ecosystem'}
              </h4>
              <p className="text-xs text-gray-400 max-w-2xl">
                {lang === 'es'
                  ? 'Integración en desarrollo para tracking de jugadas con cámaras inteligentes, sincronización continua con Apple Watch, WHOOP y Garmin, y Red Global de Torneos.'
                  : 'Upcoming rollout: AI camera player tracking, continuous bidirectional sync with Apple Watch, Garmin and WHOOP, and Global Tournament Network.'}
              </p>
            </div>
            <button
              onClick={() => setActiveModal('appDemo')}
              className="btn-tactile-dark shrink-0 whitespace-nowrap text-xs cursor-pointer"
            >
              <span>{lang === 'es' ? 'Explorar Roadmap' : 'Explore Roadmap'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* SECTION 3: THIS MONTH'S BEST CORPORATE EVENTS (PANORAMIC FACILITY) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        id="events-section" 
        className="w-full max-w-7xl mx-auto px-6 py-20"
      >
        <motion.div 
          variants={scaleIn}
          className="relative rounded-[2.5rem] overflow-hidden p-6 sm:p-12 min-h-[560px] flex flex-col lg:flex-row items-center justify-between gap-8 bg-cover bg-center shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(10,11,13,0.7), rgba(10,11,13,0.2)), url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1600&q=80')`
          }}
        >
          
          {/* Left area */}
          <motion.div variants={slideInLeft} className="lg:w-1/2 text-left self-start lg:self-center text-white space-y-3">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#CDFF00] text-xs font-extrabold uppercase tracking-widest border border-white/20">
              {lang === 'es' ? 'Calendario de Salud & Competición 2026' : 'Health & Competition Calendar 2026'}
            </span>
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight">
              {lang === 'es' ? <>Cultura de Equipo.<br />Retos que Unen.</> : <>Team Culture.<br />Challenges that Unite.</>}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-md leading-relaxed">
              {lang === 'es'
                ? 'Organizamos ligas internas, retos inter-departamentales y jornadas deportivas para que el bienestar sea una experiencia colectiva.'
                : 'We host internal leagues, cross-department tournaments, and sports days to make wellness an engaging collective experience.'}
            </p>
          </motion.div>

          {/* Right Floating White Event Container */}
          <motion.div variants={slideInRight} className="lg:w-1/2 w-full max-w-xl bg-white dark:bg-[#14161B] rounded-3xl p-6 sm:p-8 shadow-2xl relative text-left border border-transparent dark:border-white/10">
            
            {/* Neon Lime Circular Action Badge with Kinetic Spring Rotation */}
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => handleOpenEvent(events[0])}
              className="absolute -top-6 -right-4 sm:-right-6 w-14 h-14 rounded-full bg-[#CDFF00] text-black flex items-center justify-center shadow-lg cursor-pointer group"
              title="Abrir detalles de eventos"
            >
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.div>

            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
                {lang === 'es' ? <>Eventos & Retos Deportivos<br />de Este Mes</> : <>Tournaments & Sports Challenges<br />This Month</>}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed max-w-md">
                {lang === 'es'
                  ? 'Haz clic en cualquier evento para ver el formato, las plazas disponibles y cómo inscribir a tus departamentos.'
                  : 'Click any event to view the format, open spots, and team registration details.'}
              </p>
            </div>

            {/* 2x2 Events Grid with Staggered animations */}
            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pb-6 border-b border-gray-100 dark:border-white/10">
              {events.map((ev) => (
                <motion.div 
                  key={ev.id} 
                  variants={fadeInUp}
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 350 }}
                  onClick={() => handleOpenEvent(ev)}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-white/5 hover:bg-[#FF4900]/5 dark:hover:bg-[#FF4900]/10 hover:border-[#FF4900]/20 border border-transparent dark:border-white/5 transition-all cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl bg-black text-white flex flex-col items-center justify-center shrink-0 group-hover:bg-[#FF4900] transition-colors">
                    <span className="text-[9px] uppercase tracking-wider text-gray-300 font-mono">{ev.month}</span>
                    <span className="text-base font-bold leading-none">{ev.date}</span>
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold text-gray-900 dark:text-white truncate group-hover:text-[#FF4900] transition-colors">{ev.title}</div>
                    <div className="text-[11px] text-gray-500 dark:text-gray-400 truncate">{ev.location}</div>
                    <div className="text-[10px] text-gray-400 dark:text-gray-400 font-mono mt-0.5 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#FF4900]" /> {ev.time}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Link at bottom */}
            <div className="pt-4 flex items-center justify-between text-xs font-extrabold text-gray-900 dark:text-white">
              <button 
                onClick={() => handleOpenEvent(events[0])}
                className="flex items-center gap-1.5 hover:text-[#FF4900] transition-colors cursor-pointer"
              >
                <span>{lang === 'es' ? 'Inscribir mi empresa en los torneos' : 'Register my company for tournaments'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>

        </motion.div>
      </motion.section>

      {/* SECTION 4: 3-COLUMN FEATURE CARDS (WITH INTERACTIVE MODALS) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="w-full max-w-7xl mx-auto px-6 py-12"
      >
        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Card 1: Modular Rooms */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveModal('rooms')}
            className="rounded-3xl bg-white dark:bg-[#14161B] p-5 border border-gray-100 dark:border-white/10 shadow-sm flex items-center justify-between hover:shadow-xl hover:border-black/10 dark:hover:border-white/20 transition-all cursor-pointer group"
          >
            <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=400&q=80"
                alt="Modular sports room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="ml-4 flex flex-col justify-between h-24 flex-1">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#FF4900] font-bold">
                  {lang === 'es' ? 'Arquitectura 3D' : '3D Architecture'}
                </span>
                <h4 className="text-sm font-extrabold text-gray-900 dark:text-white leading-snug mt-0.5 group-hover:text-[#FF4900] transition-colors">
                  {lang === 'es' ? <>Conoce las Salas<br />Modulares</> : <>Explore Modular<br />Studios</>}
                </h4>
              </div>
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">
                <span>{lang === 'es' ? 'Ver Modelos (30-250 m²)' : 'View Models (30-250 sqm)'}</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Fisioterapia & Prevención */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveModal('protocol')}
            className="rounded-3xl bg-white dark:bg-[#14161B] p-5 border border-gray-100 dark:border-white/10 shadow-sm flex items-center justify-between hover:shadow-xl hover:border-black/10 dark:hover:border-white/20 transition-all cursor-pointer group"
          >
            <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80"
                alt="Physiotherapy in office"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="ml-4 flex flex-col justify-between h-24 flex-1">
              <div>
                <span className="text-[10px] font-mono uppercase text-sport-blue font-bold">
                  {lang === 'es' ? 'Salud Ocupacional' : 'Occupational Health'}
                </span>
                <h4 className="text-sm font-extrabold text-gray-900 dark:text-white leading-snug mt-0.5 group-hover:text-sport-blue transition-colors">
                  {lang === 'es' ? <>Fisioterapia<br />In-Company</> : <>In-Company<br />Physiotherapy</>}
                </h4>
              </div>
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">
                <span>{lang === 'es' ? 'Ver Rutinas y Citas' : 'View Routines & Slots'}</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Neon Lime Deals & ROI Card */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveModal('roi')}
            className="rounded-3xl bg-[#D4F724] p-5 shadow-sm flex items-center justify-between hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className="w-24 h-24 rounded-2xl bg-white/40 flex items-center justify-center shrink-0">
              <Percent className="w-12 h-12 text-black" />
            </div>
            <div className="ml-4 flex flex-col justify-between h-24 flex-1">
              <div>
                <span className="text-[10px] font-mono uppercase text-black/70 font-black">
                  {lang === 'es' ? 'Fiscalidad & Retorno' : 'Tax & ROI'}
                </span>
                <h4 className="text-sm font-black text-gray-950 leading-snug mt-0.5">
                  {lang === 'es' ? <>100% Gasto<br />Deducible</> : <>100% Tax<br />Deductible</>}
                </h4>
              </div>
              <div className="inline-flex items-center gap-1 text-[11px] font-black text-gray-900">
                <span>{lang === 'es' ? 'Calcular Ahorro B2B' : 'Calculate B2B Savings'}</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          </motion.div>

        </motion.div>
      </motion.section>

      {/* SECTION 2: MEMBERSHIPS & PRICING (OFFICIAL SPECIFICATION) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        id="plans-section" 
        className="w-full max-w-7xl mx-auto px-6 py-24 text-left"
      >
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-200 text-xs font-extrabold uppercase tracking-widest mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#FF4900]" /> {t.memberships.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-gray-900 dark:text-white leading-tight">
            {t.memberships.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
            {t.memberships.desc}
          </p>

          {/* Billing Cycle Switcher: Mensual vs Anual (~16% Ahorro) */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 shadow-inner">
            <button
              onClick={() => {
                setBillingCycle('monthly');
                triggerToast(lang === 'es' ? 'Facturación mensual seleccionada' : 'Monthly billing selected');
              }}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-black dark:bg-[#FF4900] text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
              }`}
            >
              {lang === 'es' ? 'Facturación Mensual' : 'Monthly Billing'}
            </button>
            <button
              onClick={() => {
                setBillingCycle('annual');
                triggerToast(lang === 'es' ? 'Facturación anual con ~16% de descuento aplicada' : 'Annual billing with ~16% discount applied');
              }}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-[#FF4900] text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
              }`}
            >
              <span>{lang === 'es' ? 'Pago Anual' : 'Annual Billing'}</span>
              <span className="px-2 py-0.5 rounded-full bg-[#CDFF00] text-black font-extrabold text-[10px]">
                {lang === 'es' ? '-16% Dto.' : 'Save ~16%'}
              </span>
            </button>
          </div>
        </motion.div>

        {/* 4-Column Responsive Grid for 4 Pricing Tiers */}
        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-2">
          {plans.map((p) => (
            <motion.div
              key={p.id}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: p.popular ? 1.03 : 1.01 }}
              transition={{ type: 'spring', damping: 22, stiffness: 280 }}
              className={`rounded-[2.5rem] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                p.popular
                  ? 'bg-black text-white shadow-2xl scale-[1.02] border-2 border-[#FF4900] ring-4 ring-[#FF4900]/20'
                  : 'bg-white dark:bg-[#14161B] text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 shadow-lg'
              }`}
            >
              {/* Recommended Badge */}
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF4900] text-white text-[10px] font-mono font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CDFF00] animate-ping" />
                  {lang === 'es' ? 'Membresía Recomendada' : 'Most Popular Plan'}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    p.popular ? 'bg-[#CDFF00] text-black font-extrabold' : 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300'
                  }`}>
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black uppercase tracking-tight mb-1">
                  {p.name}
                </h3>
                <span className="text-[11px] text-gray-400 font-semibold block mb-3">{p.target}</span>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 my-3">
                  <span className={`text-4xl font-black tracking-tight ${p.popular ? 'text-[#CDFF00]' : 'text-gray-900 dark:text-white'}`}>
                    {p.price}
                  </span>
                  <span className={`text-xs font-bold ${p.popular ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>
                    {p.period}
                  </span>
                </div>

                {/* SLA Guarantee Badge */}
                <div className={`text-[10px] font-mono p-2 rounded-xl mb-4 flex items-start gap-1.5 border ${
                  p.popular 
                    ? 'bg-white/10 border-white/15 text-gray-300' 
                    : 'bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400'
                }`}>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF4900] shrink-0 mt-0.5" />
                  <span className="leading-tight">{p.sla}</span>
                </div>

                <p className={`text-xs leading-relaxed mb-5 ${p.popular ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>
                  {p.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-gray-100 dark:border-white/10">
                  <div className={`text-[10px] font-mono uppercase tracking-widest font-bold ${p.popular ? 'text-[#CDFF00]' : 'text-[#FF4900]'}`}>
                    {lang === 'es' ? 'Prestaciones Clave' : 'Key Inclusions'}
                  </div>
                  {p.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${p.popular ? 'text-[#CDFF00]' : 'text-[#FF4900]'}`} />
                      <span className={p.popular ? 'text-gray-200' : 'text-gray-700 dark:text-gray-300'}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-gray-100 dark:border-white/10">
                <button
                  onClick={() => {
                    setSelectedPlan(p.id);
                    if (p.id === 'rookie' || p.id === 'athlete' || p.id === 'elite') {
                      setAuthMode('signup');
                      setAuthRole('athlete');
                      setActiveModal('auth');
                    } else {
                      setActiveModal('planProposal');
                    }
                  }}
                  aria-label={`Seleccionar plan ${p.name}`}
                  className={`w-full ${p.popular ? 'btn-tactile-orange' : 'btn-tactile-dark'} justify-between group cursor-pointer text-xs`}
                >
                  <span>{p.cta}</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* SECTION 2.5: OPERATIONAL SCENARIOS & INTERACTIVE USE CASES (OFFICIAL SPECIFICATION) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        id="use-cases-section" 
        className="w-full max-w-7xl mx-auto px-6 py-20 text-left"
      >
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CDFF00]/20 text-black dark:text-[#CDFF00] text-xs font-black uppercase tracking-widest border border-[#CDFF00]/40 mb-3">
            <Activity className="w-3.5 h-3.5 text-[#FF4900]" />
            {lang === 'es' ? 'Casos de Uso Operativos' : 'Operational Scenarios'}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-gray-900 dark:text-white leading-tight">
            {lang === 'es' ? 'Tres Vías Reales de Impacto' : 'Three Tangible Pathways of Impact'}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
            {lang === 'es' 
              ? 'Experimenta interactivamente cómo Room for Sport optimiza la experiencia de un jugador de fin de semana, una capitana de club amateur y el director de un gran complejo deportivo.' 
              : 'Test how Room for Sport resolves real-world friction for a casual weekend warrior, an amateur club captain, and an arena operations director.'}
          </p>

          {/* Hick's Law: 3 Clear Persona Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8" role="tablist">
            {[
              { id: 'marcus', label: lang === 'es' ? '1. Marcus (Jugador Casual)' : '1. Marcus (Casual Athlete)', icon: Users, sub: 'Búsqueda 5km & Torniquete QR' },
              { id: 'elena', label: lang === 'es' ? '2. Elena (Capitana FC Metropol)' : '2. Elena (Club Captain)', icon: Trophy, sub: 'Pizarra 4-3-3 & Roster Fee Split' },
              { id: 'carlos', label: lang === 'es' ? '3. Carlos (Director Apex Arena)' : '3. Carlos (Operations Director)', icon: BarChart3, sub: 'Precios Dinámicos & IoT' },
            ].map((tab) => {
              const isSelected = activeUseCase === tab.id;
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    setActiveUseCase(tab.id);
                    triggerToast(lang === 'es' ? `Cargando caso: ${tab.label}` : `Viewing scenario: ${tab.label}`);
                  }}
                  className={`px-5 py-3 rounded-2xl text-xs font-bold transition-all flex items-center gap-2.5 cursor-pointer border ${
                    isSelected
                      ? 'bg-black dark:bg-[#FF4900] text-white border-transparent shadow-lg scale-105'
                      : 'bg-white dark:bg-[#14161B] text-gray-700 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-gray-400'
                  }`}
                >
                  <TabIcon className={`w-4 h-4 ${isSelected ? 'text-[#CDFF00]' : 'text-[#FF4900]'}`} />
                  <div className="text-left">
                    <div className="leading-tight">{tab.label}</div>
                    <div className={`text-[10px] font-normal ${isSelected ? 'text-gray-200' : 'text-gray-400'}`}>{tab.sub}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content 1: MARCUS */}
        {activeUseCase === 'marcus' && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-[2.5rem] bg-white dark:bg-[#14161B] border border-gray-200 dark:border-white/10 p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-extrabold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                {lang === 'es' ? 'Búsqueda Geoespacial & Matchmaking' : 'Geospatial Discovery & Matchmaking'}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
                Marcus • {lang === 'es' ? 'Profesional Reubicado & Baloncesto de Fin de Semana' : 'Relocated Professional & Weekend Basketball'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {lang === 'es'
                  ? 'Marcus busca un partido de baloncesto pick-up a menos de 5 km este sábado por la mañana. Con Room for Sport encuentra un hueco libre en Metro Arena, paga su micro-cuota de €4.50 con un toque en su monedero digital y recibe un código QR encriptado para cruzar el torniquete de acceso.'
                  : 'Marcus seeks a pick-up basketball match within 5km this Saturday morning. Room for Sport discovers a vacancy at Metro Arena, processes his €4.50 wallet micropayment, and grants instant optical turnstile gate clearance.'}
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span>{lang === 'es' ? 'Radio de búsqueda de partidos abiertos:' : 'Match discovery radius:'}</span>
                    <span className="font-mono text-[#FF4900]">5.0 km</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 pt-1">
                    <span>📍 Metro Arena • {lang === 'es' ? 'Cancha B' : 'Court B'}</span>
                    <span className="font-bold text-emerald-500">
                      {lang === 'es' ? '9 / 10 Jugadores (¡Última Plaza!)' : '9 / 10 Players (Last Spot!)'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {!marcusJoined ? (
                    <button
                      onClick={() => {
                        setMarcusJoined(true);
                        triggerToast(lang === 'es' ? '¡Te has unido al partido por €4.50! Pase QR generado.' : 'Joined match for €4.50! Turnstile QR pass generated.');
                      }}
                      className="btn-tactile-orange cursor-pointer"
                    >
                      <DollarSign className="w-4 h-4" />
                      <span>{lang === 'es' ? 'Unirme al Partido (€4.50 Saldo Monedero)' : 'Join Pick-up Match (€4.50 Wallet)'}</span>
                    </button>
                  ) : (
                    <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>{lang === 'es' ? '¡Plaza Confirmada! Monedero: -€4.50 • Torniquete Autorizado' : 'Spot Reserved! Wallet: -€4.50 • Turnstile Authorized'}</span>
                    </div>
                  )}
                  {marcusJoined && (
                    <button
                      onClick={() => setMarcusJoined(false)}
                      className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-white underline cursor-pointer"
                    >
                      {lang === 'es' ? 'Reiniciar' : 'Reset'}
                    </button>
                  )}
                </div>
              </div>

              {/* Sportsmanship Rating Preview */}
              <div className="pt-2 border-t border-gray-100 dark:border-white/10 flex items-center justify-between text-xs">
                <span className="text-gray-500 dark:text-gray-400">
                  {lang === 'es' ? 'Calificación post-partido (Fair-play):' : 'Post-match sportsmanship rating:'}
                </span>
                <div className="flex items-center gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-current cursor-pointer hover:scale-110 transition-transform" />
                  ))}
                  <span className="text-[10px] text-gray-400 font-mono ml-1">5.0</span>
                </div>
              </div>
            </div>

            {/* Marcus Right Card: Dynamic IoT QR Gate Pass */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-sm rounded-[2.5rem] bg-[#0A0B0D] text-white p-7 border border-white/15 shadow-2xl relative space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#FF4900] flex items-center justify-center font-bold text-xs">
                      RFS
                    </div>
                    <div>
                      <div className="text-xs font-bold">
                        {lang === 'es' ? 'Pase Digital de Acceso IoT' : 'IoT Digital Access Pass'}
                      </div>
                      <div className="text-[10px] text-gray-400 font-mono">
                        {lang === 'es' ? 'Torniquete Óptico • Metro Arena' : 'Optical Turnstile • Metro Arena'}
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    {lang === 'es' ? 'ACTIVO' : 'ACTIVE'}
                  </span>
                </div>

                <div className="p-6 rounded-3xl bg-white flex flex-col items-center justify-center space-y-3">
                  <div className="w-40 h-40 bg-gray-100 rounded-2xl p-2 flex items-center justify-center border-2 border-dashed border-gray-300">
                    <QrCode className="w-32 h-32 text-black" />
                  </div>
                  <div className="text-[10px] font-mono text-gray-600 text-center">
                    TOKEN: RFS-BASKET-2026-MC99<br />
                    {lang === 'es' ? 'Aproxima al lector óptico del torniquete' : 'Tap against optical turnstile scanner'}
                  </div>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-gray-400 text-[11px]">
                    <span>{lang === 'es' ? 'Hora de inicio:' : 'Start time:'}</span>
                    <span className="text-white font-mono font-bold">
                      {lang === 'es' ? 'Sábado 10:30 AM' : 'Saturday 10:30 AM'}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-[11px]">
                    <span>{lang === 'es' ? 'Apertura de torniquete:' : 'Turnstile clearance:'}</span>
                    <span className="text-[#CDFF00] font-mono font-bold">10:15 AM (-15 min)</span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-[11px]">
                    <span>{lang === 'es' ? 'Nivel de Habilidad (Skill Engine):' : 'Skill Engine Level:'}</span>
                    <span className="text-white font-mono">
                      {lang === 'es' ? 'Intermedio Avanzado' : 'Advanced Intermediate'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab Content 2: ELENA */}
        {activeUseCase === 'elena' && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-[2.5rem] bg-white dark:bg-[#14161B] border border-gray-200 dark:border-white/10 p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
                <Trophy className="w-3.5 h-3.5" />
                {lang === 'es' ? 'Gestión de Clubes & Finanzas' : 'Club Management & Roster Split'}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
                Elena • {lang === 'es' ? 'Capitana de FC Metropol (Fútbol 11 Amateur)' : 'Captain of FC Metropol (11-a-side Football)'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {lang === 'es'
                  ? 'Elena diseña las rotaciones tácticas 4-3-3 de su equipo, monitoriza el parte de lesiones (2 jugadoras de baja) y divide automáticamente la factura de €120 del campo entre las 15 jugadoras convocadas (€8.00 por jugadora) sin tener que perseguir transferencias manuales ni pagar de su propio bolsillo.'
                  : 'Elena designs 4-3-3 tactical match sheets, monitors squad injury telemetry (2 out with strain), and automates €120 pitch fee splitting across 15 active players (€8.00 each) directly via integrated wallets.'}
              </p>

              {/* Roster & Financial Split Simulator */}
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-3">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span>{lang === 'es' ? 'Alquiler de Campo de Fútbol Césped 60 min:' : 'Pitch rental 60 min:'}</span>
                  <span className="font-mono text-base text-gray-900 dark:text-white">€120.00</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
                  <div className="p-2 rounded-xl bg-white dark:bg-[#1A1C20] border border-gray-200 dark:border-white/10">
                    <span className="text-[10px] text-gray-400 block">{lang === 'es' ? 'Plantilla' : 'Roster'}</span>
                    <span className="font-mono font-bold">18 {lang === 'es' ? 'Jugadoras' : 'Players'}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 text-red-600 dark:text-red-400">
                    <span className="text-[10px] block">{lang === 'es' ? 'Lesiones' : 'Injuries'}</span>
                    <span className="font-mono font-bold">2 {lang === 'es' ? 'Bajas' : 'Injuries'}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 text-emerald-600 dark:text-emerald-400">
                    <span className="text-[10px] block">{lang === 'es' ? 'Convocadas' : 'Call-ups'}</span>
                    <span className="font-mono font-bold">15 {lang === 'es' ? 'Activas' : 'Active'}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs pt-2 border-t border-gray-200 dark:border-white/10">
                  <span className="text-gray-500 dark:text-gray-400 font-bold">{lang === 'es' ? 'Cuota Roster Split Fee:' : 'Automated Split Fee:'}</span>
                  <span className="font-mono font-black text-sm text-[#FF4900]">€8.00 / {lang === 'es' ? 'jugadora' : 'player'}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setElenaSplitActive(true);
                    triggerToast(lang === 'es' ? '¡Recordatorios push de cobro enviados a las 2 pendientes!' : 'Push payment reminders dispatched to 2 pending players!');
                  }}
                  className="btn-tactile-orange cursor-pointer"
                >
                  <DollarSign className="w-4 h-4" />
                  <span>{lang === 'es' ? 'Ejecutar División Financiera (€8.00 x 15)' : 'Execute Roster Split (€8.00 x 15)'}</span>
                </button>
                {elenaSplitActive && (
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> {lang === 'es' ? '13/15 Cobradas' : '13/15 Collected'}
                  </span>
                )}
              </div>
            </div>

            {/* Elena Right Card: 4-3-3 Tactical Board Visualizer */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md rounded-[2.5rem] bg-emerald-900 text-white p-6 border-2 border-emerald-700/60 shadow-2xl relative space-y-4">
                <div className="flex items-center justify-between border-b border-white/20 pb-3 text-xs">
                  <div className="font-bold flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#CDFF00] animate-pulse" />
                    FC Metropol • {lang === 'es' ? 'Pizarra Táctica 4-3-3' : '4-3-3 Tactical Board'}
                  </div>
                  <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded-full">Interactive Playbook</span>
                </div>

                {/* Simulated Pitch */}
                <div className="w-full h-64 rounded-2xl bg-gradient-to-b from-emerald-800 to-emerald-900 border border-white/30 p-3 relative flex flex-col justify-between overflow-hidden shadow-inner">
                  {/* Pitch lines */}
                  <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-[1px] bg-white/30" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-white/30" />

                  {/* Forwards (3) */}
                  <div className="flex justify-around relative z-10">
                    <span className="px-2 py-1 rounded-full bg-[#CDFF00] text-black text-[9px] font-black shadow-md">EXT • Sofía</span>
                    <span className="px-2 py-1 rounded-full bg-[#CDFF00] text-black text-[9px] font-black shadow-md">DC • Lucía</span>
                    <span className="px-2 py-1 rounded-full bg-[#CDFF00] text-black text-[9px] font-black shadow-md">EXT • Carla</span>
                  </div>

                  {/* Midfielders (3) */}
                  <div className="flex justify-around relative z-10">
                    <span className="px-2 py-1 rounded-full bg-white text-black text-[9px] font-black shadow-md">MC • Elena (C)</span>
                    <span className="px-2 py-1 rounded-full bg-white text-black text-[9px] font-black shadow-md">MCD • Marta</span>
                    <span className="px-2 py-1 rounded-full bg-white text-black text-[9px] font-black shadow-md">MC • Andrea</span>
                  </div>

                  {/* Defenders (4) */}
                  <div className="flex justify-around relative z-10">
                    <span className="px-2 py-1 rounded-full bg-white text-black text-[9px] font-black shadow-md">LD • Clara</span>
                    <span className="px-2 py-1 rounded-full bg-white text-black text-[9px] font-black shadow-md">DFC • Paula</span>
                    <span className="px-2 py-1 rounded-full bg-white text-black text-[9px] font-black shadow-md">DFC • Nerea</span>
                    <span className="px-2 py-1 rounded-full bg-white text-black text-[9px] font-black shadow-md">LI • Sara</span>
                  </div>

                  {/* Goalkeeper (1) */}
                  <div className="flex justify-center relative z-10">
                    <span className="px-2 py-1 rounded-full bg-[#FF4900] text-white text-[9px] font-black shadow-md">POR • Irene</span>
                  </div>
                </div>

                <div className="text-[11px] text-emerald-200 flex justify-between items-center">
                  <span>{lang === 'es' ? 'Parte Médico:' : 'Medical Report:'} <strong>Marcos ({lang === 'es' ? 'Esguince' : 'Sprain'})</strong> • <strong>David ({lang === 'es' ? 'Sobrecarga' : 'Strain'})</strong></span>
                  <span className="font-mono text-[10px] text-[#CDFF00]">{lang === 'es' ? 'Reserva Activada' : 'Booking Active'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab Content 3: CARLOS */}
        {activeUseCase === 'carlos' && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-[2.5rem] bg-white dark:bg-[#14161B] border border-gray-200 dark:border-white/10 p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-xs font-extrabold uppercase tracking-wider">
                <BarChart3 className="w-3.5 h-3.5" />
                {lang === 'es' ? 'Optimización B2B de Recintos & IoT' : 'B2B Venue Operations & IoT'}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
                Carlos • {lang === 'es' ? 'Director de Operaciones en Apex Multisport Arena' : 'Operations Director at Apex Multisport Arena'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {lang === 'es'
                  ? 'Carlos gestiona un complejo de 12 canchas con una tasa de ocupación baja (22%) en mañanas laborables. Al activar el motor de precios dinámicos de Room for Sport con un 35% de descuento off-peak, la ocupación se disparó al 74% en 48 horas, generando +€4,380 al mes en ingresos netos recuperados y automatizando el encendido de focos LED e impulsión HVAC.'
                  : 'Carlos operates a 12-court arena plagued by 22% off-peak morning occupancy. Enabling Room for Sport dynamic pricing with a 35% discount surged utilization to 74% in 48 hours, unlocking +€4,380/mo in net revenue and automating LED/HVAC relays.'}
              </p>

              {/* Dynamic Discount Simulator */}
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-3">
                <div className="flex justify-between items-center text-xs font-bold">
                  <label htmlFor="dynamic-discount-range">{lang === 'es' ? 'Descuento Dinámico Franjas Valle (Off-Peak):' : 'Off-Peak Dynamic Discount:'}</label>
                  <span className="font-mono text-base text-[#FF4900]">-{carlosDiscount}%</span>
                </div>
                <input
                  id="dynamic-discount-range"
                  type="range"
                  min="15"
                  max="50"
                  step="5"
                  value={carlosDiscount}
                  onChange={(e) => setCarlosDiscount(Number(e.target.value))}
                  className="w-full accent-[#FF4900] cursor-pointer"
                />

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white dark:bg-[#1A1C20] border border-gray-200 dark:border-white/10 text-left">
                    <span className="text-[10px] text-gray-400 block">{lang === 'es' ? 'Ocupación Valle Inicial' : 'Baseline Occupancy'}</span>
                    <span className="text-xl font-mono font-bold text-gray-400">22%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-left">
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block font-bold">{lang === 'es' ? 'Ocupación Tras 48h' : 'Surge Occupancy'}</span>
                    <span className="text-xl font-mono font-black text-emerald-600 dark:text-emerald-300">
                      {Math.min(95, Math.round(22 + (carlosDiscount * 1.48)))}%
                    </span>
                  </div>
                </div>
              </div>

              {/* IoT Hardware Relay Status */}
              <div className="p-4 rounded-2xl bg-[#0A0B0D] text-white border border-white/15 space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-bold flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#CDFF00]" />
                    {lang === 'es' ? 'Relé Automatizado Iluminación LED & Clima' : 'Automated IoT Lighting & HVAC Relay'}
                  </span>
                  <span className="text-[10px] font-mono text-[#CDFF00] font-bold">
                    {lang === 'es' ? 'STANDBY ACTIVO' : 'ACTIVE STANDBY'}
                  </span>
                </div>
                <p className="text-[11px] text-gray-400">
                  {lang === 'es'
                    ? 'Los focos LED de las pistas 1 a 12 se encienden automáticamente 5 min antes de cada reserva y se apagan al minuto 58, eliminando el consumo fantasma.'
                    : 'LED floodlights and HVAC switch on 5 min before sessions and power down at minute 58, eliminating phantom utility waste.'}
                </p>
              </div>
            </div>

            {/* Carlos Right Card: Financial Surge Dashboard */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-sm rounded-[2.5rem] bg-[#14161B] text-white p-7 border border-white/10 shadow-2xl space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#CDFF00]">Apex Multisport Arena</div>
                    <div className="text-[10px] text-gray-400 font-mono">
                      {lang === 'es' ? '12 Canchas • Resumen Operativo' : '12 Courts • Operations Summary'}
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
                    99.99% SLA
                  </span>
                </div>

                <div className="p-5 rounded-3xl bg-black/50 border border-white/10 text-center space-y-1">
                  <div className="text-[10px] font-mono uppercase text-gray-400">{lang === 'es' ? 'Ingresos Mensuales Recuperados' : 'Monthly Recovered Revenue'}</div>
                  <div className="text-3xl font-mono font-black text-[#CDFF00]">
                    +€{Math.round(4380 * (carlosDiscount / 35)).toLocaleString()} / mes
                  </div>
                  <div className="text-[10px] text-emerald-400">
                    {lang === 'es' ? 'De franjas muertas a beneficio neto directo' : 'Direct yield from previously idle slots'}
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">{lang === 'es' ? 'Software Marca Blanca:' : 'White-Label Portal:'}</span>
                    <span className="text-white font-bold">{lang === 'es' ? 'Desplegado' : 'Deployed'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">{lang === 'es' ? 'Torniquetes RFID & QR:' : 'Turnstiles & QR Hardware:'}</span>
                    <span className="text-white font-bold">{lang === 'es' ? '12 Pasos Enlazados' : '12 Linked Gates'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">{lang === 'es' ? 'Conciliación Fiscal Automática:' : 'Automated Tax Reconciliation:'}</span>
                    <span className="text-white font-bold font-mono">PCI-DSS L1</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedPlan('facility');
                    setActiveModal('planProposal');
                  }}
                  className="btn-tactile-orange w-full justify-between group cursor-pointer text-xs"
                >
                  <span>{lang === 'es' ? 'Solicitar Auditoría para mi Recinto' : 'Request Arena Operations Audit'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.section>

      {/* SECTION 3: SERVICES & ACTIVITIES (OFFICIAL SPECIFICATION) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        id="services-section" 
        className="w-full max-w-7xl mx-auto px-6 py-24 text-left"
      >
        <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FF4900]/10 border border-[#FF4900]/20 text-[#FF4900] text-xs font-extrabold uppercase tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5" /> {t.services.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-gray-900 dark:text-white leading-tight">
            {t.services.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
            {t.services.desc}
          </p>
        </motion.div>

        {/* Hick's Law: 4 Clear Filter Pills */}
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist" aria-label="Filtro de disciplinas deportivas">
          {[
            { id: 'all', label: t.services.filters.all, count: 7 },
            { id: 'team', label: t.services.filters.team, count: 3 },
            { id: 'individual', label: t.services.filters.individual, count: 3 },
            { id: 'workouts', label: t.services.filters.workouts, count: 1 }
          ].map((tab) => {
            const isSelected = serviceFilter === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleFilterServices(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg shadow-black/10 scale-105'
                    : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected 
                    ? 'bg-[#FF4900] text-white' 
                    : 'bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-300'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Services & Activities Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {servicesData
              .filter(s => serviceFilter === 'all' || s.category === serviceFilter)
              .map((s) => (
                <motion.div
                  key={s.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl bg-white dark:bg-[#14161B] border border-gray-200 dark:border-white/10 overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Sport Card Image with Badges */}
                    <div className="relative h-52 overflow-hidden">
                      <img 
                        src={s.image} 
                        alt={s.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#CDFF00] text-[10px] font-mono font-bold uppercase tracking-wider border border-white/10">
                          {s.badge}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                        <span className="text-[11px] font-mono uppercase font-bold text-gray-300">
                          {lang === 'es' ? s.categoryNameEs : s.categoryName}
                        </span>
                        <span className="text-[11px] font-mono font-bold bg-[#FF4900] px-2 py-0.5 rounded-md">
                          {s.duration}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">
                          {lang === 'es' ? s.nameEs : s.name}
                        </h3>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">
                          {s.intensity}
                        </span>
                      </div>

                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {lang === 'es' ? s.description : s.descriptionEn}
                      </p>

                      {/* Micro-Features */}
                      <div className="pt-2 space-y-1.5 border-t border-gray-100 dark:border-white/5">
                        {s.features.slice(0, 2).map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[11px] text-gray-700 dark:text-gray-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => setSelectedService(s)}
                      className="w-full py-2.5 px-4 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-[#FF4900] dark:hover:bg-[#FF4900] hover:text-white text-xs font-bold text-gray-800 dark:text-gray-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer group/btn"
                    >
                      <span>{lang === 'es' ? 'Ver Rutina & Drills' : 'View Routine & Drills'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      </motion.section>

      {/* SECTION 4: USER DASHBOARD / PROGRESS TRACKING (OFFICIAL SPECIFICATION) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        id="dashboard-section" 
        className="w-full max-w-7xl mx-auto px-6 py-24 text-left"
      >
        <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-widest mb-3">
            <BarChart3 className="w-3.5 h-3.5" /> {t.dashboard.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-gray-900 dark:text-white leading-tight">
            {lang === 'es' ? `¡Bienvenido de nuevo, ${athleteName}!` : `Welcome back, ${athleteName}!`}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
            {t.dashboard.sub}
          </p>
        </motion.div>

        {/* 3 Interactive Widgets Suite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* WIDGET 1: My Training Diary -> Log Today's Workout (Interactive Form & Live Entries Feed) */}
          <motion.div 
            variants={fadeInUp}
            className="lg:col-span-5 rounded-[2.5rem] bg-white dark:bg-[#14161B] border border-gray-200 dark:border-white/10 p-6 sm:p-8 shadow-xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#FF4900] text-white flex items-center justify-center font-bold shadow-md shadow-[#FF4900]/20">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight">
                    {t.dashboard.widget1Title}
                  </h3>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    {t.dashboard.widget1Sub}
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase font-bold bg-[#CDFF00] text-black px-2.5 py-1 rounded-full">
                {trainingDiary.length} {lang === 'es' ? 'Sesiones' : 'Sessions'}
              </span>
            </div>

            {/* Quick Workout Logger Form */}
            <form onSubmit={handleLogWorkout} className="space-y-3.5 text-xs text-left bg-gray-50 dark:bg-white/5 p-4 rounded-2xl border border-gray-100 dark:border-white/5">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="diary-sport-select" className="block text-[11px] font-bold text-gray-700 dark:text-gray-300 mb-1">
                    {lang === 'es' ? 'Disciplina / Deporte' : 'Sport / Activity'}
                  </label>
                  <select 
                    id="diary-sport-select"
                    value={diaryForm.sport}
                    onChange={(e) => setDiaryForm({ ...diaryForm, sport: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-[#1A1C23] dark:text-white text-xs font-semibold focus:outline-none focus:border-[#FF4900]"
                  >
                    <option value="Basketball 3v3">Basketball 3v3</option>
                    <option value="Fútbol Sala 5v5">{lang === 'es' ? 'Fútbol Sala 5v5' : 'Futsal 5v5'}</option>
                    <option value="Voleibol & Saltabilidad">{lang === 'es' ? 'Voleibol & Saltabilidad' : 'Volleyball & Jump Drills'}</option>
                    <option value="Natación a Contracorriente">{lang === 'es' ? 'Natación a Contracorriente' : 'Endless Pool Swimming'}</option>
                    <option value="Ajedrez Blitz">{lang === 'es' ? 'Ajedrez Blitz' : 'Blitz Chess'}</option>
                    <option value="Patinaje & Inline Agility">{lang === 'es' ? 'Patinaje & Inline Agility' : 'Inline Skating & Agility'}</option>
                    <option value="Workout: Fuerza & Hipertrofia">{lang === 'es' ? 'Workout: Fuerza & Hipertrofia' : 'Workout: Strength & Hypertrophy'}</option>
                    <option value="HIIT & Cardio Metabólico">{lang === 'es' ? 'HIIT & Cardio Metabólico' : 'HIIT & Metabolic Conditioning'}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="diary-duration-input" className="block text-[11px] font-bold text-gray-700 dark:text-gray-300 mb-1">
                    {lang === 'es' ? 'Duración (min)' : 'Duration (min)'}
                  </label>
                  <input 
                    id="diary-duration-input"
                    type="number"
                    min="10"
                    max="180"
                    value={diaryForm.duration}
                    onChange={(e) => setDiaryForm({ ...diaryForm, duration: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-[#1A1C23] dark:text-white text-xs font-semibold focus:outline-none focus:border-[#FF4900]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="diary-notes-input" className="block text-[11px] font-bold text-gray-700 dark:text-gray-300 mb-1">
                  {lang === 'es' ? 'Notas de la sesión / RPE' : 'Session Notes / RPE'}
                </label>
                <input 
                  id="diary-notes-input"
                  type="text"
                  placeholder={lang === 'es' ? 'Ej. Buenas sensaciones en tiros y sentadilla' : 'E.g. Great shot arc and heavy reps'}
                  value={diaryForm.notes}
                  onChange={(e) => setDiaryForm({ ...diaryForm, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-[#1A1C23] dark:text-white text-xs focus:outline-none focus:border-[#FF4900]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#FF4900] hover:bg-[#e04000] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm shadow-[#FF4900]/25"
              >
                <Plus className="w-4 h-4" />
                <span>{lang === 'es' ? "Registrar Entrenamiento de Hoy" : "Log Today's Workout"}</span>
              </button>
            </form>

            {/* Live Diary Entries */}
            <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
              <span className="text-[10px] font-mono font-bold uppercase text-gray-400 block mb-1">
                {lang === 'es' ? 'Registro Reciente' : 'Recent Log Entries'}
              </span>
              <AnimatePresence>
                {trainingDiary.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-3.5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex items-center justify-between text-xs hover:border-[#FF4900]/30 transition-colors"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900 dark:text-white">
                          {lang === 'es' ? (item.sportEs || item.sport) : (item.sportEn || item.sport)}
                        </span>
                        <span className="text-[10px] font-mono text-[#FF4900] font-semibold">{item.duration} min</span>
                      </div>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1">
                        {lang === 'es' ? (item.notesEs || item.notes) : (item.notesEn || item.notes)}
                      </p>
                      <span className="text-[10px] text-gray-400 font-mono">
                        {lang === 'es' ? (item.dateEs || item.date) : (item.dateEn || item.date)} • {item.calories} kcal
                      </span>
                    </div>

                    <button
                      onClick={() => handleDeleteWorkout(item.id)}
                      aria-label={lang === 'es' ? "Eliminar entrada de diario" : "Delete diary entry"}
                      className="text-gray-400 hover:text-red-500 p-1 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* WIDGET 2: Physical Progress & Goals (Metrics, Streaks & Recovery Index) */}
          <motion.div 
            variants={fadeInUp}
            className="lg:col-span-4 rounded-[2.5rem] bg-white dark:bg-[#14161B] border border-gray-200 dark:border-white/10 p-6 sm:p-8 shadow-xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-500/20">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900 dark:text-white tracking-tight">
                    {t.dashboard.widget2Title}
                  </h3>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    {t.dashboard.widget2Sub}
                  </p>
                </div>
              </div>
            </div>

            {/* Streak & Recovery Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-left">
                <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 text-xs font-black uppercase tracking-wider">
                  <Flame className="w-4 h-4 fill-current" />
                  <span>{lang === 'es' ? 'Racha Activa' : 'Current Streak'}</span>
                </div>
                <div className="text-2xl font-black text-gray-900 dark:text-white mt-1">14 {lang === 'es' ? 'Días' : 'Days'}</div>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">{lang === 'es' ? 'Consistencia de élite' : 'Elite consistency'}</span>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 text-left">
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-wider">
                  <HeartPulse className="w-4 h-4" />
                  <span>{lang === 'es' ? 'Recuperación' : 'Recovery'}</span>
                </div>
                <div className="text-2xl font-black text-gray-900 dark:text-white mt-1">92%</div>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">{lang === 'es' ? 'Óptima para entrenar' : 'Optimal readiness'}</span>
              </div>
            </div>

            {/* Weekly Target Progress Bar */}
            <div className="space-y-2 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 text-left">
              <div className="flex justify-between text-xs font-bold text-gray-800 dark:text-gray-200">
                <span>{lang === 'es' ? 'Objetivo Semanal Cumplido' : 'Weekly Goal Completed'}</span>
                <span className="text-[#FF4900] font-mono">4 / {weeklyGoal} {lang === 'es' ? 'días' : 'days'}</span>
              </div>
              <div className="w-full h-3 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#FF4900] to-[#CDFF00] rounded-full transition-all duration-500" 
                  style={{ width: `${Math.min(100, (4 / weeklyGoal) * 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-gray-400">
                <span>{lang === 'es' ? 'Falta 1 sesión para el 100%' : '1 session left for 100%'}</span>
                <span>{Math.round((4 / weeklyGoal) * 100)}%</span>
              </div>
            </div>

            {/* Biometric Progression Bars */}
            <div className="space-y-3 pt-2 text-left">
              <span className="text-[10px] font-mono font-bold uppercase text-gray-400 block">
                {lang === 'es' ? 'Desglose de Rendimiento Físico' : 'Physical Performance Breakdown'}
              </span>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-semibold text-gray-700 dark:text-gray-300">
                  <span>{lang === 'es' ? 'Fuerza & Potencia Muscular' : 'Strength & Power'}</span>
                  <span className="font-mono text-gray-900 dark:text-white">88%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-gray-100 dark:bg-white/10">
                  <div className="h-full bg-[#FF4900] rounded-full" style={{ width: '88%' }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-semibold text-gray-700 dark:text-gray-300">
                  <span>{lang === 'es' ? 'Resistencia Cardiovascular' : 'Cardiovascular Stamina'}</span>
                  <span className="font-mono text-gray-900 dark:text-white">76%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-gray-100 dark:bg-white/10">
                  <div className="h-full bg-sport-blue rounded-full" style={{ width: '76%' }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-semibold text-gray-700 dark:text-gray-300">
                  <span>{lang === 'es' ? 'Agilidad & Velocidad de Reflejos' : 'Agility & Reflex Speed'}</span>
                  <span className="font-mono text-gray-900 dark:text-white">94%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-gray-100 dark:bg-white/10">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '94%' }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* WIDGET 3: Personalization Settings (Weekly Targets, Preferences, Reminders) */}
          <motion.div 
            variants={fadeInUp}
            className="lg:col-span-3 rounded-[2.5rem] bg-white dark:bg-[#14161B] border border-gray-200 dark:border-white/10 p-6 sm:p-8 shadow-xl space-y-6 text-left"
          >
            <div className="flex items-center gap-2.5 border-b border-gray-100 dark:border-white/10 pb-4">
              <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold shadow-md shadow-purple-600/20">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-gray-900 dark:text-white tracking-tight">
                  {t.dashboard.widget3Title}
                </h3>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  {t.dashboard.widget3Sub}
                </p>
              </div>
            </div>

            {/* Setting 1: Weekly Goal Days Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-gray-800 dark:text-gray-200">
                <label htmlFor="settings-goal-slider">{lang === 'es' ? 'Días Objetivo / Semana' : 'Target Days / Week'}</label>
                <span className="px-2 py-0.5 rounded-full bg-[#CDFF00] text-black font-mono text-[11px] font-extrabold">
                  {weeklyGoal} {lang === 'es' ? 'días' : 'days'}
                </span>
              </div>
              <input 
                id="settings-goal-slider"
                type="range"
                min="3"
                max="7"
                value={weeklyGoal}
                onChange={(e) => {
                  setWeeklyGoal(Number(e.target.value));
                  triggerToast(lang === 'es' ? `Objetivo ajustado a ${e.target.value} días/semana` : `Weekly target updated to ${e.target.value} days/week`);
                }}
                className="w-full accent-[#FF4900] cursor-pointer"
              />
              <span className="text-[10px] text-gray-400 block">
                {lang === 'es' ? 'Recomendado: 4-5 días para atletas en activo.' : 'Recommended: 4-5 days for active athletes.'}
              </span>
            </div>

            {/* Setting 2: Primary Focus Selector */}
            <div className="space-y-1.5">
              <label htmlFor="settings-focus-select" className="text-xs font-bold text-gray-800 dark:text-gray-200 block">
                {lang === 'es' ? 'Enfoque Principal' : 'Primary Sport Focus'}
              </label>
              <select
                id="settings-focus-select"
                value={primaryFocus}
                onChange={(e) => {
                  setPrimaryFocus(e.target.value);
                  triggerToast(lang === 'es' ? `Enfoque cambiado a ${e.target.value}` : `Primary focus updated to ${e.target.value}`);
                }}
                className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-[#1A1C23] dark:text-white text-xs font-semibold focus:outline-none focus:border-[#FF4900]"
              >
                <option value="Baloncesto & Rutinas de Fuerza">{lang === 'es' ? 'Baloncesto & Fuerza' : 'Basketball & Strength'}</option>
                <option value="Fútbol Sala & Agilidad">{lang === 'es' ? 'Fútbol Sala & Agilidad' : 'Futsal & Agility'}</option>
                <option value="Voleibol & Saltabilidad">{lang === 'es' ? 'Voleibol & Saltabilidad' : 'Volleyball & Jump Drills'}</option>
                <option value="Natación a Contracorriente">{lang === 'es' ? 'Natación Aeróbica' : 'Aerobic Swimming'}</option>
                <option value="Ajedrez Mental & Blitz">{lang === 'es' ? 'Ajedrez & Foco Mental' : 'Chess & Mental Focus'}</option>
                <option value="Patinaje & Core">{lang === 'es' ? 'Patinaje & Equilibrio' : 'Skating & Core Balance'}</option>
              </select>
            </div>

            {/* Setting 3: Reminder Toggle */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
              <div>
                <span className="text-xs font-bold text-gray-900 dark:text-white block">
                  {lang === 'es' ? 'Recordatorios de Sesión' : 'Workout Reminders'}
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400">
                  {reminderActive ? (lang === 'es' ? 'Activos a las 08:00 AM' : 'Active at 08:00 AM') : (lang === 'es' ? 'Desactivados' : 'Disabled')}
                </span>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={reminderActive}
                onClick={() => {
                  setReminderActive(!reminderActive);
                  triggerToast(reminderActive ? (lang === 'es' ? 'Recordatorios silenciados' : 'Reminders muted') : (lang === 'es' ? 'Recordatorios activados' : 'Reminders activated'));
                }}
                className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${reminderActive ? 'bg-[#FF4900]' : 'bg-gray-300 dark:bg-white/20'}`}
              >
                <span className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${reminderActive ? 'left-6' : 'left-1'}`} />
              </button>
            </div>

            {/* Athlete Profile Badge */}
            <div className="p-4 rounded-2xl bg-black text-white dark:bg-white/10 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-[#CDFF00] font-bold uppercase">{lang === 'es' ? 'Plan Activo' : 'Current Plan'}</span>
                <div className="text-xs font-extrabold">{lang === 'es' ? 'Atleta Individual • $15/m' : 'Individual Athlete • $15/mo'}</div>
              </div>
              <button 
                onClick={() => setActiveModal('auth')}
                className="text-[10px] font-bold text-gray-300 hover:text-white underline cursor-pointer"
              >
                {lang === 'es' ? 'Cambiar' : 'Switch'}
              </button>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* SECTION 5: SPORTS TIPS & RESOURCES (OFFICIAL SPECIFICATION) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        id="tips-section" 
        className="w-full max-w-7xl mx-auto px-6 py-24 text-left"
      >
        <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-extrabold uppercase tracking-widest mb-3">
            <BookOpen className="w-3.5 h-3.5" /> {t.tips.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-gray-900 dark:text-white leading-tight">
            {t.tips.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
            {t.tips.desc}
          </p>
        </motion.div>

        {/* Hick's Law: 4 Category Tabs */}
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist" aria-label="Filtro de artículos de expertos">
          {[
            { id: 'all', label: t.tips.filters.all, count: 7 },
            { id: 'performance', label: t.tips.filters.performance, count: 3 },
            { id: 'nutrition', label: t.tips.filters.nutrition, count: 2 },
            { id: 'mindset', label: t.tips.filters.mindset, count: 2 }
          ].map((tab) => {
            const isSelected = tipsCategory === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleFilterTips(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg shadow-black/10 scale-105'
                    : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected 
                    ? 'bg-[#FF4900] text-white' 
                    : 'bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-300'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Articles Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {tipsArticles
              .filter(a => tipsCategory === 'all' || a.category === tipsCategory)
              .map((art) => (
                <motion.article
                  key={art.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl bg-white dark:bg-[#14161B] border border-gray-200 dark:border-white/10 p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[11px] text-gray-400">
                      <span className="px-2.5 py-1 rounded-full bg-[#FF4900]/10 text-[#FF4900] font-mono font-bold uppercase tracking-wider">
                        {lang === 'es' ? art.categoryLabelEs : art.categoryLabel}
                      </span>
                      <span className="font-mono flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {art.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-gray-900 dark:text-white leading-snug group-hover:text-[#FF4900] transition-colors">
                      {lang === 'es' ? art.titleEs : art.title}
                    </h3>

                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {lang === 'es' ? art.excerpt : art.excerptEn}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                    <div className="text-[11px]">
                      <span className="font-bold text-gray-800 dark:text-gray-200 block">{art.author}</span>
                      <span className="text-gray-400 text-[10px]">{art.authorRole}</span>
                    </div>

                    <button
                      onClick={() => setSelectedArticle(art)}
                      aria-label={`Leer artículo: ${lang === 'es' ? art.titleEs : art.title}`}
                      className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-700 dark:text-white group-hover:bg-[#FF4900] group-hover:text-white transition-all cursor-pointer shadow-sm"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
          </AnimatePresence>
        </motion.div>
      </motion.section>

      {/* SECTION 4.15: 18. TESTIMONIOS & SOCIAL PROOF B2B */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        id="testimonios-section" 
        className="w-full max-w-7xl mx-auto px-6 py-20 text-left"
      >
        <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF4900]/10 text-[#FF4900] text-xs font-extrabold uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" /> {t.testimonials.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-gray-900 dark:text-white leading-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3">
            {t.testimonials.desc}
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {corporateTestimonials.map((tItem, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="rounded-[2.5rem] bg-white dark:bg-[#14161B] p-8 border border-gray-200 dark:border-white/10 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Metric pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#CDFF00] text-black">
                    {lang === 'es' ? tItem.metric : (tItem.metricEn || tItem.metric)}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(tItem.stars)].map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic mb-6">
                  "{lang === 'es' ? tItem.quote : (tItem.quoteEn || tItem.quote)}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex items-center gap-3">
                <img
                  src={tItem.avatar}
                  alt={tItem.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#FF4900]"
                />
                <div>
                  <div className="text-sm font-extrabold text-gray-900 dark:text-white leading-tight">
                    {tItem.name}
                  </div>
                  <div className="text-[11px] font-semibold text-[#FF4900] leading-tight mt-0.5">
                    {lang === 'es' ? tItem.role : (tItem.roleEn || tItem.role)}
                  </div>
                  <div className="text-[10px] text-gray-400 font-mono mt-0.5">
                    {tItem.company} • {lang === 'es' ? tItem.location : (tItem.locationEn || tItem.location)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* NEW SECTION 4.2: INTERACTIVE B2B FAQ ACCORDION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="w-full max-w-5xl mx-auto px-6 py-20 text-left"
      >
        <motion.div variants={fadeInUp} className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF4900]/10 text-[#FF4900] text-xs font-extrabold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> {lang === 'es' ? 'Preguntas Clave para el Comité' : 'Key Inquiries for Decision Makers'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-gray-900 dark:text-white leading-tight">
            {lang === 'es' ? 'Resolvemos las Dudas de tu Empresa' : 'Answering Your Enterprise Questions'}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            {lang === 'es'
              ? 'Todo lo que Recursos Humanos, Operaciones y Finanzas necesitan tener resuelto.'
              : 'Everything HR, Operations, and Finance need to know before onboarding.'}
          </p>
        </motion.div>

        {/* Category Filter Pills with Accessible Tabs & Spring Physics */}
        <motion.div 
          variants={fadeInUp} 
          role="tablist" 
          aria-label="Filtro por categoría de dudas frecuentes"
          className="flex justify-center gap-2 mb-8 bg-gray-100 dark:bg-white/5 p-1.5 rounded-full inline-flex border border-gray-200 dark:border-white/10"
        >
          {[
            { id: 'all', label: lang === 'es' ? 'Todas las Dudas' : 'All Inquiries' },
            { id: 'instalacion', label: lang === 'es' ? 'Obras & Ruido' : 'Construction & Noise' },
            { id: 'fiscal', label: lang === 'es' ? 'Fiscalidad & Ahorro' : 'Tax & ROI' },
            { id: 'operativa', label: lang === 'es' ? 'Seguros & Mudanzas' : 'Insurance & Relocation' },
          ].map((cat) => {
            const isSelected = faqCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                id={`faq-tab-${cat.id}`}
                aria-selected={isSelected}
                aria-controls="faq-accordion-group"
                onClick={() => setFaqCategory(cat.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                  isSelected ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeFaqFilter"
                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    className="absolute inset-0 bg-[#0A0B0D] dark:bg-[#FF4900] rounded-full shadow-sm"
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Accordion Cards with Full WCAG 2.1 Accordion Pattern */}
        <motion.div 
          id="faq-accordion-group"
          variants={staggerContainer} 
          className="space-y-3"
        >
          {filteredFaqs.map((f, idx) => {
            const isOpen = openFaqIndex === idx;
            const btnId = `faq-btn-${idx}`;
            const panelId = `faq-panel-${idx}`;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="rounded-3xl bg-white dark:bg-[#14161B] border border-gray-200 dark:border-white/10 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  id={btnId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-black text-sm sm:text-base text-gray-900 dark:text-white hover:text-[#FF4900] transition-colors cursor-pointer"
                >
                  <span>{f.q}</span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#FF4900] text-white' : 'bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-white/10">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </motion.section>

      {/* SECTION 4.3: 12. & 13. FORMULARIO DE CONTACTO & AUDITORÍA TÉCNICA (CON VALIDACIÓN) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        id="contacto-section" 
        className="w-full max-w-7xl mx-auto px-6 py-20 text-left"
      >
        <div className="rounded-[2.5rem] bg-white dark:bg-[#14161B] border border-gray-200 dark:border-white/10 p-8 sm:p-14 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column info */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF4900]/10 text-[#FF4900] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> {t.contact.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tight leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.contact.desc}
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#CDFF00] shrink-0" />
                <span>{lang === 'es' ? 'Estudio de insonorización fonoabsorbente incluido' : 'Acoustic soundproofing survey included'}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#CDFF00] shrink-0" />
                <span>{lang === 'es' ? 'Plano 3D fotorrealista adaptado a vuestro espacio' : 'Photorealistic 3D floor plan tailored to your square footage'}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#CDFF00] shrink-0" />
                <span>{lang === 'es' ? 'Memoria de costes cerrada y deducción fiscal al 100%' : 'Fixed cost summary with 100% tax deduction structure'}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center gap-3 text-xs">
              <Phone className="w-4 h-4 text-[#FF4900] shrink-0" />
              <div>
                <div className="font-bold text-gray-900 dark:text-white">
                  {lang === 'es' ? 'Atención directa para Comités & RRHH:' : 'Direct advisory for Committees & HR:'}
                </div>
                <div className="text-gray-500 font-mono">+34 900 800 200 • empresas@roomforsport.com</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Form */}
          <motion.div variants={fadeInUp} className="lg:col-span-7">
            {contactSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-3xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-black text-emerald-900 dark:text-emerald-100 uppercase tracking-tight">
                  {lang === 'es' ? '¡Solicitud Confirmada!' : 'Request Confirmed!'}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 max-w-md mx-auto">
                  {t.contact.successMsg}
                </p>
                <button
                  onClick={() => setContactSubmitted(false)}
                  className="btn-tactile-dark mt-2 cursor-pointer"
                >
                  <span>{lang === 'es' ? 'Enviar Otra Consulta' : 'Send Another Inquiry'}</span>
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleContactSubmit} noValidate className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="font-bold text-gray-700 dark:text-gray-300 block mb-1">
                      {t.contact.nameLabel} *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder={t.contact.namePlaceholder}
                      value={contactForm.name}
                      onChange={(e) => {
                        setContactForm({ ...contactForm, name: e.target.value });
                        if (contactErrors.name) setContactErrors({ ...contactErrors, name: null });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none transition-colors ${
                        contactErrors.name 
                          ? 'border-red-500 bg-red-50/50 dark:bg-red-950/20' 
                          : 'border-gray-200 dark:border-white/10 dark:bg-white/5 focus:border-[#FF4900]'
                      }`}
                    />
                    {contactErrors.name && (
                      <div className="text-[11px] text-red-500 flex items-center gap-1 mt-1 font-semibold">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{contactErrors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="font-bold text-gray-700 dark:text-gray-300 block mb-1">
                      {t.contact.emailLabel} *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder={t.contact.emailPlaceholder}
                      value={contactForm.email}
                      onChange={(e) => {
                        setContactForm({ ...contactForm, email: e.target.value });
                        if (contactErrors.email) setContactErrors({ ...contactErrors, email: null });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none transition-colors ${
                        contactErrors.email 
                          ? 'border-red-500 bg-red-50/50 dark:bg-red-950/20' 
                          : 'border-gray-200 dark:border-white/10 dark:bg-white/5 focus:border-[#FF4900]'
                      }`}
                    />
                    {contactErrors.email && (
                      <div className="text-[11px] text-red-500 flex items-center gap-1 mt-1 font-semibold">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{contactErrors.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company */}
                  <div>
                    <label htmlFor="contact-company" className="font-bold text-gray-700 dark:text-gray-300 block mb-1">
                      {t.contact.companyLabel} *
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      placeholder={t.contact.companyPlaceholder}
                      value={contactForm.company}
                      onChange={(e) => {
                        setContactForm({ ...contactForm, company: e.target.value });
                        if (contactErrors.company) setContactErrors({ ...contactErrors, company: null });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none transition-colors ${
                        contactErrors.company 
                          ? 'border-red-500 bg-red-50/50 dark:bg-red-950/20' 
                          : 'border-gray-200 dark:border-white/10 dark:bg-white/5 focus:border-[#FF4900]'
                      }`}
                    />
                    {contactErrors.company && (
                      <div className="text-[11px] text-red-500 flex items-center gap-1 mt-1 font-semibold">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{contactErrors.company}</span>
                      </div>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="font-bold text-gray-700 dark:text-gray-300 block mb-1">
                      {t.contact.phoneLabel} *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder={t.contact.phonePlaceholder}
                      value={contactForm.phone}
                      onChange={(e) => {
                        setContactForm({ ...contactForm, phone: e.target.value });
                        if (contactErrors.phone) setContactErrors({ ...contactErrors, phone: null });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none transition-colors ${
                        contactErrors.phone 
                          ? 'border-red-500 bg-red-50/50 dark:bg-red-950/20' 
                          : 'border-gray-200 dark:border-white/10 dark:bg-white/5 focus:border-[#FF4900]'
                      }`}
                    />
                    {contactErrors.phone && (
                      <div className="text-[11px] text-red-500 flex items-center gap-1 mt-1 font-semibold">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{contactErrors.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Space select */}
                <div>
                  <label htmlFor="contact-space" className="font-bold text-gray-700 dark:text-gray-300 block mb-1">
                    {t.contact.spaceLabel}
                  </label>
                  <select
                    id="contact-space"
                    name="space"
                    value={contactForm.space}
                    onChange={(e) => setContactForm({ ...contactForm, space: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-[#1A1C23] text-xs focus:outline-none focus:border-[#FF4900]"
                  >
                    <option>{t.contact.spaceOpt1}</option>
                    <option>{t.contact.spaceOpt2}</option>
                    <option>{t.contact.spaceOpt3}</option>
                    <option>{t.contact.spaceOpt4}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="font-bold text-gray-700 dark:text-gray-300 block mb-1">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    placeholder={t.contact.messagePlaceholder}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 text-xs focus:outline-none focus:border-[#FF4900] resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={contactSubmitting}
                  className="btn-tactile-orange w-full justify-center group cursor-pointer"
                >
                  <span>{contactSubmitting ? t.contact.submitting : t.contact.submitBtn}</span>
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-[#FF4900]">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </motion.section>

      {/* SECTION 5: NEWSLETTER BANNER (ROOM FOR SPORT INSIDER CLUB) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={scaleIn}
        className="w-full max-w-7xl mx-auto px-6 py-12"
      >
        <div 
          className="relative rounded-[2.5rem] overflow-hidden p-8 sm:p-14 bg-cover bg-center text-left text-white shadow-2xl"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(10, 11, 13, 0.85), rgba(10, 11, 13, 0.4)), url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1600&q=80')`
          }}
        >
          <div className="max-w-lg space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-[#FF4900] text-white text-[10px] font-mono font-bold uppercase tracking-widest">
              {lang === 'es' ? 'Club de Empresas Saludables' : 'Healthy Companies Club'}
            </div>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight uppercase leading-none">
              {lang === 'es' ? <>Únete al Club<br />de Empresas RFS</> : <>Join the Room<br />Corporate Club</>}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {lang === 'es'
                ? 'Recibe mensualmente nuestros protocolos ergonómicos de prevención, benchmarks de absentismo laboral y tendencias de salud corporativa.'
                : 'Receive our monthly ergonomic prevention protocols, corporate absenteeism benchmarks, and workplace wellness insights.'}
            </p>

            <form onSubmit={handleNewsletterSubmit} className="pt-2 flex flex-col sm:flex-row gap-2 max-w-md">
              <label htmlFor="newsletter-email-input" className="sr-only">Email corporativo para newsletter</label>
              <input
                id="newsletter-email-input"
                name="email"
                required
                type="email"
                placeholder={lang === 'es' ? 'director.rrhh@tuempresa.com' : 'hr.director@yourcompany.com'}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-5 py-3 rounded-full bg-white dark:bg-[#14161B] text-gray-900 dark:text-white border border-transparent dark:border-white/10 text-xs font-semibold focus:outline-none shadow-md"
              />
              <button
                type="submit"
                aria-label="Suscribirme a la newsletter"
                className="btn-tactile-orange whitespace-nowrap cursor-pointer"
              >
                <span>{lang === 'es' ? 'UNIRME' : 'JOIN NOW'}</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </form>

            {newsletterSubscribed && (
              <div role="status" className="text-xs text-[#CDFF00] font-bold flex items-center gap-1.5 pt-1">
                <CheckCircle2 className="w-4 h-4" />
                {lang === 'es' 
                  ? '¡Gracias! Te hemos enviado el primer kit de ergonomía corporativa.'
                  : 'Thank you! We have sent you our initial workplace wellness kit.'}
              </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.footer 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="w-full max-w-7xl mx-auto px-6 pt-12 pb-16 text-left border-t border-gray-200 dark:border-white/10"
      >
        
        {/* Navigation Grid */}
        <motion.div variants={staggerContainer} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 text-xs">
          
          <motion.div variants={fadeInUp}>
            <div className="font-extrabold text-gray-900 dark:text-white mb-3 uppercase tracking-wider text-[11px]">
              {lang === 'es' ? 'Salas & Espacios' : 'Studios & Spaces'}
            </div>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-medium">
              <li><button onClick={() => setActiveModal('rooms')} className="hover:text-black dark:hover:text-white cursor-pointer">Active Reset (30-50 m²)</button></li>
              <li><button onClick={() => setActiveModal('rooms')} className="hover:text-black dark:hover:text-white cursor-pointer">Performance Box (80-150 m²)</button></li>
              <li><button onClick={() => setActiveModal('rooms')} className="hover:text-black dark:hover:text-white cursor-pointer">Corporate Athletic Club</button></li>
              <li><button onClick={() => setActiveModal('rooms')} className="hover:text-black dark:hover:text-white cursor-pointer">{lang === 'es' ? 'Insonorización Acústica' : 'Acoustic Soundproofing'}</button></li>
              <li><button onClick={() => setActiveModal('booking')} className="hover:text-black dark:hover:text-white cursor-pointer">{lang === 'es' ? 'Estudio 3D Gratuito' : 'Complimentary 3D Survey'}</button></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="font-extrabold text-gray-900 dark:text-white mb-3 uppercase tracking-wider text-[11px]">
              {lang === 'es' ? 'Para Empresas' : 'For Enterprise'}
            </div>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-medium">
              <li><button onClick={() => setActiveModal('roi')} className="hover:text-black dark:hover:text-white cursor-pointer">{lang === 'es' ? 'Calculadora de ROI' : 'ROI Calculator'}</button></li>
              <li><button onClick={() => setActiveModal('protocol')} className="hover:text-black dark:hover:text-white cursor-pointer">{lang === 'es' ? 'Pausas Activas de 15 min' : '15-min Active Breaks'}</button></li>
              <li><button onClick={() => setActiveModal('coaching')} className="hover:text-black dark:hover:text-white cursor-pointer">{lang === 'es' ? 'Fisioterapeutas Colegiados' : 'Licensed Physiotherapists'}</button></li>
              <li><a href="#events-section" className="hover:text-black dark:hover:text-white">{lang === 'es' ? 'Torneos Inter-Empresas' : 'Inter-Company Tournaments'}</a></li>
              <li><button onClick={() => setActiveModal('onboarding')} className="hover:text-black dark:hover:text-white cursor-pointer">{lang === 'es' ? 'Configurador de Sala' : 'Studio Customizer'}</button></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="font-extrabold text-gray-900 dark:text-white mb-3 uppercase tracking-wider text-[11px]">
              {lang === 'es' ? 'Legal & Seguros' : 'Legal & Compliance'}
            </div>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-medium">
              <li><span className="text-gray-400">{lang === 'es' ? 'Póliza Responsabilidad Civil (3M€)' : 'General Liability Policy (€3M)'}</span></li>
              <li><span className="text-gray-400">{lang === 'es' ? 'Normativa PRL Laboral' : 'Workplace Health Regulations'}</span></li>
              <li><span className="text-gray-400">{lang === 'es' ? 'Certificación B-Corp' : 'B-Corp Certification'}</span></li>
              <li><span className="text-gray-400">{lang === 'es' ? 'Protección Datos RGPD' : 'GDPR Data Compliance'}</span></li>
              <li><span className="text-gray-400">{lang === 'es' ? 'Garantía Maquinaria 5 Años' : '5-Year Hardware Warranty'}</span></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="font-extrabold text-gray-900 dark:text-white mb-3 uppercase tracking-wider text-[11px]">
              {lang === 'es' ? 'Contacto Directo' : 'Direct Contact'}
            </div>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-medium">
              <li><a href="mailto:empresas@roomforsport.com" className="hover:text-black dark:hover:text-white">empresas@roomforsport.com</a></li>
              <li><span>{lang === 'es' ? '+34 900 800 200 (Línea B2B)' : '+34 900 800 200 (B2B Priority)'}</span></li>
              <li><span>{lang === 'es' ? 'Sedes en Madrid, Barcelona y Bilbao' : 'Offices in Madrid, Barcelona & Bilbao'}</span></li>
              <li><button onClick={() => setActiveModal('booking')} className="text-[#FF4900] font-bold hover:underline cursor-pointer">{lang === 'es' ? 'Solicitar Llamada' : 'Request Callback'}</button></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="font-extrabold text-gray-900 dark:text-white mb-3 uppercase tracking-wider text-[11px]">
              {lang === 'es' ? 'Comunidad RFS' : 'RFS Community'}
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn Room for Sport"
                className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-[#0077B5] hover:text-white flex items-center justify-center transition-all hover:-translate-y-0.5"
              >
                <SocialLinkedin />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram Room for Sport"
                className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-[#E4405F] hover:text-white flex items-center justify-center transition-all hover:-translate-y-0.5"
              >
                <SocialInstagram />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="X Twitter Room for Sport"
                className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-black hover:text-white flex items-center justify-center transition-all hover:-translate-y-0.5"
              >
                <SocialTwitter />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube Room for Sport"
                className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-[#FF0000] hover:text-white flex items-center justify-center transition-all hover:-translate-y-0.5"
              >
                <SocialYoutube />
              </a>
            </div>
            <div className="mt-4 text-[11px] text-gray-400 font-medium">
              {lang === 'es' ? '#RoomForSport • Bienestar de Alto Impacto' : '#RoomForSport • High-Impact Athletic Wellness'}
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div variants={fadeInUp} className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-gray-400">
          <div>
            {lang === 'es' ? 'Room for Sport Technologies S.L. • Sede Central Corporativa' : 'Room for Sport Technologies Inc. • Global Corporate HQ'}
          </div>
          <div className="flex items-center gap-6">
            <span>{lang === 'es' ? 'Privacidad de Datos Médicos' : 'Health Data Privacy'}</span>
            <span>{lang === 'es' ? 'Términos de Servicio' : 'Terms of Service'}</span>
            <span>© {new Date().getFullYear()} Room for Sport</span>
          </div>
        </motion.div>

      </motion.footer>

      {/* ========================================================================= */}
      {/* INTERACTIVE MODALS & SUB-INTERFACES FOR ALL BUTTONS                      */}
      {/* ========================================================================= */}

      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative z-10 w-full max-w-2xl bg-white dark:bg-[#14161B] rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 dark:border-white/10 my-8 text-left max-h-[90vh] overflow-y-auto text-gray-900 dark:text-white"
            >
              
              {/* Close Icon */}
              <button
                onClick={() => setActiveModal(null)}
                aria-label="Cerrar modal"
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black flex items-center justify-center text-gray-600 dark:text-gray-300 transition-colors z-20 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* 0. MODAL: CINEMA BRAND FILM PLAYER */}
              {activeModal === 'brandFilm' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF4900]/10 text-[#FF4900] text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" /> {lang === 'es' ? 'Corto Corporativo Room for Sport' : 'Room for Sport Brand Film'}
                    </div>
                    <span className="text-[10px] font-mono uppercase font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/10 px-2.5 py-0.5 rounded-full">
                      {lang === 'es' ? '4K Ultra HD • En Oficina' : '4K Ultra HD • In-Office'}
                    </span>
                  </div>

                  <div>
                    <h3 id="modal-title" className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
                      {lang === 'es' ? 'The Shift: De la Pantalla a la Cancha' : 'The Shift: From Screen to Court'}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                      {lang === 'es' 
                        ? 'Erradicar el agotamiento frente a las pantallas y transformar la fatiga en energía deportiva dentro del propio edificio corporativo.'
                        : 'Eliminating screen fatigue and transforming exhaustion into athletic energy right inside your corporate headquarters.'}
                    </p>
                  </div>

                  {/* Cinema High-Res Video Container */}
                  <div className="relative rounded-2xl overflow-hidden bg-black aspect-video shadow-2xl border border-black/10 group">
                    <video
                      autoPlay
                      controls
                      playsInline
                      className="w-full h-full object-cover"
                      src="/videos/basketball-loop.webm"
                    />
                  </div>

                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <div className="font-extrabold text-gray-900 dark:text-white">
                        {lang === 'es' ? '¿Quieres instalar una sala o cancha en tu empresa?' : 'Want to install a modular studio or court in your office?'}
                      </div>
                      <div className="text-gray-500 dark:text-gray-400 text-[11px]">
                        {lang === 'es' ? 'Diseño llave en mano, suelo técnico fonoabsorbente e insonorización certificada.' : 'Turnkey design, acoustic vibration-damping flooring, and certified soundproofing.'}
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveModal('booking')}
                      className="btn-tactile-orange shrink-0 cursor-pointer"
                    >
                      <span>{lang === 'es' ? 'Agendar Visita Técnica' : 'Schedule Technical Survey'}</span>
                      <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* 1. MODAL: AGENDAR VISITA TÉCNICA / DEMO */}
              {activeModal === 'booking' && (
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF4900]/10 text-[#FF4900] text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" /> {lang === 'es' ? 'Diagnóstico Corporativo Gratuito' : 'Complimentary Corporate Diagnostic'}
                  </div>
                  <h3 id="modal-title" className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                    {lang === 'es' ? 'Auditoría de Espacio & Propuesta 3D' : 'Space Feasibility Audit & 3D Proposal'}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {lang === 'es'
                      ? 'Un arquitecto de instalaciones deportivas visitará vuestras oficinas o analizará vuestros planos para diseñar la solución llave en mano.'
                      : 'A sports architectural specialist will inspect your corporate workspace or blueprints to engineer a tailored turnkey installation.'}
                  </p>

                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert(lang === 'es' ? '¡Solicitud enviada con éxito! Un especialista de Room for Sport te contactará en menos de 24 horas.' : 'Request successfully sent! A Room for Sport specialist will reach out within 24 hours.');
                      setActiveModal(null);
                    }}
                    className="space-y-4 pt-2"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label htmlFor="booking-name-input" className="text-xs font-bold text-gray-700 dark:text-gray-300 block mb-1">
                          {lang === 'es' ? 'Tu Nombre y Cargo' : 'Full Name & Title'}
                        </label>
                        <input 
                          id="booking-name-input" 
                          name="name" 
                          required 
                          type="text" 
                          placeholder={lang === 'es' ? 'Ej. Ana Gómez — People Director' : 'e.g., Sarah Jenkins — Chief People Officer'} 
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white text-xs focus:outline-none focus:border-[#FF4900]" 
                        />
                      </div>
                      <div>
                        <label htmlFor="booking-email-input" className="text-xs font-bold text-gray-700 dark:text-gray-300 block mb-1">
                          {lang === 'es' ? 'Email Corporativo' : 'Corporate Work Email'}
                        </label>
                        <input 
                          id="booking-email-input" 
                          name="email" 
                          required 
                          type="email" 
                          placeholder={lang === 'es' ? 'ana@tuempresa.com' : 'sarah@company.com'} 
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white text-xs focus:outline-none focus:border-[#FF4900]" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label htmlFor="booking-company-input" className="text-xs font-bold text-gray-700 dark:text-gray-300 block mb-1">
                          {lang === 'es' ? 'Empresa' : 'Company Name'}
                        </label>
                        <input 
                          id="booking-company-input" 
                          name="company" 
                          required 
                          type="text" 
                          placeholder={lang === 'es' ? 'Tu Empresa S.L.' : 'Acme Corp Ltd.'} 
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white text-xs focus:outline-none focus:border-[#FF4900]" 
                        />
                      </div>
                      <div>
                        <label htmlFor="booking-employees-select" className="text-xs font-bold text-gray-700 dark:text-gray-300 block mb-1">
                          {lang === 'es' ? 'Nº Empleados' : 'Headcount (Employees)'}
                        </label>
                        <select id="booking-employees-select" name="employees" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-[#1A1C23] dark:text-white text-xs focus:outline-none focus:border-[#FF4900]">
                          <option>{lang === 'es' ? '30 a 80 colaboradores' : '30 to 80 employees'}</option>
                          <option>{lang === 'es' ? '80 a 250 colaboradores' : '80 to 250 employees'}</option>
                          <option>{lang === 'es' ? '250 a 600 colaboradores' : '250 to 600 employees'}</option>
                          <option>{lang === 'es' ? 'Más de 600 colaboradores' : 'Over 600 employees'}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="booking-space-select" className="text-xs font-bold text-gray-700 dark:text-gray-300 block mb-1">
                        {lang === 'es' ? 'Espacio Aproximado Disponible' : 'Approximate Available Floor Space'}
                      </label>
                      <select id="booking-space-select" name="space" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-[#1A1C23] dark:text-white text-xs focus:outline-none focus:border-[#FF4900]">
                        <option>{lang === 'es' ? '30 - 50 m² (Sala de reuniones o despacho grande)' : '30 - 50 m² (Meeting room or executive suite)'}</option>
                        <option>{lang === 'es' ? '80 - 150 m² (Zona polivalente o planta diáfana)' : '80 - 150 m² (Multipurpose area or open floorplan)'}</option>
                        <option>{lang === 'es' ? 'Más de 200 m² (Campus corporativo)' : 'Over 200 m² (Corporate campus / dedicated wing)'}</option>
                        <option>{lang === 'es' ? 'Aún no lo sabemos con seguridad' : 'Not sure yet (request survey advice)'}</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="btn-tactile-orange w-full justify-center group cursor-pointer"
                    >
                      <span>{lang === 'es' ? 'Confirmar Solicitud de Visita Técnica' : 'Confirm Technical Survey Request'}</span>
                      <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-[#FF4900]">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </form>
                </div>
              )}

              {/* 2. MODAL: ONBOARDING CONFIGURADOR DE SALA */}
              {activeModal === 'onboarding' && (
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CDFF00] text-black text-xs font-black uppercase tracking-wider">
                    {lang === 'es' ? 'Paso 1 de 2 • Configuración Rápida' : 'Step 1 of 2 • Fast Configuration'}
                  </div>
                  <h3 id="modal-title" className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                    {lang === 'es' ? '¿Cómo te gustaría estructurar tu Room for Sport?' : 'How would you like to structure your Room for Sport?'}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {lang === 'es' 
                      ? 'Elige el objetivo principal para que nuestros ingenieros configuren la distribución de material:' 
                      : 'Select your primary corporate wellness objective so our engineering team can configure equipment layout:'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {[
                      { 
                        icon: HeartPulse, 
                        title: 'Active Health', 
                        desc: lang === 'es' ? 'Yoga, movilidad, corrección postural y descarga de estrés.' : 'Yoga, joint mobility, postural correction, and executive stress decompression.' 
                      },
                      { 
                        icon: Dumbbell, 
                        title: 'Strength & HIIT', 
                        desc: lang === 'es' ? 'Fuerza funcional, pesas calibradas, remo y rendimiento.' : 'Functional strength, calibrated free weights, rowing, and athletic output.' 
                      },
                      { 
                        icon: Users, 
                        title: 'Club 360', 
                        desc: lang === 'es' ? 'Combinación total: fisioterapia, clases grupales y vestuario.' : 'Comprehensive hybrid: on-site physical therapy, group sessions, and boutique lockers.' 
                      },
                    ].map((opt, i) => (
                      <div 
                        key={i} 
                        onClick={() => {
                          alert(lang === 'es' ? `Objetivo "${opt.title}" seleccionado. Procediendo a agendar la visita.` : `Objective "${opt.title}" selected. Proceeding to survey booking.`);
                          setActiveModal('booking');
                        }}
                        className="p-4 rounded-2xl border-2 border-gray-100 dark:border-white/10 dark:bg-white/5 hover:border-[#FF4900] hover:bg-[#FF4900]/5 dark:hover:bg-[#FF4900]/10 cursor-pointer transition-all space-y-2 group"
                      >
                        <opt.icon className="w-6 h-6 text-[#FF4900] group-hover:scale-110 transition-transform" />
                        <div className="font-bold text-sm text-gray-900 dark:text-white">{opt.title}</div>
                        <div className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{opt.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between text-xs">
                    <span className="text-gray-400">
                      {lang === 'es' ? 'Incluye seguro e instalación en menos de 14 días.' : 'Includes full insurance coverage and installation within 14 days.'}
                    </span>
                    <button
                      onClick={() => setActiveModal('booking')}
                      className="font-bold text-[#FF4900] hover:underline cursor-pointer"
                    >
                      {lang === 'es' ? 'Continuar a la visita técnica →' : 'Continue to technical survey →'}
                    </button>
                  </div>
                </div>
              )}

              {/* 3. MODAL: DETALLES DE COACHES & EQUIPO MÉDICO */}
              {activeModal === 'coaching' && (
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF4900]/10 text-[#FF4900] text-xs font-bold uppercase tracking-wider">
                    {lang === 'es' ? 'Staff Certificado Room for Sport' : 'Room for Sport Certified Medical Staff'}
                  </div>
                  <h3 id="modal-title" className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                    {lang === 'es' ? 'Profesionales de Alto Rendimiento en tu Oficina' : 'High-Performance Athletic Specialists in Your Office'}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {lang === 'es'
                      ? 'No contratamos monitores ocasionales. Nuestro equipo está compuesto por graduados en Ciencias de la Actividad Física (CAFYD) y Fisioterapeutas Colegiados.'
                      : 'We never hire temporary trainers. Our staff is exclusively composed of Sports Science graduates (CAFYD) and licensed physical therapists.'}
                  </p>

                  <div className="space-y-3 pt-2">
                    {[
                      { 
                        name: 'Dr. Carlos Mendoza', 
                        role: lang === 'es' ? 'Director Médico & Fisioterapeuta Colegiado' : 'Medical Director & Licensed Physical Therapist', 
                        exp: lang === 'es' ? '12 años de experiencia en medicina deportiva y prevención ergonómica laboral.' : '12 years of experience in elite sports medicine and workplace ergonomic injury prevention.' 
                      },
                      { 
                        name: 'Elena Vega (CAFYD)', 
                        role: lang === 'es' ? 'Head Coach de Movilidad & Mindfulness Activo' : 'Head Coach of Mobility & Active Mindfulness', 
                        exp: lang === 'es' ? 'Especialista en descompresión postural para programadores y personal de oficina.' : 'Specialist in postural decompression for engineers and desk-bound office professionals.' 
                      },
                      { 
                        name: 'Marc Soler', 
                        role: lang === 'es' ? 'Especialista en Fuerza & Readaptación Funcional' : 'Functional Strength & Rehabilitation Specialist', 
                        exp: lang === 'es' ? 'Entrenador de atletas olímpicos y formador de retos corporativos de alto impacto.' : 'Coach to Olympic athletes and instructor of high-engagement corporate wellness challenges.' 
                      },
                    ].map((c, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold text-xs shrink-0">
                          {c.name.split(' ')[0][0]}{c.name.split(' ')[1][0]}
                        </div>
                        <div>
                          <div className="text-xs font-black text-gray-900 dark:text-white">{c.name}</div>
                          <div className="text-[11px] text-[#FF4900] font-bold">{c.role}</div>
                          <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">{c.exp}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {lang === 'es' ? 'Todos los coaches cubiertos por seguro de responsabilidad civil.' : 'All resident coaches covered by a comprehensive €3M general liability policy.'}
                    </span>
                    <button
                      onClick={() => setActiveModal('booking')}
                      className="btn-tactile-dark cursor-pointer"
                    >
                      <span>{lang === 'es' ? 'Solicitar Asignación de Coach' : 'Request Coach Assignment'}</span>
                      <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* 4. MODAL: DETALLES DE EVENTO SELECCIONADO */}
              {activeModal === 'event' && selectedEvent && (
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CDFF00] text-black text-xs font-black uppercase tracking-wider">
                    {selectedEvent.category}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-black text-white flex flex-col items-center justify-center shrink-0">
                      <span className="text-[10px] font-mono text-gray-400 uppercase">{selectedEvent.month}</span>
                      <span className="text-xl font-bold leading-none">{selectedEvent.date}</span>
                    </div>
                    <div>
                      <h3 id="modal-title" className="text-2xl font-black text-gray-900 dark:text-white leading-tight">
                        {selectedEvent.title}
                      </h3>
                      <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#FF4900]" /> {selectedEvent.location}
                        <span>•</span>
                        <Clock className="w-3.5 h-3.5 text-[#FF4900]" /> {selectedEvent.time}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 space-y-2 text-xs text-gray-700 dark:text-gray-300">
                    <div className="font-bold text-gray-900 dark:text-white">
                      {lang === 'es' ? 'Descripción del Torneo / Sesión:' : 'Tournament / Session Overview:'}
                    </div>
                    <p className="leading-relaxed">{selectedEvent.desc}</p>
                    <div className="pt-2 text-[11px] text-gray-500 dark:text-gray-400">
                      <strong className="text-gray-800 dark:text-gray-200">
                        {lang === 'es' ? 'Requisitos:' : 'Requirements:'}
                      </strong> {selectedEvent.requirements}
                    </div>
                    <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> {selectedEvent.spots}
                    </div>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => {
                        alert(lang === 'es' ? `¡Inscripción para "${selectedEvent.title}" registrada! Nuestro equipo de eventos contactará con vuestro departamento de RRHH.` : `Registration for "${selectedEvent.title}" logged! Our events team will reach out to your HR department.`);
                        setActiveModal(null);
                      }}
                      className="btn-tactile-orange flex-1 justify-center cursor-pointer"
                    >
                      <span>{lang === 'es' ? 'Inscribir a Mi Empresa' : 'Register My Company'}</span>
                      <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                    <button
                      onClick={() => setActiveModal(null)}
                      className="btn-tactile-white dark:bg-white/10 dark:text-white dark:border-white/10 cursor-pointer"
                    >
                      <span>{lang === 'es' ? 'Cerrar' : 'Close'}</span>
                      <span className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center">
                        <X className="w-3 h-3" />
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* 5. MODAL: DETALLES DE SALAS MODULARES */}
              {activeModal === 'rooms' && (
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF4900]/10 text-[#FF4900] text-xs font-bold uppercase tracking-wider">
                    {lang === 'es' ? 'Modelos Arquitectónicos Modulares' : 'Modular Architectural Models'}
                  </div>
                  <h3 id="modal-title" className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                    {lang === 'es' ? 'Especificaciones Técnicas de las Salas' : 'Studio Technical Specifications'}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {lang === 'es'
                      ? 'Nuestras salas se montan mediante estructuras modulares de fijación segura sin obras invasivas ni alteraciones estructurales a tu edificio.'
                      : 'Our athletic rooms are built with non-invasive modular structural framing, requiring zero intrusive structural modifications to your building.'}
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="p-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-gray-900 dark:text-white">01. Active Reset Studio (30 - 50 m²)</span>
                        <span className="text-[10px] font-mono bg-white dark:bg-white/10 dark:text-white px-2 py-0.5 rounded border border-gray-200 dark:border-white/10 font-bold">
                          {lang === 'es' ? '12 pers. turno' : '12 pers. / slot'}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {lang === 'es'
                          ? 'Espalderas de madera ergonómica, zona de estiramientos, pantalla inteligente para clases guiadas y sets de bandas elásticas.'
                          : 'Ergonomic Swedish wall bars, dedicated stretching turf, smart workout screen, and calibrated resistance band racks.'}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border-2 border-[#FF4900] bg-white dark:bg-[#1A1C23] space-y-2 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-black text-sm text-[#FF4900]">02. Functional Box Room (80 - 150 m²)</span>
                        <span className="text-[10px] font-mono bg-[#FF4900] text-white px-2 py-0.5 rounded font-bold">
                          {lang === 'es' ? 'Recomendado' : 'Most Popular'}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {lang === 'es'
                          ? 'Rack de cross-training multifuncional, barras olímpicas engomadas, mancuernas de 2 a 30 kg, assault bikes y suelo fonoabsorbente.'
                          : 'Multifunctional cross-training rack, urethane Olympic bars, dumbbells 2–30 kg, assault bikes, and acoustic vibration-damping turf.'}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-gray-900 dark:text-white">03. Executive Corporate Club (+200 m²)</span>
                        <span className="text-[10px] font-mono bg-white dark:bg-white/10 dark:text-white px-2 py-0.5 rounded border border-gray-200 dark:border-white/10 font-bold">
                          {lang === 'es' ? '+35 pers. turno' : '+35 pers. / slot'}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {lang === 'es'
                          ? 'Centro integral con área de peso libre, cardio interactivo, cabina para fisioterapeuta in-house y vestuarios boutique.'
                          : 'Full-scale athletic facility featuring free-weight zone, connected cardio, on-site PT clinic suite, and boutique locker rooms.'}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {lang === 'es' ? 'Montaje en 14 días con presupuesto cerrado.' : '14-day turnkey assembly with guaranteed fixed pricing.'}
                    </span>
                    <button
                      onClick={() => setActiveModal('booking')}
                      className="btn-tactile-orange cursor-pointer"
                    >
                      <span>{lang === 'es' ? 'Pedir Render 3D' : 'Request 3D Render'}</span>
                      <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* 6. MODAL: CALCULADORA ROI INTERACTIVA */}
              {activeModal === 'roi' && (
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4F724] text-black text-xs font-black uppercase tracking-wider">
                    {lang === 'es' ? 'Simulador Financiero B2B' : 'B2B Financial Simulator'}
                  </div>
                  <h3 id="modal-title" className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                    {lang === 'es' ? 'Retorno de Inversión y Ahorro en Salud' : 'Return on Investment & Healthcare Savings'}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {lang === 'es' 
                      ? 'Ajusta el número de colaboradores de tu plantilla para proyectar el impacto económico directo:' 
                      : 'Adjust your corporate headcount to forecast direct financial return and absenteeism reduction:'}
                  </p>

                  <div className="p-5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 space-y-4">
                    <div className="flex items-center justify-between">
                      <label htmlFor="roi-employees-slider" className="text-xs font-bold text-gray-700 dark:text-gray-300">
                        {lang === 'es' ? 'Número de Empleados:' : 'Number of Employees:'}
                      </label>
                      <span className="text-xl font-black text-[#FF4900]">
                        {calcEmployees} {lang === 'es' ? 'colaboradores' : 'employees'}
                      </span>
                    </div>
                    <input
                      id="roi-employees-slider"
                      name="employees"
                      type="range"
                      min="20"
                      max="600"
                      step="10"
                      value={calcEmployees}
                      onChange={(e) => setCalcEmployees(Number(e.target.value))}
                      aria-label={lang === 'es' ? 'Número de colaboradores para la estimación de ROI' : 'Headcount for ROI estimation'}
                      className="w-full accent-[#FF4900] cursor-pointer"
                    />

                    <div className="grid grid-cols-2 gap-3 pt-2 text-left">
                      <div className="p-3 bg-white dark:bg-[#1A1C23] rounded-xl border border-gray-200 dark:border-white/10 shadow-sm">
                        <div className="text-[10px] uppercase font-bold text-gray-400">
                          {lang === 'es' ? 'Días de baja médica evitados' : 'Sick leave days prevented'}
                        </div>
                        <div className="text-2xl font-black text-gray-900 dark:text-white mt-0.5">
                          {Math.round(calcEmployees * 2.3)} {lang === 'es' ? 'días/año' : 'days/year'}
                        </div>
                      </div>
                      <div className="p-3 bg-white dark:bg-[#1A1C23] rounded-xl border border-gray-200 dark:border-white/10 shadow-sm">
                        <div className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400">
                          {lang === 'es' ? 'Ahorro anual estimado' : 'Estimated annual savings'}
                        </div>
                        <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5">
                          ${(Math.round(calcEmployees * 2.3) * 175).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {lang === 'es' ? '100% deducible fiscalmente en el impuesto de sociedades.' : '100% tax-deductible as corporate healthcare expenditure.'}
                    </span>
                    <button
                      onClick={() => setActiveModal('booking')}
                      className="btn-tactile-dark cursor-pointer"
                    >
                      <span>{lang === 'es' ? 'Descargar Auditoría' : 'Download Audit Dossier'}</span>
                      <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* 7. MODAL: PROTOCOLO POSTURAL ANTI-PANTALLA */}
              {activeModal === 'protocol' && (
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                    {lang === 'es' ? 'Fisioterapia Preventiva' : 'Preventive Physical Therapy'}
                  </div>
                  <h3 id="modal-title" className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                    {lang === 'es' ? 'Protocolo Ergonómico de 15 Minutos' : '15-Minute Ergonomic Reset Protocol'}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {lang === 'es'
                      ? 'Diseñado para realizarse a mitad de jornada frente al escritorio o en la sala Room for Sport para reactivar la circulación y aliviar la tensión cervical:'
                      : 'Designed for mid-day execution at the desk or inside the Room for Sport studio to stimulate blood flow and relieve cervical spine tension:'}
                  </p>

                  <div className="space-y-2.5 pt-1 text-xs">
                    {[
                      { 
                        step: '01', 
                        title: lang === 'es' ? 'Descompresión Cervical & Trapecios' : 'Cervical & Trapezius Decompression', 
                        time: lang === 'es' ? '3 minutos' : '3 minutes', 
                        desc: lang === 'es' ? 'Inclinaciones laterales asistidas con control respiratorio para liberar la base del cráneo.' : 'Guided lateral neck tilts with controlled diaphragmatic breathing to release suboccipital tension.' 
                      },
                      { 
                        step: '02', 
                        title: lang === 'es' ? 'Apertura Torácica en Pared o Espaldera' : 'Thoracic Wall / Stall Bar Opening', 
                        time: lang === 'es' ? '4 minutos' : '4 minutes', 
                        desc: lang === 'es' ? 'Extensión dorsal para contrarrestar la postura encorvada frente a la pantalla y teclado.' : 'Dorsal extension mobility drills to counter keyboard slouch and forward head posture.' 
                      },
                      { 
                        step: '03', 
                        title: lang === 'es' ? 'Activación de Glúteos y Cadera' : 'Glute & Hip Flexor Activation', 
                        time: lang === 'es' ? '5 minutos' : '5 minutes', 
                        desc: lang === 'es' ? 'Puentes de glúteo y zancadas estáticas para despertar la musculatura estabilizadora.' : 'Glute bridges and isometric split-lunges to awaken dormant hip stabilizer muscles.' 
                      },
                      { 
                        step: '04', 
                        title: lang === 'es' ? 'Respiración Diafragmática & Foco' : 'Diaphragmatic Breathing & Cognitive Focus', 
                        time: lang === 'es' ? '3 minutos' : '3 minutes', 
                        desc: lang === 'es' ? 'Reducción de cortisol mediante inhalaciones 4-7-8 guiadas por nuestros fisioterapeutas.' : 'Cortisol reduction via 4-7-8 cadence breathing guided by certified physiotherapists.' 
                      },
                    ].map((p, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-start gap-3">
                        <span className="w-7 h-7 rounded-lg bg-black text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                          {p.step}
                        </span>
                        <div>
                          <div className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            <span>{p.title}</span>
                            <span className="text-[10px] text-[#FF4900] font-mono">({p.time})</span>
                          </div>
                          <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {lang === 'es' ? 'Disponible también en streaming diario en la app corporativa.' : 'Also available via daily live streaming on the corporate app.'}
                    </span>
                    <button
                      onClick={() => setActiveModal('booking')}
                      className="btn-tactile-orange cursor-pointer"
                    >
                      <span>{lang === 'es' ? 'Implantar en Mi Empresa' : 'Implement in My Company'}</span>
                      <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* 8. NEW MODAL: APP DEMO INTERACTIVA */}
              {activeModal === 'appDemo' && (
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CDFF00] text-black text-xs font-black uppercase tracking-wider">
                    {lang === 'es' ? 'Simulador Interactivo de la App RFS' : 'RFS Mobile App Interactive Preview'}
                  </div>
                  <h3 id="modal-title" className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                    {lang === 'es' ? 'Experiencia del Colaborador en Móvil' : 'Employee Mobile Experience'}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {lang === 'es'
                      ? 'Así es como tus empleados interactúan a diario con la sala, reservan sus sesiones y compiten en los retos de salud:'
                      : 'How your employees interact daily with the studio, book slots, and compete in team fitness challenges:'}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                    <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 space-y-2">
                      <div className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center font-bold">1</div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {lang === 'es' ? 'Reserva de Plaza' : 'Instant Slot Booking'}
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-[11px]">
                        {lang === 'es' 
                          ? 'En 1 toque desde iPhone o Android. Sincronización automática con Outlook y Google Calendar.' 
                          : 'One tap on iOS or Android. Instant two-way synchronization with Outlook and Google Calendar.'}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 space-y-2">
                      <div className="w-8 h-8 rounded-xl bg-[#FF4900] text-white flex items-center justify-center font-bold">2</div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {lang === 'es' ? 'Acceso RFID' : 'Touchless RFID Access'}
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-[11px]">
                        {lang === 'es' 
                          ? 'La app abre el torniquete o puerta electrónica de la sala y registra el aforo en tiempo real.' 
                          : 'The app unlocks digital access gates and registers occupancy telemetrics in real time.'}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 space-y-2">
                      <div className="w-8 h-8 rounded-xl bg-[#CDFF00] text-black flex items-center justify-center font-bold">3</div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        {lang === 'es' ? 'Puntos de Bienestar' : 'Corporate Health Points'}
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-[11px]">
                        {lang === 'es' 
                          ? 'Cada minuto activo suma puntos para el ranking del departamento y canje de beneficios.' 
                          : 'Active minutes accumulate towards departmental leaderboards and reward incentives.'}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-200 flex items-center justify-between">
                    <span className="font-semibold">
                      {lang === 'es' ? 'Compatible con Apple Watch, Garmin, Fitbit y Whoop' : 'Native synchronization with Apple Watch, Garmin, Fitbit & Whoop'}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {lang === 'es' ? 'Personalizable con el logotipo y colores de tu empresa.' : 'Fully white-labeled with your corporate logo and brand colors.'}
                    </span>
                    <button
                      onClick={() => setActiveModal('booking')}
                      className="btn-tactile-dark cursor-pointer"
                    >
                      <span>{lang === 'es' ? 'Solicitar Demo Beta' : 'Request Beta Access'}</span>
                      <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* 9. NEW MODAL: PLAN PROPOSAL GENERATOR */}
              {activeModal === 'planProposal' && (
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF4900]/10 text-[#FF4900] text-xs font-bold uppercase tracking-wider">
                    {lang === 'es' ? 'Presupuesto y Propuesta de Servicio' : 'Formal Pricing & Service Proposal'}
                  </div>
                  <h3 id="modal-title" className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                    {lang === 'es' ? 'Solicitud de Propuesta Formal' : 'Request Official Plan Dossier'}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {lang === 'es' ? 'Estás configurando una propuesta para el plan ' : 'Configuring an official dossier for the '}<strong className="text-[#FF4900] uppercase">{plans.find(p => p.id === selectedPlan)?.name}</strong>{lang === 'es' ? ':' : ' plan:'}
                  </p>

                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert(lang === 'es' ? 'Propuesta generada. Te hemos enviado un PDF detallado de desglose de costes y plazos a tu email.' : 'Proposal generated. A detailed cost breakdown and timeline PDF has been dispatched to your email.');
                      setActiveModal(null);
                    }}
                    className="space-y-3.5 text-xs text-left"
                  >
                    <div>
                      <label htmlFor="plan-name-input" className="font-bold text-gray-700 dark:text-gray-300 block mb-1">
                        {lang === 'es' ? 'Nombre del Solicitante' : 'Contact Person Full Name'}
                      </label>
                      <input 
                        id="plan-name-input" 
                        name="name" 
                        required 
                        type="text" 
                        placeholder={lang === 'es' ? 'Ej. Javier Romero — CFO' : 'e.g., John Doe — CFO'} 
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:outline-none focus:border-[#FF4900]" 
                      />
                    </div>

                    <div>
                      <label htmlFor="plan-email-input" className="font-bold text-gray-700 dark:text-gray-300 block mb-1">
                        {lang === 'es' ? 'Email de Empresa' : 'Corporate Email Address'}
                      </label>
                      <input 
                        id="plan-email-input" 
                        name="email" 
                        required 
                        type="email" 
                        placeholder={lang === 'es' ? 'javier@corporacion.com' : 'john@enterprise.com'} 
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:outline-none focus:border-[#FF4900]" 
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="plan-city-input" className="font-bold text-gray-700 dark:text-gray-300 block mb-1">
                          {lang === 'es' ? 'Ciudad de la Sede' : 'HQ City Location'}
                        </label>
                        <input 
                          id="plan-city-input" 
                          name="city" 
                          required 
                          type="text" 
                          placeholder={lang === 'es' ? 'Madrid / Barcelona...' : 'London / New York / Madrid...'} 
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:outline-none focus:border-[#FF4900]" 
                        />
                      </div>
                      <div>
                        <label htmlFor="plan-deadline-select" className="font-bold text-gray-700 dark:text-gray-300 block mb-1">
                          {lang === 'es' ? 'Plazo Deseado' : 'Desired Launch Timeframe'}
                        </label>
                        <select id="plan-deadline-select" name="deadline" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-[#1A1C23] dark:text-white focus:outline-none focus:border-[#FF4900]">
                          <option>{lang === 'es' ? 'Inmediato (próximos 30 días)' : 'Immediate (next 30 days)'}</option>
                          <option>{lang === 'es' ? 'Próximo trimestre' : 'Next fiscal quarter'}</option>
                          <option>{lang === 'es' ? 'Planificación para 2026' : 'Planning for late 2026'}</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn-tactile-orange w-full justify-center cursor-pointer"
                    >
                      <span>{lang === 'es' ? 'Recibir Dossier Financiero en PDF' : 'Receive Cost Dossier in PDF'}</span>
                      <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </form>
                </div>
              )}

              {/* 10. AUTH MODAL: [LOG IN] / [SIGN UP] WITH ROLE SWITCHER */}
              {activeModal === 'auth' && (
                <div className="space-y-5 text-left">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF4900]/10 text-[#FF4900] text-xs font-bold uppercase tracking-wider">
                      <UserCheck className="w-3.5 h-3.5" /> Room for Sport ID
                    </div>
                    {/* Log In / Sign Up Tab Switcher */}
                    <div className="flex items-center bg-gray-100 dark:bg-white/10 rounded-full p-1 text-xs font-bold">
                      <button
                        type="button"
                        onClick={() => setAuthMode('login')}
                        className={`px-3 py-1 rounded-full transition-all cursor-pointer ${authMode === 'login' ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm' : 'text-gray-500 hover:text-black dark:hover:text-white'}`}
                      >
                        {lang === 'es' ? 'Iniciar Sesión' : 'Log In'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setAuthMode('signup')}
                        className={`px-3 py-1 rounded-full transition-all cursor-pointer ${authMode === 'signup' ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm' : 'text-gray-500 hover:text-black dark:hover:text-white'}`}
                      >
                        {lang === 'es' ? 'Registrarse' : 'Sign Up'}
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 id="modal-title" className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                      {authMode === 'login' 
                        ? (lang === 'es' ? 'Acceso a tu Cuenta Atlética' : 'Welcome to Room for Sport') 
                        : (lang === 'es' ? 'Crea tu Perfil Deportivo' : 'Create Your Athletic Profile')}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {lang === 'es' 
                        ? 'Gestiona tus sesiones diarias, consulta tus marcas y sincroniza tus objetivos con tu equipo.' 
                        : 'Manage your daily workouts, track biometrics, and sync athletic targets with your team.'}
                    </p>
                  </div>

                  {/* Role Selector: Individual Athlete ($15) vs Corporate Member ($45) */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-700 dark:text-gray-300 block">
                      {lang === 'es' ? 'Tipo de Cuenta / Membresía' : 'Account Type / Membership'}
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => setAuthRole('athlete')}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                          authRole === 'athlete'
                            ? 'border-[#FF4900] bg-[#FF4900]/5 text-gray-900 dark:text-white font-bold ring-2 ring-[#FF4900]/20'
                            : 'border-gray-200 dark:border-white/10 hover:border-gray-300 text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-extrabold text-xs">{lang === 'es' ? 'Atleta Individual' : 'Individual Athlete'}</span>
                          <span className="text-[10px] font-mono text-[#FF4900] font-bold">$15/mo</span>
                        </div>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-1">{lang === 'es' ? 'Entrenamientos y marcas personales' : 'Personal workouts & telemetry'}</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAuthRole('corporate')}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                          authRole === 'corporate'
                            ? 'border-[#CDFF00] bg-[#CDFF00]/10 text-gray-900 dark:text-white font-bold ring-2 ring-[#CDFF00]/30'
                            : 'border-gray-200 dark:border-white/10 hover:border-gray-300 text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-extrabold text-xs">{lang === 'es' ? 'Miembro Corporativo' : 'Corporate Member'}</span>
                          <span className="text-[10px] font-mono text-emerald-600 dark:text-[#CDFF00] font-bold">$45/mo</span>
                        </div>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-1">{lang === 'es' ? 'Acceso a salas en oficina y ligas' : 'Office studios & tournaments'}</p>
                      </button>
                    </div>
                  </div>

                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      const name = authData.name.trim() || 'Tomás Kax';
                      setAthleteName(name);
                      setIsLoggedIn(true);
                      triggerToast(lang === 'es' ? `¡Sesión iniciada como ${name}!` : `Signed in as ${name}!`);
                      setActiveModal(null);
                    }}
                    className="space-y-3.5 text-xs text-left"
                  >
                    {authMode === 'signup' && (
                      <div>
                        <label htmlFor="auth-name-input" className="font-bold text-gray-700 dark:text-gray-300 block mb-1">
                          {lang === 'es' ? 'Nombre y Apellidos' : 'Full Name'}
                        </label>
                        <input 
                          id="auth-name-input" 
                          type="text" 
                          required 
                          placeholder="Tomás Kax" 
                          value={authData.name}
                          onChange={(e) => setAuthData({ ...authData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:outline-none focus:border-[#FF4900]" 
                        />
                      </div>
                    )}

                    <div>
                      <label htmlFor="auth-email-input" className="font-bold text-gray-700 dark:text-gray-300 block mb-1">
                        {lang === 'es' ? 'Correo Electrónico' : 'Email Address'}
                      </label>
                      <input 
                        id="auth-email-input" 
                        type="email" 
                        required 
                        placeholder={authRole === 'corporate' ? 'tomas@tuempresa.com' : 'tomas@kaxfv.com'} 
                        value={authData.email}
                        onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:outline-none focus:border-[#FF4900]" 
                      />
                    </div>

                    <div>
                      <label htmlFor="auth-password-input" className="font-bold text-gray-700 dark:text-gray-300 block mb-1">
                        {lang === 'es' ? 'Contraseña' : 'Password'}
                      </label>
                      <input 
                        id="auth-password-input" 
                        type="password" 
                        required 
                        placeholder="••••••••••••" 
                        value={authData.password}
                        onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:outline-none focus:border-[#FF4900]" 
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-tactile-orange w-full justify-center cursor-pointer py-3 mt-2"
                    >
                      <span>{authMode === 'login' ? (lang === 'es' ? 'Entrar a mi Cuenta' : 'Log In to Account') : (lang === 'es' ? 'Crear Cuenta y Comenzar' : 'Create Account & Begin')}</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </form>

                  <div className="pt-2 text-center text-[11px] text-gray-400">
                    {lang === 'es' ? 'Protección de datos conforme a RGPD y cifrado TLS 256-bit.' : 'End-to-end 256-bit encryption & GDPR compliant.'}
                  </div>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SERVICE DETAIL MODAL */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#14161B] rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-white/10 z-10 text-left my-8 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedService(null)}
                aria-label="Cerrar modal"
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:scale-105 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="relative h-60 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 rounded-t-[2.5rem] overflow-hidden">
                  <img src={selectedService.image} alt={selectedService.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                    <div>
                      <span className="px-2.5 py-1 rounded-full bg-[#FF4900] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                        {lang === 'es' ? selectedService.categoryNameEs : selectedService.categoryName}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black mt-1">
                        {lang === 'es' ? selectedService.nameEs : selectedService.name}
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#CDFF00] text-black text-xs font-mono font-black">
                      {selectedService.duration} • {selectedService.calories}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {lang === 'es' ? selectedService.description : selectedService.descriptionEn}
                </p>

                {/* Drills Section */}
                <div className="space-y-3 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                  <span className="text-[11px] font-mono font-bold uppercase text-[#FF4900] block">
                    {lang === 'es' ? 'Rutina & Drills de Entrenamiento' : 'Training Routine & Drills'}
                  </span>
                  <div className="space-y-2">
                    {(lang === 'es' ? selectedService.drills : (selectedService.drillsEn || selectedService.drills)).map((drill, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                        <span className="w-5 h-5 rounded-full bg-[#FF4900]/10 text-[#FF4900] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{drill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment & Features */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase text-gray-400 block">
                    {lang === 'es' ? 'Equipamiento & Características Técnicas' : 'Equipment & Features'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {(lang === 'es' ? selectedService.features : (selectedService.featuresEn || selectedService.features)).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="text-[11px]">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setDiaryForm({
                        sport: selectedService.name,
                        duration: 45,
                        intensity: selectedService.intensity,
                        notes: lang === 'es' ? `Sesión de ${selectedService.nameEs} completada.` : `${selectedService.name} session logged.`
                      });
                      setSelectedService(null);
                      const el = document.getElementById('dashboard-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      triggerToast(lang === 'es' ? `¡${selectedService.nameEs} pre-seleccionado en tu diario!` : `${selectedService.name} loaded into your diary!`);
                    }}
                    className="btn-tactile-orange cursor-pointer text-xs"
                  >
                    <span>{lang === 'es' ? 'Registrar en mi Diario de Hoy' : 'Log in My Training Diary'}</span>
                    <Plus className="w-4 h-4 ml-1" />
                  </button>

                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-xs font-bold text-gray-600 dark:text-gray-300 hover:border-black dark:hover:border-white transition-colors cursor-pointer"
                  >
                    {lang === 'es' ? 'Cerrar' : 'Close'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ARTICLE READER MODAL (SPORTS TIPS & EXPERT ADVICE) */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#14161B] rounded-[2.5rem] p-6 sm:p-10 shadow-2xl border border-gray-200 dark:border-white/10 z-10 text-left my-8 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                aria-label={lang === 'es' ? "Cerrar artículo" : "Close article"}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:scale-105 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-[#FF4900]/10 text-[#FF4900] font-mono font-bold uppercase tracking-wider">
                      {lang === 'es' ? selectedArticle.categoryLabelEs : selectedArticle.categoryLabel}
                    </span>
                    <span className="text-gray-400 font-mono flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {selectedArticle.readTime} • {lang === 'es' ? (selectedArticle.dateEs || selectedArticle.date) : selectedArticle.date}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white leading-tight">
                    {lang === 'es' ? selectedArticle.titleEs : selectedArticle.title}
                  </h2>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-10 h-10 rounded-full bg-[#FF4900] text-white flex items-center justify-center font-bold text-sm">
                      {selectedArticle.author[0]}
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 dark:text-white text-xs block">{selectedArticle.author}</span>
                      <span className="text-gray-400 text-[11px]">
                        {lang === 'es' ? (selectedArticle.authorRoleEs || selectedArticle.authorRole) : selectedArticle.authorRole}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed pt-4 border-t border-gray-100 dark:border-white/10">
                  {(lang === 'es' ? selectedArticle.content : (selectedArticle.contentEn || selectedArticle.content)).map((paragraph, idx) => (
                    <p key={idx} className="whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-xs text-amber-800 dark:text-amber-200">
                  <strong>{lang === 'es' ? 'Clave de Aplicación Práctica: ' : 'Practical Takeaway: '}</strong>
                  {lang === 'es' 
                    ? 'La consistencia en pequeñas dosis diarias supera a los esfuerzos esporádicos extremos. Aplica este protocolo en tu próxima sesión.' 
                    : 'Consistency in small daily doses outperforms sporadic extreme efforts. Apply this routine in your upcoming session.'}
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-400">Room for Sport Athletic Knowledge Base</span>
                  <button
                    onClick={() => {
                      triggerToast(lang === 'es' ? '¡Artículo guardado en tus favoritos!' : 'Article bookmarked!');
                      setSelectedArticle(null);
                    }}
                    className="btn-tactile-dark cursor-pointer text-xs"
                  >
                    <span>{lang === 'es' ? 'Guardar en Favoritos' : 'Save to Favorites'}</span>
                    <Bookmark className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
