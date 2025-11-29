/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#2ee871',
        'lime-green': '#2ee871',
        'soft-pink': '#FF6B9D',
        'coral': '#FF7F7F',
        'teal-dark': '#008080',
      },
      fontFamily: {
        'impact': ['Impact', 'Arial Black', 'sans-serif'],
      },
      animation: {
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeInLeft': 'fadeInLeft 0.8s ease-out',
        'fadeInRight': 'fadeInRight 0.8s ease-out',
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'bounceIn': 'bounceIn 0.6s ease-out',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '10%, 30%': { transform: 'scale(1.05)' },
          '20%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

