<template>
    <button :type="type" :disabled="disabled" @click="handleClick">{{ title }}</button>
</template>

<script setup lang="ts">
interface Props {
    title: string;
    type?: "submit" | "button";
    disabled?: boolean
}

const emit = defineEmits<{
    (e: "click" , event : MouseEvent): void
}>()

withDefaults(defineProps<Props>(), {
    type: "button",
    disabled: false
})

const handleClick = (event : MouseEvent) => {
    emit("click" , event)
}
</script>
