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
  }

  return { login, error, loading, user };
}
