<script setup lang="ts">
import { Button } from '~/shared/ui/Button';
import type { Product } from '../models/types';

const props = defineProps<{
    product: Product,
    count: number
}>()
const emit = defineEmits<{
    addToCart: [product: Product],
    increment: [productId: number],
    decrement: [productId: number],
}>()


const handleClick = () => {
    emit("addToCart", props.product)
}

const increment = () => {
    emit("increment", props.product.id)
}

const decrement = () => {
    emit("decrement", props.product.id)
}
</script>

<template>
    <div class="product_cart">
        <p>{{ product.name }}</p>
        <p>{{ product.price }}</p>
        <ClientOnly>
            <div style="text-align: end;" v-if="count === 0">
                <Button title="savatga" @click="handleClick()" />
            </div>
            <div style="text-align: end;" v-else>
                <button @click="decrement()">-</button>
                <span>{{ count }}</span>
                <button @click="increment()">+</button>
            </div>
            <template #fallback>
                <div style="text-align: end;">
                    <Button title="savatga"/>
                </div>
            </template>
        </ClientOnly>
    </div>
</template>

<style scoped>
.product_cart {
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
}

.cart_button {
    text-align: end;
}
</style>