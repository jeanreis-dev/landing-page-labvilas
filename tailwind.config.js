export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f5f3',
          100: '#c8e8e3',
          200: '#a4dad1',
          300: '#7fccbf',
          400: '#64c0b1',
          500: '#48887b',
          600: '#3d7468',
          700: '#326054',
          800: '#274c42',
          900: '#1c3830',
        },
        secondary: {
          50: '#e5f6fd',
          100: '#b8e7fa',
          200: '#8ad8f7',
          300: '#5cc9f4',
          400: '#33bef1',
          500: '#0098da',
          600: '#007bb3',
          700: '#005f8c',
          800: '#004465',
          900: '#00293e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Oxygen', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
