<script setup lang="ts">
import { Button } from '~/shared/ui/Button';
import { Input } from '~/shared/ui/Input';

const email = ref<string>("")
const password = ref<string>("")

const handleClick = (event: Event) => {
    event.preventDefault()
    console.log("salom")
    console.log(email.value)
    console.log(password.value)
}
</script>
<template>
    <form @submit="handleClick" class="form">
        <Input v-model="email" type="email" placeholder="Emailingizni kiriting" />
        <Input v-model="password" type="password" placeholder="Parolingizni kiriting" />
        <Button type="submit" title="submit" :disabled="false" />
    </form>
</template>

<style>
@import url("../../../../shared/styles/reset.css");
</style>
