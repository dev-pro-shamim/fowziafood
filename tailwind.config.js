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
          DEFAULT: '#9E1B32', // Rich Vibrant Ruby Burgundy
          dark: '#7A0C22',
          deep: '#540817',
          light: '#C41E3A',
          accent: '#E11D48',
          soft: '#FFE4E6',
        },
        burgundy: {
          DEFAULT: '#9E1B32',
          dark: '#7A0C22',
          light: '#C41E3A',
          deep: '#540817',
        },
        gold: {
          DEFAULT: '#F59E0B', // Radiant Warm Gold
          light: '#FBBF24',
          dark: '#D97706',
          soft: '#FEF3C7',
          warm: '#FDE68A',
        },
        emerald: {
          brand: '#059669', // Fresh Agro & Nature Emerald
          light: '#10B981',
          dark: '#064E3B',
          soft: '#D1FAE5',
        },
        cream: {
          DEFAULT: '#FDFBF7',
          light: '#FFFFFF',
          dark: '#F8F5EE',
        },
        surface: {
          light: '#F8FAFC',
          card: '#FFFFFF',
          dark: '#0F172A',
        },
        darkText: '#0F172A',
        mutedText: '#475569',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -5px rgba(158, 27, 50, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'premium-hover': '0 20px 40px -10px rgba(158, 27, 50, 0.16), 0 8px 12px -3px rgba(0, 0, 0, 0.06)',
        'gold-glow': '0 0 30px -5px rgba(245, 158, 11, 0.4)',
        'ruby-glow': '0 0 35px -5px rgba(158, 27, 50, 0.5)',
        'emerald-glow': '0 0 30px -5px rgba(16, 185, 129, 0.4)',
        'card-elevated': '0 14px 28px rgba(0,0,0,0.06), 0 10px 10px rgba(0,0,0,0.04)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'crimson-ruby': 'linear-gradient(135deg, #7A0C22 0%, #9E1B32 50%, #C41E3A 100%)',
        'sapphire-blue': 'linear-gradient(135deg, #0F2B5C 0%, #1E40AF 60%, #2563EB 100%)',
        'royal-purple': 'linear-gradient(135deg, #4C1D95 0%, #6D28D9 60%, #9333EA 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #064E3B 0%, #059669 60%, #10B981 100%)',
        'burgundy-gold-gradient': 'linear-gradient(135deg, #9E1B32 0%, #D97706 100%)',
      }
    },
  },
  plugins: [],
}
