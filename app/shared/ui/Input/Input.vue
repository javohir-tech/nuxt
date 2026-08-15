<template>
    <div class="input-wrapper">
        <input
            class="app-input"
            :type="props.type"
            :placeholder="props.placeholder"
            :disabled="props.disabled"
            :required="props.required"
            v-model="model"
        >
    </div>
</template>

<script setup lang="ts">
interface IProp {
    type: "email" | "text" | "password" | "number";
    placeholder: string;
    disabled?: boolean;
    required ?: boolean
}

const model = defineModel<string | number>()
const props = defineProps<IProp>()
</script>

<style scoped>
.input-wrapper {
    width: 100%;
}

.app-input {
    width: 100%;
    box-sizing: border-box;

    padding: 11px 13px;

    border: 1px solid #e5e7eb;
    border-radius: 8px;

    outline: none;

    background: #ffffff;
    color: #111827;

    font-size: 14px;
    font-family: inherit;

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        background 0.2s ease;
}

.app-input::placeholder {
    color: #9ca3af;
}

.app-input:hover:not(:disabled) {
    border-color: #d1d5db;
}

.app-input:focus {
    border-color: #111827;
    box-shadow: 0 0 0 3px rgba(17, 24, 39, 0.08);
}

.app-input:disabled {
    background: #f9fafb;
    color: #9ca3af;
    cursor: not-allowed;
}
</style>