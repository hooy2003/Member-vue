<template>
  <section class="header">
    <!-- <router-link to="/UserInfo">User Info</router-link> -->
    <router-link to="/login">登入</router-link>
    <router-link to="/signup">註冊</router-link>
    <a href="" @click.prevent="logout">Logout</a>
  </section>
</template>
<script>
  export default {
    methods: {
      logout(){
        localStorage.removeItem('token');
        this.$router.push('/login');
      }
    }
  }
</script>