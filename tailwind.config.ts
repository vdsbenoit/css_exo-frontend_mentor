import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: ["docs/content/**/*.md"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      colors: {
        lime: "hsl(61, 70%, 52%)",
        // slate: {
        //   300: "hsl(203, 41%, 72%)",
        //   500: "hsl(200, 26%, 54%)",
        //   700: "hsl(200, 24%, 40%)",
        //   900: "hsl(202, 55%, 16%)",
        // },
      },
    },
    fontFamily: {
      sans: ["PlusJakartaSans", ...defaultTheme.fontFamily.sans],
    },
  },
};
