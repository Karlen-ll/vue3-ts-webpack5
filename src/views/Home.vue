<template>
  <div class="container container--center">
    <p class="message">Page "Home"</p>

    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'HomePage'
  })
</script>

<style lang="scss" scoped>
  .message {
    user-select: none;
  }
</style>
