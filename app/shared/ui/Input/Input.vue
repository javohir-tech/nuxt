<template>
    <input :type="props.type" :placeholder="props.placeholder" :disabled="props.disabled" v-model="model">
</template>

<script setup lang="ts">
interface IProp {
    type: "email" | "text" | "password" | "number";
    placeholder: string;
    disabled?: boolean
}

const model = defineModel<string>()
const props = defineProps<IProp>()


</script>