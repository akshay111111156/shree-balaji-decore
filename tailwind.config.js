/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",   // ✅ important for arbitrary values
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // if you're using Next.js app router
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
