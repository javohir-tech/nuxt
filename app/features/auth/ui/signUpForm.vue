<script setup lang="ts">
import { Input } from '~/shared/ui/Input';
import type { SignUpPayload } from '../model/types';
import { useAuth } from '../model/useAuth';
import Button from '~/shared/ui/Button/ui/Button.vue';

const { signup } = useAuth()

const signup_payload = reactive<SignUpPayload>({
    username: "",
    email: "",
    password: ""
})

const handleSubmit = () => {
    if (signup_payload.email && signup_payload.password && signup_payload.username) {
        signup({ ...signup_payload })
    }
}
</script>

<template>
    <form class="auth_form" @submit.prevent="handleSubmit">
        <Input v-model="signup_payload.username" type="text" placeholder="username kiriting" />
        <Input v-model="signup_payload.email" type="email" placeholder="email kiriting" />
        <Input v-model="signup_payload.password" type="password" placeholder="parol kirit dappa" />
        <Button type="submit" title="Sign Up" />
    </form>
</template>