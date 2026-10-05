/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Plus Jakarta Sans",
          "system-ui",
          "sans-serif"
        ],
      },
      colors: {
        titanium: {
          50: '#FBFBFD',
          100: '#F5F5F7',
          200: '#E8E8ED',
          300: '#D2D2D7',
          400: '#A1A1A6',
          500: '#86868B',
          600: '#6E6E73',
          700: '#424245',
          800: '#1D1D1F',
          900: '#000000',
        },
        sport: {
          blue: '#0071E3',
          cyan: '#06C755',
          emerald: '#10B981',
          coral: '#FF453A',
        }
      },
      boxShadow: {
        'apple-sm': '0 2px 8px -2px rgba(0, 0, 0, 0.04)',
        'apple-card': '0 20px 40px -15px rgba(0, 0, 0, 0.04)',
        'apple-hover': '0 30px 60px -12px rgba(0, 0, 0, 0.08)',
        'apple-float': '0 12px 32px rgba(0, 0, 0, 0.06)',
        'double-inner': 'inset 0 1px 2px rgba(255, 255, 255, 0.95), inset 0 -1px 2px rgba(0, 0, 0, 0.02)',
      },
      borderRadius: {
        'apple-outer': '2.25rem',
        'apple-inner': 'calc(2.25rem - 0.5rem)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
