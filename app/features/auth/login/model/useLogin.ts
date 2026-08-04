// requests
import { loginRequest } from "~/shared/api";
import { getApiErrorMessage } from "~/shared/api";

// validators
import { validateEmail, validatePassword } from "~/shared/lib";

// types
import type { IUser } from "~/entities/user";

export default function useLogin() {
  const error = ref<string | null>(null);
  const user = ref<IUser | null>(null);
  const loading = ref<boolean>(false);

  async function login(email: string, password: string) {
    error.value = null;

    //validatesiya
    const emailError = validateEmail(email);
    if (emailError) {
      error.value = emailError;
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      error.value = passwordError;
      return;
    }

    // api layer
    loading.value = true;
    try {
      const response = await loginRequest(email, password);
      user.value = response.user;
      //   navigateTo("/");
    } catch (err) {
      error.value = getApiErrorMessage(err);
    } finally {
      loading.value = false;
    }
  }

  return { login, error, loading, user };
}
