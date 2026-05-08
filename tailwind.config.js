/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 5s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'rotate-in': 'rotateInCenter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'swing': 'swing 1s ease-in-out',
        'wobble': 'wobble 0.8s ease-in-out',
        'heart-beat': 'heartBeat 1.3s ease-in-out infinite',
        'blink': 'blinkingCursor 1s infinite',
        'neon': 'neon-glow 2s ease-in-out infinite',
        'slide-in-top': 'slideInTop 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'slide-in-bottom': 'slideInBottom 0.8s ease-out',
        'fade-in-scale': 'fadeInScale 0.6s ease-out',
        'bounce-in': 'bounceIn 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' }, 
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(229, 115, 97, 0.3), 0 0 20px rgba(229, 115, 97, 0.1)' },
          '50%': { boxShadow: '0 0 20px rgba(229, 115, 97, 0.6), 0 0 40px rgba(229, 115, 97, 0.3)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        rotateInCenter: {
          'from': { opacity: '0', transform: 'rotate(-10deg) scale(0.8)' },
          'to': { opacity: '1', transform: 'rotate(0deg) scale(1)' },
        },
        swing: {
          '20%': { transform: 'rotate(15deg)' },
          '40%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '80%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        wobble: {
          '0%': { transform: 'translateX(0)' },
          '15%': { transform: 'translateX(-5px) rotate(-5deg)' },
          '30%': { transform: 'translateX(5px) rotate(3deg)' },
          '45%': { transform: 'translateX(-5px) rotate(-3deg)' },
          '60%': { transform: 'translateX(3px) rotate(2deg)' },
          '75%': { transform: 'translateX(-2px)' },
          '100%': { transform: 'translateX(0)' },
        },
        heartBeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        },
        blinkingCursor: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        slideInTop: {
          'from': { opacity: '0', transform: 'translateY(-30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          'from': { opacity: '0', transform: 'translateX(-50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInBottom: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        neonGlow: {
          '0%, 100%': { textShadow: '0 0 10px #e57361, 0 0 20px #e57361, 0 0 30px #e57361' },
          '50%': { textShadow: '0 0 20px #e57361, 0 0 30px #e57361, 0 0 40px #e57361, 0 0 55px #e57361' },
        },
      },
      colors: {
        brandBlack: '#111111',
        brandGray: '#F5F5F5',
        neon: {
          pink: '#e57361',
          orange: '#ff9980',
        },
      },
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui"],
        heading: ['"Poppins"', "sans-serif"],
        serif: ["'Playfair Display'", "serif"],
        jakarta: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      boxShadow: {
        'luxury': '0 30px 60px -12px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 20px rgba(229, 115, 97, 0.3)',
        'glow-lg': '0 0 40px rgba(229, 115, 97, 0.5)',
        'neon': '0 0 10px rgba(229, 115, 97, 0.5), inset 0 0 10px rgba(229, 115, 97, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'elastic': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}