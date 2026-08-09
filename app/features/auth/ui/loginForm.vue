<script setup lang="ts">
import { useAuth } from '../model/useAuth'
import type { LoginPayload } from '../model/types'

import { Input } from '~/shared/ui/Input'
import { Button } from '~/shared/ui/Button'

const { login } = useAuth()

const login_payload = reactive<LoginPayload>({
  username_or_email: '',
  password: '',
})

const handleSubmit = () => {
  if (
    login_payload.username_or_email &&
    login_payload.password
  ) {
    login(login_payload)
  }
}
</script>

<template>
  <main class="login-page">
    <div class="login-card">
      <div class="login-header">
        <div class="logo">
          🔐
        </div>

        <h1>Welcome back</h1>

        <p>
          Accountingizga kirish uchun ma'lumotlaringizni kiriting
        </p>
      </div>

      <form
        class="login-form"
        @submit.prevent="handleSubmit"
      >
        <div class="form-field">
          <label for="email">
            Email
          </label>

          <Input
            id="email"
            v-model="login_payload.username_or_email"
            type="email"
            placeholder="example@gmail.com"
          />
        </div>

        <div class="form-field">
          <div class="password-label">
            <label for="password">
              Password
            </label>

            <!-- <NuxtLink to="/forgot-password">
              Forgot password?
            </NuxtLink> -->
          </div>

          <Input
            id="password"
            v-model="login_payload.password"
            type="password"
            placeholder="••••••••"
          />
        </div>

        <Button
          class="login-button"
          type="submit"
          title="Login"
        />
      </form>

      <div class="login-footer">
        <span>Accountingiz yo'qmi?</span>

        <!-- <NuxtLink to="/register">
          Register
        </NuxtLink> -->
      </div>
    </div>
  </main>
</template>

<style scoped>

.login-card {
  width: 100%;
  max-width: 420px;

  padding: 40px;

  background: #ffffff;

  border: 1px solid #e5e7eb;
  border-radius: 20px;

  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.06);
}
    
.login-header {
  text-align: center;
  margin-bottom: 32px;
}

.logo {
  width: 56px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto 18px;

  background: #eff6ff;

  border-radius: 14px;

  font-size: 26px;
}

.login-header h1 {
  margin: 0;

  color: #111827;

  font-size: 28px;
  font-weight: 700;
}

.login-header p {
  margin: 10px 0 0;

  color: #6b7280;

  font-size: 14px;
  line-height: 1.5;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-field label {
  color: #374151;

  font-size: 14px;
  font-weight: 500;
}

.password-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.password-label a {
  color: #2563eb;

  font-size: 13px;
  text-decoration: none;
}

.password-label a:hover {
  text-decoration: underline;
}

.login-button {
  width: 100%;

  margin-top: 4px;
}

.login-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  margin-top: 28px;

  color: #6b7280;

  font-size: 14px;
}

.login-footer a {
  color: #2563eb;

  font-weight: 600;

  text-decoration: none;
}

.login-footer a:hover {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .login-page {
    padding: 16px;
  }

  .login-card {
    padding: 30px 22px;
    border-radius: 16px;
  }

  .login-header h1 {
    font-size: 24px;
  }
}
</style>
