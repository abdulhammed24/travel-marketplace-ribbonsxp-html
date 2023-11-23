/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./experiences/*.html", "./areas/*.html", "./brands/*.html"],
  theme: {
    extend: {
      colors: {
        jr_lightBlack: "#151515",
        jr_blue: "#00a09a",
        jr_grey: "#c2c2c2",
        jr_deepBlue: "#1b5755",
        jr_slateGray: "#708090",
        jr_neutral: "#f5f5f5",
        jr_green: "#00af27",
        jr_red: "#dc2626",
        jr_yellow: "#ffc107",
      },
      backgroundImage: {
        jr_auth:
          "url('https://images.unsplash.com/photo-1691607450669-3550c8fbd650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
      },
    },
  },
  plugins: [],
};
