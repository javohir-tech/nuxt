<script setup lang="ts">
import { LoginForm } from '~/features/auth';


</script>

<template>
    <div class="login-page">
        <section class="container">
            <LoginForm />
        </section>
    </div>
</template>

<style>
.login-page {
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background: #f8fafc;
}
</style>