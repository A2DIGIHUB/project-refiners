/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#b91c1c", // Red 700
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1f2937", // Gray 800
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#dc2626", // Red 600
          foreground: "#ffffff",
        },
        background: "#ffffff",
        surface: "#f9fafb", // Gray 50
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
