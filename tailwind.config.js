/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#fcd8da",
        custom_blue: "#37bff3",
      },
      screens: {
        "support-hover": { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
};
