<script lang="ts" setup>
import { userAuthStore } from '@/stores/auth';
import { onMounted, ref } from 'vue';

const auth = userAuthStore();
const token = auth.token;
const data = ref('');

onMounted(async() => {
    const response = await fetch('http://localhost:8080/', {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    data.value = await response.text();
})

</script>

<template>
    <h1 class="text-3xl mb-8">Dashboard</h1>
    <p>{{data}}</p>
</template>

<style>

</style>