<script setup lang="ts">
import { Button } from '~/shared/ui/Button';
import { ProductCardWithCart, useCart } from '~/features/cart-add-item';
import { useOrder } from '~/features/create_order';

const { create_order, loading } = useOrder()
const { cart_products } = useCart()

async function handleCreateOrder() {
    const carts = cart_products.value
    for (let i = 0; i < carts.length; i++) {
        if (carts[i]?.id && carts[i]?.count) {
            const cart = carts[i]
            if (!cart) continue
            const product_id = cart.id
            const quantity = cart.count
            try {
                await create_order({ product_id: product_id, quantity: quantity })
            } catch (error) {
                continue
            }
        }
    }
}

definePageMeta({
    layout: "user"
})
</script>

<template>
    <ClientOnly>

        <div v-if="cart_products.length > 0" class="cart-page">
            <div class="cart-header">
                <div>
                    <h1>Shopping Cart</h1>
                    <p>Tanlagan mahsulotlaringiz</p>
                </div>

                <span class="cart-count">
                    {{ cart_products.length }} ta mahsulot
                </span>
            </div>

            <div class="cart-list">
                <div v-for="product in cart_products" :key="product.id" class="cart-item">
                    <ProductCardWithCart :product="product" />

                </div>
                <div class="order-action">
                    <Button title="Buyurtma berish" :disabled="loading" :pending="loading" @click="handleCreateOrder" />
                </div>
            </div>
        </div>

        <div v-else class="empty-cart">
            <div class="empty-icon">
                🛒
            </div>

            <h1>Savat bo‘sh</h1>

            <p>
                Hozircha savatingizda hech qanday mahsulot yo‘q.
            </p>

            <NuxtLink to="/product" class="products-link">
                Mahsulotlarni ko‘rish
            </NuxtLink>
        </div>

        <template #fallback>
            <div class="loading">
                <div class="spinner"></div>
                <p>Yuklanmoqda...</p>
            </div>
        </template>

    </ClientOnly>
</template>

<style scoped>
.cart-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 10px 0 30px;
}

.cart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 24px;
    padding-bottom: 18px;

    border-bottom: 1px solid #e5e7eb;
}

.cart-header h1 {
    margin: 0 0 5px;

    color: #111827;

    font-size: 24px;
    font-weight: 700;
}

.cart-header p {
    margin: 0;

    color: #9ca3af;

    font-size: 14px;
}

.cart-count {
    padding: 7px 12px;

    border: 1px solid #e5e7eb;
    border-radius: 20px;

    background: #f9fafb;
    color: #374151;

    font-size: 12px;
    font-weight: 600;
}

.cart-list {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.cart-item {
    padding: 18px;

    border: 1px solid #e5e7eb;
    border-radius: 16px;

    background: #ffffff;

    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
}

.order-action {
    display: flex;
    justify-content: flex-end;

    margin-top: 14px;
    padding-top: 14px;

    border-top: 1px solid #f0f0f0;
}

.empty-cart {
    max-width: 500px;

    margin: 80px auto;
    padding: 40px 25px;

    text-align: center;

    border: 1px solid #e5e7eb;
    border-radius: 16px;

    background: #ffffff;

    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
}

.empty-icon {
    width: 60px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 auto 18px;

    border-radius: 50%;

    background: #f3f4f6;

    font-size: 26px;
}

.empty-cart h1 {
    margin: 0 0 8px;

    color: #111827;

    font-size: 22px;
    font-weight: 700;
}

.empty-cart p {
    margin: 0 0 22px;

    color: #9ca3af;

    font-size: 14px;
}

.products-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 10px 16px;

    border-radius: 8px;

    background: #111827;
    color: #ffffff;

    text-decoration: none;

    font-size: 14px;
    font-weight: 600;

    transition: background 0.2s ease;
}

.products-link:hover {
    background: #1f2937;
}

.loading {
    min-height: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #6b7280;
}

.loading p {
    margin-top: 12px;

    font-size: 14px;
}

.spinner {
    width: 34px;
    height: 34px;

    border: 3px solid #e5e7eb;
    border-top-color: #111827;

    border-radius: 50%;

    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@media (max-width: 600px) {
    .cart-page {
        padding: 10px 0 20px;
    }

    .cart-header {
        align-items: flex-start;
        gap: 12px;
    }

    .cart-header h1 {
        font-size: 21px;
    }

    .cart-count {
        white-space: nowrap;
    }

    .cart-item {
        padding: 14px;
    }

    .empty-cart {
        margin: 50px auto;
    }
}
</style>