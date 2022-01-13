<template>
  <div class="page-not-found">
    <strong class="not-found-title">{{ title }}</strong>

    <span class="not-found-text">Page not found!</span>
  </div>
</template>

<script>
  export default {
    name: 'NotFound',

    data() {
      return {
        title: '404'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-not-found {
    text-align: center;

    .not-found-title {
      font-size: 2rem;
    }

    .not-found-text {
      font-size: 1rem;
    }
  }
</style>
