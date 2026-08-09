export const useApi = $fetch.create({
  baseURL: "http://127.0.0.1:8000",
  onRequest({ options }) {
    const token = useCookie("auth_token");
    if (token) {
      options.headers = new Headers(options.headers);
      options.headers.set("Authorization", `Bearer ${token.value}`);
    }
  },

  async onResponseError({ response }) {
    if (response.status === 401) {
      await navigateTo("/login");
    }
  },
});
