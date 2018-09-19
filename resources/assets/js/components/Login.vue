
<template>
  <section class="login">
    <h1>Login Page</h1>
    <form @submit.prevent="login">
      <label>User Name</label>
      <input type="text" v-model="userName" required>
      <!-- required 提交前必要的項目 -->
      <br>
      <label>Password</label>
      <input type="password" v-model="passWord" required>
      <br>
      <div class="form_buttonbar">
        <button class="primary" type="submit">Log In</button>
      </div>
    </form>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        userName: '',
        passWord: '',
      }
    },
    methods: {
      login(){
        if( this.userName == 'admin' && this.passWord == '1234' ) {
          alert('login sucess');
          
          localStorage.setItem('token', 'ImLogin');
          this.$router.push('/');
        } else {
          alert('login failed');
        }
      }
    }
  }
</script>