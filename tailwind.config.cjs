module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          50: '#e8f7ff',
          100: '#cbeefe',
          400: '#38bdf8',
          500: '#1ea6ff',
          600: '#1590e6'
        },
        panel: '#0b1220'
      },
      boxShadow: {
        'glow': '0 6px 24px rgba(30,166,255,0.09)'
      }
    }
  },
  plugins: []
}
