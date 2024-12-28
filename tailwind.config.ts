import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        border: 'var(--border)',
        blue: '#3662E3',
      },
      keyframes: {
        loader: {
          from: {
            transform: 'translateX(-100%)',
            right: '100%'
          },
          to: {
            transform: 'translateX(200%)',
            right: '0'
          }
        },
        disappear: {
          from: {
            opacity: '100%'
          },
          to: {
            opacity: '0%'
          }
        }
      },
      animation: {
        loader: 'loader 3s ease-in-out infinite',
        disappear: 'disappear 4s ease-out'
      }
    },
  },
  plugins: [],
} satisfies Config;
