export default defineNuxtPlugin(async (nuxt) => {
  await document.fonts.ready;
});
