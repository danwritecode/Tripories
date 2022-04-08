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
