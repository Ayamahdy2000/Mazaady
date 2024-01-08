// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/main.css", "~/assets/styles/main.scss"],
  ssr: false,
  app: {
    head: {
      title: "Mazaady",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
      meta: [{ name: "description", content: "Mazaady" }],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
