<script setup lang="ts">
import { Button } from '~/shared/ui/Button';
import { ProductCardWithCart, useCart } from '~/features/cart-add-item';
import { useOrder } from '~/features/create_order';

const { create_order, loading } = useOrder()
const { cart_products } = useCart()

definePageMeta({
    layout: "user"
})
</script>

<template>
    <ClientOnly>
        <div style="display: flex; flex-direction: column; gap: 20px;" v-if="cart_products.length > 0">
            <div v-for="product in cart_products" :key="product.id">
                <ProductCardWithCart :product="product" />
                <Button title="Buyurtma berish" :disabled="loading" :pending="loading"
                    @click="create_order({ product_id: product.id, quantity: product.count })" />
            </div>
        </div>
        <div style="text-align: center;" v-else>
            <h1>Siz hech nima buyurtma qilmagansiz!!!</h1>
            <NuxtLink to="/product">Productlarga</NuxtLink>
        </div>
        <template #fallback>
            <div>...yuklanmoqda</div>
        </template>
    </ClientOnly>
</template>
