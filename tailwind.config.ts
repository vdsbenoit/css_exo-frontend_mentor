import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: ["docs/content/**/*.md"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      colors: {},
    },
    fontFamily: {
      sans: ["Arial", ...defaultTheme.fontFamily.sans],
    },
  },
};
