<template>
  <ul class="menu" role="menu">
    <li v-for="item in menu" :key="item.caption" class="menu__item" role="menuitem">
      <router-link :to="item.path">{{ item.caption }}</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'VMenu',

    data() {
      return {
        menu: [
          {
            path: '/',
            caption: 'Home'
          },
          {
            path: '/about',
            caption: 'About'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1em;

      &:last-child {
        margin-right: 0;
      }

      > a {
        color: $black-color;
        text-decoration: none;
        position: relative;

        &::after {
          content: '';
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background-color: currentColor;
          position: absolute;
          visibility: hidden;
          -webkit-transform: scaleX(0);
          transform: scaleX(0);
          -webkit-transition: all 0.3s ease-in-out 0s;
          transition: all 0.3s ease-in-out 0s;
        }

        &.router-link-exact-active {
          &::after {
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
          }
        }
      }
    }
  }
</style>
