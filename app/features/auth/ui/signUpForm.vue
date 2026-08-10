<script setup lang="ts">
import { Input } from '~/shared/ui/Input';
import type { SignUpPayload } from '../model/types';
import { useAuth } from '../model/useAuth';
import Button from '~/shared/ui/Button/ui/Button.vue';

const { handleRegister, pending, error } = useAuth()

const signup_payload = reactive<SignUpPayload>({
    username: "",
    email: "",
    password: ""
})

const handleSubmit = () => {
    if (signup_payload.email && signup_payload.password && signup_payload.username) {
        handleRegister({ ...signup_payload })
    }
}
</script>

<template>
    <div v-if="error" class="error">
        {{ error }}
    </div>
    <form class="auth_form" @submit.prevent="handleSubmit">
        <Input v-model="signup_payload.username" type="text" placeholder="username kiriting" />
        <Input v-model="signup_payload.email" type="email" placeholder="email kiriting" />
        <Input v-model="signup_payload.password" type="password" placeholder="parol kirit dappa" />
        <Button type="submit" title="Sign Up" :pending="pending" />
    </form>
</template>

<style>
.error {
    padding: 10px;
    background-color: red;
    color: white;
    text-align: center;
    margin-bottom: 20px;
}
</style>