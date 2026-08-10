export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("access_token");
  if (token.value && to.path.startsWith("/auth")) {
    return navigateTo("/");
  }
});
