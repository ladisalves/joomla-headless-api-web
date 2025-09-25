/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        joomla: "#0060df",
      },
    },
  },
  plugins: [],
}
