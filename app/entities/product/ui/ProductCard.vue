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
        <div class="product_info">
            <p class="product_name">{{ product.name }}</p>
            <p class="product_price">{{ product.price }}</p>
        </div>

        <ClientOnly>
            <div class="cart_button" v-if="count === 0">
                <Button title="Savatga" @click="handleClick()" />
            </div>

            <div class="quantity_control" v-else>
                <Button title="-" class="quantity_button" @click="decrement()"/>

                <span class="quantity">
                    {{ count }}
                </span>

                <Button title="+" class="quantity_button" @click="increment()" />
            </div>

            <template #fallback>
                <div class="cart_button">
                    <Button title="Savatga" />
                </div>
            </template>
        </ClientOnly>
    </div>
</template>


<style scoped>
.product_cart {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 140px;
    padding: 18px;

    border: 1px solid #e5e7eb;
    border-radius: 14px;

    background: #ffffff;

    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.04);

    transition: 0.2s ease;
}

.product_cart:hover {
    transform: translateY(-2px);
    border-color: #d1d5db;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.product_info {
    margin-bottom: 20px;
}

.product_name {
    margin: 0 0 8px;

    color: #111827;
    font-size: 16px;
    font-weight: 600;
}

.product_price {
    margin: 0;

    color: #6b7280;
    font-size: 15px;
    font-weight: 500;
}

.cart_button {
    display: flex;
    justify-content: flex-end;
}

.quantity_control {
    display: inline-flex;
    align-items: center;
    align-self: flex-end;

    overflow: hidden;

    border: 1px solid #e5e7eb;
    border-radius: 8px;
}

.quantity_button {
    width: 34px;
    height: 34px;

    border: none;
    background: #f9fafb;

    color: #111827;
    font-size: 18px;

    cursor: pointer;

    transition: background 0.15s ease;
}

.quantity_button:hover {
    background: #f3f4f6;
}

.quantity {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 38px;
    height: 34px;

    color: #111827;
    font-size: 14px;
    font-weight: 600;
}
</style>