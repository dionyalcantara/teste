<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-dark bg-dark">
        <RouterLink class="text-decoration-none text-white" to="/register">Register</RouterLink>
        <RouterLink class="text-decoration-none text-white" to="/login">Login</RouterLink>
        <RouterLink class="text-decoration-none text-white" to="/profile">Profile</RouterLink>
      </nav>
    </div>
  </header>
  <div class="wrapper text-black">
    <h1 class="text-center">Vue 3 + TypeScript</h1>
  </div>

  <RouterView />
</template>

<style scoped></style>
