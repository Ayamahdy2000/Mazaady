/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    container: {
      padding: {
        'DEFAULT': '1rem',
        'sm': '1rem',
        'lg': '0',
        'xl': '0',
        '2xl': '5rem',
      },
    },
  },

  plugins: [],
}