<template>
  <div class="flex flex-col min-h-screen font-noto-sans bg-primary">
    <HeaderComponent />
    <RouterView />
  </div>

</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
</script>
