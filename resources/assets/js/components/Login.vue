
<template>
  <section class="login">
    <h1>Login Page</h1>
    <form @submit.prevent="login"
          novalidate="true"
          >
      <div class="input__wrap">
        <input type="text"
               v-model="userName"
               placeholder="帳號"
               >
      </div>
      <div class="input__wrap">
        <!-- <label>Password</label> -->
        <input type="password"
               v-model="passWord"
               placeholder="密碼"
               >
      </div>
      <div class="form_buttonbar">
        <button type="submit"
                class="primary"
                >Log In</button>
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
      login (){
        const resp = { account: 'admin',
                       name: 'Tony',
                       phone: '25551234' };

        if( this.userName == 'admin' && this.passWord == '1234' ) {
          alert('登入成功');
          localStorage.setItem('token', 'ImLogin');

          this.$store.commit({
            type: 'setUserData',
            userData: resp,
          });
          this.$router.push('/');
        } else {
          alert('登入失敗');
        }
        // ** 
        // * 後端API串接
        // * 如果有其他錯誤訊息，可以由我這邊開一個位置，把store 裡的 state叫出來用
        // * 讓前端控制錯誤訊息
        // *
        // axios.post(apiUrl)
        // .then(res => res.json())
        // .then(res => {
        //   if (res.error) {
        //     this.errors.push(res.error);
        //   } else {
        //     alert('ok!');
        //   }
        // });
      }
    }
  }
</script>