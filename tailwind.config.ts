import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cover-1': "url('/images/cover-1.jpg')",
        'cover': "url('/images/cover-1.jpg')",
        'hero-bg': "url('/images/hero-bg.jpg')",
        'hero-lg-bg': "url('/images/hero-lg-bg.jpg')",
      },
      backgroundSize: {
        'cover': 'cover',
      },
      backgroundPosition: {
        'center': 'center',
      },
      fontFamily: {
        edensor: ["var(--font-edensor)"],
        belgiano: ["var(--font-belgiano)"],
        oldscientific : ["var(--font-oldscientific)"],
        abigail : ["var(--font-abigail)"],
      }
    },
  },
  plugins: [],
};
export default config;
