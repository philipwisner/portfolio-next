import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      colors: {
      'cobalt': {
        50: '#eef7ff',
        100: '#daecff',
        200: '#bddfff',
        300: '#8fcdff',
        400: '#5bafff',
        500: '#358dfc',
        600: '#1e6ef2',
        700: '#1758de',
        800: '#1845ad',
        900: '#1a408e',
        950: '#152856',
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;


