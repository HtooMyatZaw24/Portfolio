import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#1b1b1b",
        yellow: {
          DEFAULT: "#ffde4a",
        },
      },
      colors: {
        primary: "#ffffff",
        yellow: {
          DEFAULT: "#ffde4a",
        },
        grey: {
          100: "#d3d3d3",
        },
      },
    },
  },
  plugins: [],
};
export default config;
