<template>
    about page
    <Button title="Batafsil" :disabled="false" @click="save" />
</template>

<script setup lang="ts">
import { Button } from '~/shared/ui/Button';

const save = () => {
    console.log("save")
}

</script>