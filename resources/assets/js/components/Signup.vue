
<template>
  <section class="login">
    <h1>SignUp Page</h1>
    <form @submit.prevent="checkForm"
          novalidate="true"
          >
      <div class="input__wrap">
        <!-- <label>信箱</label> -->
        <input type="email" 
               v-model="email"
               @focus="clear($event)"
               @blur="check($event)"
               placeholder="信箱"
               >
        <p class="input__status--error">無效的信箱</p>   
      </div>
      <!-- <div class="input__wrap">
        <input type="text" v-model="account" placeholder="帳號" required>
        <p class="input__status--error">使用者帳號須在5-30個字元</p>
      </div> -->
      <div class="input__wrap">
        <input type="password"
               v-model="passWord"
               @focus="clear($event)"
               @blur="check($event)"
               placeholder="密碼"
               >
        <p class="input__status--error">密碼須為英文數字混合且6位數以上</p>   
      </div>
      <p v-if="errors.length">
        <ul>
          <li v-for="error in errors">{{error}}</li>
        </ul>
      </p>
      <div class="form_buttonbar">
        <button type="submit"
                class="primary"
                >Log In</button>
      </div>
    </form>
  </section>
</template>
<script>
import { checkInput, clearError, checkForm } from '../utils/sign';
  export default {
    data () {
      return {
        inputError: false,
        errors: [],
        email: '',
        passWord: '',
      }
    },
    methods: {
      clear(e) {
        clearError(e.target);
      },
      check(e) {
        this.inputError = checkInput(e.target, e.target.value);
      },
      checkForm(e) {
        this.errors = [];
        // 連線錯誤？
        // 資料錯誤？ 帳號重複？
        // 註冊成功，直接登入
        // input有錯誤
        if(this.inputError) {
          alert('input 有錯誤');
          return;
        }
        if(!this.email) {
          this.errors.push('信箱不得為空');
        }
        //信箱沒有值
        if(!this.passWord) {
          this.errors.push('密碼不得為空');
        }
        if (!this.errors.length) {
          alert('註冊成功');
          return true;
        }
        else {
          alert('註冊失敗');
        }
      }
    }
  }
</script>