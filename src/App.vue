<template>
  <div class="page">
    <Header title="Digital cloud" />

    <main class="wrapper">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: 'App',

    components: {
      Header
    }
  }
</script>

<style lang="scss">
  @import 'style/base.scss';

  .page {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    flex: 1 0;
    padding: 1em;
    box-sizing: border-box;
  }

  body {
    &:before {
      content: '#{$env}';
      right: 2rem;
      bottom: 0;
      color: #4b4b4b;
      background-color: rgba(50, 200, 230, 0.5);
      border-radius: 5px 5px 0 0;
      pointer-events: none;
      position: fixed;
      padding: 0 10px 2px;
    }
  }
</style>
