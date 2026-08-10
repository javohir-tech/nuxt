// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@vueuse/nuxt"],
  css: ["~/shared/styles/reset.css", "~/shared/styles/global.css"],
  routeRules: {
    // "/about": { prerender: true }, //  ssg
    // "/": { swr: 3600 }, // isr
  },
});
