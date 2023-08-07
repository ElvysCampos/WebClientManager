/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          400: "#ff577f",
          800: "#ff427f",
          900: "#59323f",
        },
        gray: {
          1000: "#121214",
          900: "#212529",
          800: "#343b41",
          500: "#868e96",
          400: "#f8f9fa",
          100: "#ffffff",
        },
        red: {
          500: "#e83f5b",
        },
        green: {
          500: "#3fe864",
          300: "#1daf",
          200: "#1daa",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
