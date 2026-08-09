<script setup lang="ts">
//  components
import { Button } from '~/shared/ui/Button';
import { Input } from '~/shared/ui/Input';

// reactives
const email = ref<string>("")
const password = ref<string>("")

const handleClick = (event: Event) => {
    event.preventDefault()
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
</style>
