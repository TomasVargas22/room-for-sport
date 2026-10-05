# Room for Sport ⚡

Plataforma web interactiva para gestión deportiva, acondicionamiento físico y bienestar corporativo. Diseñada para conectar a atletas individuales y empresas con rutinas de entrenamiento de alto rendimiento, simulador interactivo de salas modulares y métricas de salud laboral.

---

## 🚀 Características Principales

* **Plataforma Deportiva Integral**:
  * Rutinas estructuradas y biblioteca de drills para disciplinas individuales y en equipo.
  * Módulos de entrenamiento por objetivos (fuerza, resistencia, agilidad y recuperación activa).
* **Bienestar Corporativo & In-Office**:
  * Solución orientada a erradicar el sedentarismo en entornos de oficina y sedes empresariales.
  * Telemetría de salud laboral, torneos inter-empresa y planes de prevención de riesgos (PRL).
* **Herramientas Interactivas en Tiempo Real**:
  * **Simulador de Salas Modulares**: Configuración interactiva de distribución, tipo de equipamiento y capacidad de atletas.
  * **Calculadora de Retorno de Inversión (ROI)**: Estimación dinámica de ahorro por reducción de absentismo y estrés laboral.
  * **Modal de Reserva & Membresías**: Flujo fluido de contacto y cotización para atletas y empresas.
* **Experiencia de Usuario Avanzada**:
  * **Soporte Bilingüe Completo (ES / EN)**: Diccionario reactivo para alternar idioma en toda la interfaz sin recargar.
  * **Dark / Light Mode**: Sistema de temas con paleta Titanium y Sport Coral (`#FF4900`).
  * **Micro-interacciones y Animaciones**: Transiciones fluidas con Framer Motion, diseño bento grid y diseño 100% adaptativo (Mobile-First).

---

## 🛠️ Stack Tecnológico

* **Frontend**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
* **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
* **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
* **Iconografía**: [Lucide React](https://lucide.dev/)
* **Utilidades**: `clsx`, `tailwind-merge`

---

## 📁 Estructura del Código

```
├── public/                  # Favicons, assets estáticos y videos
├── src/
│   ├── components/          # Componentes modulares de interfaz
│   │   ├── RoomForSportDribbble.jsx  # Plataforma interactiva principal
│   │   ├── BentoGrid.jsx             # Cuadrícula bento de características
│   │   ├── BookingModal.jsx          # Modal de reserva y cotizaciones
│   │   ├── InteractiveRoomCustomizer.jsx # Simulador de salas
│   │   ├── RoiCalculator.jsx         # Calculadora de ROI corporativo
│   │   └── ...
│   ├── data/                # Datos estáticos y diccionarios
│   ├── App.jsx              # Componente raíz
│   ├── main.jsx             # Punto de entrada de React
│   └── index.css            # Estilos globales y tokens
├── index.html               # Plantilla HTML con tipografía Plus Jakarta Sans
├── tailwind.config.js       # Tokens de diseño, sombras y paleta Titanium
└── vite.config.js           # Configuración de compilación con Vite
```

---

## 💻 Instalación y Uso Local

Requisitos previos: tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).

1. Clona el repositorio:
   ```bash
   git clone https://github.com/TomasVargas22/room-for-sport.git
   cd room-for-sport
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo local:
   ```bash
   npm run dev
   ```

4. Compila para producción:
   ```bash
   npm run build
   ```

5. Previsualiza la build de producción:
   ```bash
   npm run preview
   ```

---

## 👤 Desarrollado por

**Tomás Vargas (Kaxfv)**  
*Desarrollador Web · San José, Costa Rica*
