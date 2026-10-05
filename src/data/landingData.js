// Datos estructurados para las variantes de landing page de Room for Sport
// Diseñado para fácil edición cuando se cargue el documento oficial del cliente

export const landingVariants = {
  corporate: {
    id: 'corporate',
    badge: 'Deporte Corporativo & Rendimiento Empresarial',
    heroTitle: 'Transformamos el espacio de tu empresa en un motor de salud y alta productividad.',
    heroSubtitle: 'Diseñamos, instalamos y gestionamos salas de entrenamiento y bienestar dentro de tus oficinas. Menos absentismo, cero burnout y equipos de alto impacto.',
    primaryCta: 'Agendar Diagnóstico Gratuito',
    secondaryCta: 'Calcular ROI de tu Empresa',
    heroPill: 'Aprobado por Directores de Personas y CEOs',
  },
  spaces: {
    id: 'spaces',
    badge: 'Infraestructura Modular Llave en Mano',
    heroTitle: 'Salas deportivas premium que se adaptan a cualquier metro cuadrado disponible.',
    heroSubtitle: 'Desde salas de recuperación activa de 40 m² hasta centros deportivos completos para sedes corporativas. Equipamiento biomecánico de primer nivel sin obras invasivas.',
    primaryCta: 'Explorar Modelos de Sala',
    secondaryCta: 'Solicitar Render 3D de tu Espacio',
    heroPill: 'Instalación rápida en menos de 14 días',
  },
  athletes: {
    id: 'athletes',
    badge: 'La Experiencia del Colaborador',
    heroTitle: 'El beneficio laboral que tus empleados realmente van a amar y utilizar.',
    heroSubtitle: 'Clases guiadas por entrenadores de élite, desafíos en equipo, pausas activas contra el dolor lumbar y planes de nutrición personalizados.',
    primaryCta: 'Ver Programa de Actividades',
    secondaryCta: 'Conocer a Nuestros Coaches',
    heroPill: '94% de adherencia y satisfacción en encuestas',
  }
};

export const corporateMetrics = [
  {
    value: '-38%',
    label: 'Bajas por estrés y dolor de espalda',
    detail: 'Ahorro directo en costes de salud y absentismo laboral.',
    accent: 'text-sport-emerald'
  },
  {
    value: '+29%',
    label: 'Energía y foco en horario de trabajo',
    detail: 'Incremento sostenido en la claridad mental y concentración.',
    accent: 'text-sport-blue'
  },
  {
    value: '94%',
    label: 'Tasa de retención y orgullo de pertenencia',
    detail: 'Factor decisivo en contrataciones y retención de talento clave.',
    accent: 'text-titanium-800'
  },
  {
    value: '4.2x',
    label: 'Retorno de inversión promedio (ROI)',
    detail: 'Por cada euro invertido en bienestar activo corporativo.',
    accent: 'text-sport-cyan'
  }
];

export const roomModels = [
  {
    id: 'studio-40',
    title: 'Active Reset Studio',
    area: '30 - 50 m²',
    capacity: '8 - 12 personas simultáneas',
    description: 'Espacio optimizado para empresas con espacio reducido. Diseñado para movilidad articular, yoga postural, estiramientos y liberación de tensión muscular tras horas frente al ordenador.',
    features: ['Suelo vinílico antibacteriano de absorción de impacto', 'Pared de espalderas y bandas de resistencia elástica', 'Zona de mats ergonómicos y foam rollers', 'Pantalla integrada con micro-sesiones guiadas'],
    idealFor: 'Startups y oficinas medianas (30 a 100 empleados)',
    badge: 'Rápida Implementación'
  },
  {
    id: 'performance-120',
    title: 'Functional Performance Room',
    area: '80 - 150 m²',
    capacity: '15 - 25 personas simultáneas',
    description: 'Nuestra solución más demandada. Un box de entrenamiento funcional completo: peso libre inteligente, máquinas de poleas integradas, barras olímpicas, assault bikes y entrenamientos en grupo.',
    features: ['Rack multifuncional modular de acero anodizado', 'Mancuernas engomadas y kettlebells calibradas', 'Zona de césped sintético para arrastre y velocidad', 'Sistema de sonido envolvente y purificación de aire HEPA'],
    idealFor: 'Sedes corporativas de 100 a 500 empleados',
    badge: 'El Más Popular',
    recommended: true
  },
  {
    id: 'club-300',
    title: 'Executive Athletic Hub',
    area: '200 m² o superior',
    capacity: '35+ personas simultáneas',
    description: 'Un centro deportivo de alto nivel exclusivo para tu empresa. Áreas diferenciadas para fuerza, cardio interactivo, sala de clases colectivas, duchas boutique y cabinas de fisioterapia.',
    features: ['Zona de fuerza guiada y peso libre de última generación', 'Cardio con pantallas interactivas y retos gamificados', 'Duchas premium con vestuario integrado', 'Cabina para fisioterapeuta y nutricionista in-house'],
    idealFor: 'Grandes campus empresariales (+500 colaboradores)',
    badge: 'Experiencia Total'
  }
];

