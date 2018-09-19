<template>
  <section>
    <nav-w ref="nav"></nav-w>
    <router-view name="header"></router-view>
    <router-view></router-view>
  </section>
</template>

<script>
  export default {
    name: 'app',
    components: {
      NavW: require('./components/Nav'),
    }
  }
</script>