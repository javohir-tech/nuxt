<script setup lang="ts">
import { Button } from '~/shared/ui/Button';

const add_cart = ref<boolean>(false)
const count = ref<number>(0)

interface Product {
    id: number;
    name: string;
    price: number;
    user_id: number;
}

const props = defineProps<Product>()

const handleCard = (id: number) => {
    add_cart.value = !add_cart.value
    if(add_cart.value){   
        console.log('savatga qoshildi')
    }else {
        console.log("savatdan oldindi")
    }
}
</script>

<template>
    <div class="product_cart">
        <p>{{ props.name }}</p>
        <p>{{ props.price }}</p>
        <div class="cart_button" v-if="!add_cart">
            <Button title="Savatga" type="button" @click="handleCard(props.id)" />
        </div>
        <div v-else class="cart_button">
            <Button  title="-"/>
            {{ count }}
            <Button  title="+"/>
        </div>
    </div>
</template>

<style scoped>
.product_cart{
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
}

.cart_button{
    text-align: end;
}
</style>