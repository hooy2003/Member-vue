<template>
  <section class="content">
    <h1>UserInfo</h1>
    <h3>user account:</h3>
    <p>{{ userAccount }}</p>
    <h3>user name:</h3>
    <p>{{ userName }}</p>
    <h3>user phone:</h3>
    <p>{{ userPhone }}</p>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'User'
      ]),
      userAccount () {
        return this.User.account;
      },
      userName () {
        return this.User.name;
      },
      userPhone () {
        return this.User.phone;
      },
    }
  }
</script>