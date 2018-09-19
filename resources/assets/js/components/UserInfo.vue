<template>
  <section class="content">
    <h1>UserInfo</h1>
    <h3>user name:</h3>
    <p>{{ userName }}</p>
    <h3>ID:</h3>
    <p>{{ userId }}</p>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        userName: 'Steven Chou',
        userId: 9527,
      }
    }
  }
</script>