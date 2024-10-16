// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],

  colorMode: {
    preference: "light",
  },

  app: {
    head: {
      title: "",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  compatibilityDate: "2024-10-16",
});
