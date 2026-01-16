/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}", // Note: I added 'src' since your imports show you use it
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          // This sets Manrope as the default "font-sans"
          sans: ["var(--font-manrope)", "sans-serif"],
          // This allows you to use "font-oswald" class if needed
          oswald: ["var(--font-oswald)", "sans-serif"],
        },
        colors: {
          'sq-primary': '#ffffff',
          'sq-secondary': '#06b6d4', 
        },
      },
    },
    plugins: [],
  };