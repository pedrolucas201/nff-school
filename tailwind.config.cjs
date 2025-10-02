module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        nasal: ['Nasalization', 'Montserrat', 'sans-serif'],
        mont: ['Montserrat', 'Poppins', 'sans-serif'],
      },
      colors: { brand1: '#ff6b2d', brand2: '#b91c1c' },
      keyframes: {
        'fade-in-up': { '0%': { opacity: '0', transform: 'translateY(8px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } }
      },
      animation: { 'fade-in-up': 'fade-in-up 500ms ease-out both' }
    },
  },
  plugins: [],
}
