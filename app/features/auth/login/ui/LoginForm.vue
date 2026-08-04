<script setup lang="ts">
//  components
import { Button } from '~/shared/ui/Button';
import { Input } from '~/shared/ui/Input';
//useLogin
import { useLogin } from "~/features/auth/login"

const { login, error } = useLogin()

// reactives
const email = ref<string>("")
const password = ref<string>("")

const handleClick = (event: Event) => {
    event.preventDefault()
    login(email.value, password.value)
}
</script>
<template>
    <div v-if="error">
        {{ error }}
    </div>
    <form @submit="handleClick" class="form">
        <Input v-model="email" type="email" placeholder="Emailingizni kiriting" />
        <Input v-model="password" type="password" placeholder="Parolingizni kiriting" />
        <Button type="submit" title="submit" :disabled="false" />
    </form>
</template>

<style>
@import url("../../../../shared/styles/reset.css");
</style>
