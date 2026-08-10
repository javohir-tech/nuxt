<script setup lang="ts">
// composables 
import { useAuth } from '../model/useAuth';
// types
import type { LoginPayload } from '../model/types';
// components
import { Input } from '~/shared/ui/Input';
import { Button } from '~/shared/ui/Button';

const { handleLogin, pending, error } = useAuth()

const login_payload = reactive<LoginPayload>({
    username_or_email: "",
    password: ""
})

const handleSubmit = () => {
    if (login_payload.password && login_payload.username_or_email) {
        handleLogin({ ...login_payload })
    }
}

</script>

<template>
    <div v-if="error" class="error">
        {{ error }}
    </div>
    <form @submit.prevent="handleSubmit" class="auth_form">
        <Input v-model="login_payload.username_or_email" type="text" placeholder="Email kiritng" />
        <Input v-model="login_payload.password" type="password" placeholder="password kiritng" />
        <Button type="submit" title="Login" :pending="pending" />
    </form>
</template>

<style>
.auth_form {
    width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    input {
        margin-bottom: 20px;
    }
}
</style>