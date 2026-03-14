export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#8576bb', 
          400: '#64549b', 
          500: '#4e417a', 
        }
      }
    },
  },
  plugins: [],
}