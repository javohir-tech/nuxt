<template>
    <button
        class="app-button"
        :type="type"
        :disabled="disabled || pending"
        @click="handleClick"
    >
        {{ pending ? "Loading..." : title }}
    </button>
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

<style scoped>
.app-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 10px 18px;
    border: none;
    border-radius: 8px;

    background: #111827;
    color: #ffffff;

    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    cursor: pointer;

    transition:
        background 0.2s ease,
        transform 0.1s ease,
        opacity 0.2s ease;
}

.app-button:hover:not(:disabled) {
    background: #1f2937;
}

.app-button:active:not(:disabled) {
    transform: scale(0.97);
}

.app-button:disabled {
    opacity: 0.55;
    cursor: not-allowed;
}
</style>