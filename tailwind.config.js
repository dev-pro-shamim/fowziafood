/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#8B1538',
          dark: '#641126',
          light: '#A52046',
          deep: '#4A0C1B',
        },
        gold: {
          DEFAULT: '#D6A743',
          light: '#E5C06E',
          dark: '#B08427',
          soft: '#F4E7CA',
        },
        cream: {
          DEFAULT: '#FFF9F0',
          light: '#FFFCF7',
          dark: '#F8F1E5',
        },
        surface: {
          light: '#F8F4EE',
          card: '#FFFFFF',
        },
        darkText: '#292323',
        mutedText: '#665C59',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -5px rgba(139, 21, 56, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'premium-hover': '0 20px 40px -10px rgba(139, 21, 56, 0.15), 0 8px 12px -3px rgba(0, 0, 0, 0.06)',
        'gold-glow': '0 0 25px -5px rgba(214, 167, 67, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'burgundy-gradient': 'linear-gradient(135deg, #8B1538 0%, #641126 100%)',
        'burgundy-gold-gradient': 'linear-gradient(135deg, #8B1538 0%, #B08427 100%)',
        'cream-gradient': 'linear-gradient(180deg, #FFF9F0 0%, #FFFFFF 100%)',
      }
    },
  },
  plugins: [],
}
