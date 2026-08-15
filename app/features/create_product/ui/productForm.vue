<script setup lang="ts">
import { Input } from '~/shared/ui/Input';
import type { CreateProductPayload } from '../model/types';
import { Button } from '~/shared/ui/Button';
import useCreateProduct from '../model/useCreateProduct';

const { loading, error, create } = useCreateProduct()

const product = reactive<CreateProductPayload>({
    name: "",
    price: 0
})

async function handleSubmit() {

    await create(product)
    if (!error.value) {

        product.name = ""
        product.price = 0

    }
}

</script>

<template>
    <form @submit.prevent="handleSubmit">
        <Input type="text" placeholder="Product nomini kiriting" v-model="product.name" required />
        <Input type="number" placeholder="Narxi" v-model="product.price" required />
        <Button title="create" type="submit" :disabled="loading" :pending="loading" />
    </form>
</template>