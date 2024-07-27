/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          // TODO light
          DEFAULT: "#01860f",
          dark: "#02620c",
        },
        secondary: {
          // TODO light
          DEFAULT: "#ffb81b",
          dark: "#f7a300",
        },
        tertiary: {
          // TODO light
          DEFAULT: "#c0f0f4",
          dark: "#95dbe1",
        },
        quaternary: {
          DEFAULT: "#fff8e9",
        },
      },
      fontFamily: {
        display: ["Poppins"],
      },
    },
  },
  plugins: [],
};
