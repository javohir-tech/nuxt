<template>
    <button :type="type" :disabled="disabled" @click="handleClick">{{ pending ? "Loading..." : title }}</button>
</template>

<script setup lang="ts">
interface Props {
    title: string;
    type?: "submit" | "button";
    disabled?: boolean,
    pending?: boolean
}

const emit = defineEmits<{
    (e: "click", event: MouseEvent): void
}>()

withDefaults(defineProps<Props>(), {
    type: "button",
    disabled: false
})

const handleClick = (event: MouseEvent) => {
    emit("click", event)
}
</script>
