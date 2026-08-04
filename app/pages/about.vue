<template>
    about page
    <Button title="Batafsil" :disabled="false" @click="save" />
    <CommentList />
</template>

<script setup lang="ts">
import { Button } from '~/shared/ui/Button';
import { CommentList } from '~/entities/comment';

const save = () => {
    console.log("save")
}

</script>