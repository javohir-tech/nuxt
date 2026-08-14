<script setup lang="ts">
import { ProductCard } from '~/entities/product';
import type { Product } from '~/entities/product';
import useCart from '../models/useCard';

const { count, cart_products, add_cart, increment, decrement } = useCart()

defineProps<{
    product: Product
}>()

const handleShow = () => {
    console.log(cart_products.value)
}

</script>

<template>
    <button @click="handleShow">salom</button>
    <ProductCard :product="product" :count="count" @add-to-cart="add_cart(product)" @increment="increment"
        @decrement="decrement" />
</template>