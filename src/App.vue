<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div class="min-h-screen bg-gray-100">
        <header class="p-8">
            <nav>
                <RouterLink to="/">Dashboard</RouterLink>
                <a href="#" class="ml-4 text-indigo-400">Logout</a>
            </nav>
        </header>
        <!--<main class="p-8 w-1/2"> w-1/2 - Use half of the window -->
        <main class="p-8">
            <RouterView />
        </main>
    </div>
</template>
