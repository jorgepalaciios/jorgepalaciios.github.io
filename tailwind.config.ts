import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['class'],
  theme: {
    
    extend: {
      backgroundColor: {
        light: '#f7f7f7', // Light mode background color
        dark: '#222222', // Dark mode background color
      },
      textColor: {
        light: '#333333', // Light mode text color
        dark: '#ffffff', // Dark mode text color
      },
    },
  },
  plugins: [],
};
export default config;