export const bentoFeatures = [
  {
    span: 'col-span-12 lg:col-span-8',
    tag: 'Gestión Integral 360°',
    title: 'Nosotros nos encargamos de todo. Tu equipo solo disfruta.',
    description: 'No necesitas gestionar compras, contratos con entrenadores ni mantenimiento. Room for Sport opera tu sala como un servicio llave en mano.',
    details: ['Monitores titulados presenciales y digitales', 'Mantenimiento preventivo mensual y limpieza especializada', 'Seguro de responsabilidad civil de máxima cobertura incluido']
  },
  {
    span: 'col-span-12 lg:col-span-4',
    tag: 'Salud Basada en Datos',
    title: 'Informes Trimestrales de Impacto en RRHH',
    description: 'Dashboard en tiempo real con datos anónimos de participación, calorías activas, horas de uso y métricas de reducción del estrés.',
    metric: '+88%',
    metricLabel: 'Adopción en los primeros 60 días'
  },
  {
    span: 'col-span-12 lg:col-span-4',
    tag: 'Tecnología & App',
    title: 'Reserva de Clases en 1 Clic',
    description: 'App para iOS y Android personalizada con los colores de tu empresa. Los empleados reservan slots de entrenamiento, fisioterapia o eventos.',
    appFeature: 'Sincronización con Google Calendar y Outlook'
  },
  {
    span: 'col-span-12 lg:col-span-8',
    tag: 'Ergonomía & Prevención',
    title: 'Erradicamos las dolencias posturales del trabajo sedentario',
    description: 'Programas diseñados por médicos deportivos para neutralizar los efectos de estar 8 horas sentado: descompresión espinal, apertura torácica y activación de glúteos.',
    details: ['Protocolo Postural Anti-Pantalla de 15 minutos', 'Talleres prácticos de ergonomía para el puesto de trabajo', 'Sesiones individuales de corrección biomecánica']
  }
];

export const processSteps = [
  {
    number: '01',
    title: 'Visita & Diagnóstico',
    desc: 'Visitamos tu empresa o analizamos los planos de tu oficina. Estudiamos las necesidades de tu plantilla y evaluamos la distribución ideal.'
  },
  {
    number: '02',
    title: 'Diseño 3D a Medida',
    desc: 'Te presentamos una maqueta hiperrealista en 3D de cómo quedará la Room for Sport en tu espacio, con presupuesto cerrado sin sorpresas.'
  },
  {
    number: '03',
    title: 'Instalación en 14 Días',
    desc: 'Montaje limpio, insonorizado y sin interrupción de la jornada laboral. Entregamos la sala lista para ser usada con todo el material montado.'
  },
  {
    number: '04',
    title: 'Activación & Dinamización',
    desc: 'Día de puertas abiertas con nuestros coaches, talleres de iniciación, onboarding en la app y puesta en marcha de los retos en equipo.'
  }
];

export const faqList = [
  {
    q: '¿Qué espacio mínimo necesita nuestra empresa para implementar una Room for Sport?',
    a: 'Podemos crear una sala altamente efectiva desde tan solo 30 a 40 metros cuadrados (por ejemplo, una sala de reuniones en desuso o un despacho grande). Nuestro mobiliario modular y soportes de pared aprovechan el 100% de la superficie útil.'
  },
  {
    q: '¿Quién se hace responsable del mantenimiento y los seguros?',
    a: 'Room for Sport asume toda la operativa: revisión técnica periódica del equipamiento, sustitución inmediata de cualquier pieza desgastada y una póliza de responsabilidad civil específica para actividades deportivas corporativas.'
  },
  {
    q: '¿Y si muchos de nuestros empleados teletrabajan en modelo híbrido?',
    a: 'Nuestro programa combina la sala física con nuestra plataforma digital. Los días que teletrabajan pueden unirse a sesiones en streaming, pausas activas guiadas y retos grupales para mantener la cohesión del equipo sin importar dónde estén.'
  },
  {
    q: '¿Cómo se adaptan las sesiones a empleados de diferentes edades y niveles físicos?',
    a: 'Nuestros entrenadores son especialistas en acondicionamiento físico adaptativo. Cada sesión tiene 3 niveles de progresión (iniciación, intermedio y avanzado), y también disponemos de clases de movilidad suave para quienes nunca han hecho deporte.'
  },
  {
    q: '¿Cuál es el modelo de contratación?',
    a: 'Ofrecemos un modelo flexible de suscripción mensual como servicio (SaaS / Facilities), que incluye sala, material, profesores, software y mantenimiento sin necesidad de que la empresa realice una gran inversión inicial de capital (CAPEX).'
  }
];
