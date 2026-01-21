export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
        keyframes: {
      gradientFlow: {
        "0%": { backgroundPosition: "0% 0%" },
        "25%": { backgroundPosition: "100% 0%" },
        "50%": { backgroundPosition: "100% 100%" },
        "75%": { backgroundPosition: "0% 100%" },
        "100%": { backgroundPosition: "0% 0%" },
      },
    },
    animation: {
      gradientFlow: "gradientFlow 8s ease-in-out infinite",
    },
      colors: {
        neon: "#00f5d4",
      },
    },
  },
  plugins: [],
};
