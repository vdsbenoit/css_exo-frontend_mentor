import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: ["docs/content/**/*.md"],
  theme: {
    extend: {
      colors: {},
    },
    fontFamily: {
      sans: ["Arial", ...defaultTheme.fontFamily.sans],
    },
  },
};
