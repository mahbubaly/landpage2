/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1D6363",

          "secondary": "#002626",

          "accent": "#ef1ac8",

          "neutral": "#1B2227",

          "base-100": "#FFFFFF",

          "info": "#35A9D0",

          "success": "#14B892",

          "warning": "#AB6312",

          "error": "#F07586",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

