<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const number = ref<number | string>(1)

number.value = "test"

</script>

<style>
.layout-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-track-piece {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #94a3b8;
}
</style>