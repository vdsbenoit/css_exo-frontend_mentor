import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: ["docs/content/**/*.md"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    darkMode: false,
    extend: {
      colors: {
        "lime-light": "hsl(61, 70%, 65%)",
        lime: "hsl(61, 70%, 52%)",
        slate: {
          50: "hsl(204, 60%, 95%)",
          100: "hsl(203, 52%, 88%)",
          200: "hsl(203, 45%, 79%)",
          300: "hsl(203, 41%, 72%)", // Provided
          400: "hsl(201, 34%, 63%)",
          500: "hsl(200, 26%, 54%)", // Provided
          600: "hsl(200, 25%, 48%)",
          700: "hsl(200, 24%, 40%)", // Provided
          800: "hsl(201, 32%, 30%)",
          900: "hsl(202, 55%, 16%)", // Provided
          950: "hsl(202, 60%, 10%)",
        },
      },
    },
    fontFamily: {
      sans: ["PlusJakartaSans", ...defaultTheme.fontFamily.sans],
    },
  },
};
