/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "creative-purple": "#5B46E8",
        "creative-pink": "#FF69B4",
        "creative-orange": "#F59E0B",
        "creative-blue": "#6366F1",
        "warm-white": "#fffbf3",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
