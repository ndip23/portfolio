import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          gray: "#F5F5F7",    // The Ceramic Background
          text: "#1D1D1F",    // Premium Dark Gray
          blue: "#0071E3",    // Apple Link Blue
          card: "rgba(255, 255, 255, 0.8)", // Glass effect
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;