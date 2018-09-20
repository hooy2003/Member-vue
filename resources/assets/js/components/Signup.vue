
<template>
  <section class="login">
    <h1>SignUp Page</h1>
    <form @submit.prevent="checkForm"
          novalidate="true"
          >
      <div class="input__wrap">
        <!-- <label>信箱</label> -->
        <input type="email" 
               v-model="email.value"
               @focus="clearEmail($event)"
               @blur="check($event)"
               placeholder="信箱"
               >
        <p v-show="email.error"
           class="input__status--error js__input__status--error">{{email.errorMsg}}</p>
      </div>
      <!-- <div class="input__wrap">
        <input type="text" v-model="account" placeholder="帳號" required>
      </div> -->
      <div class="input__wrap">
        <input type="password"
               v-model="passWord.value"
               @focus="clearPassWord($event)"
               @blur="check($event)"
               placeholder="密碼"
               >
        <p v-show="passWord.error"
           class="input__status--error js__input__status--error">{{passWord.errorMsg}}</p>
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
import { checkInput } from '../utils/sign';
import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        inputHasError: false,
        errors: [],
        email: {
          value: '',
          error: false,
          errorMsg: '',
        },
        passWord: {
          value: '',
          error: false,
          errorMsg: '',
        },
      }
    },
    computed: {
      ...mapGetters([
        'errorState'
      ])
    },
    methods: {
      // **
      // * Can Use vee-validate!
      // *
      clearEmail(e) {
        this.email.error    = false;
        this.email.errorMsg = '';
      },
      clearPassWord(e) {
        this.passWord.error    = false;
        this.passWord.errorMsg = '';
      },
      check(e) {
        // checkInput => return [type, isError, errorMsg]
        let errorStaus = checkInput(e.target, e.target.value),
            type       = errorStaus[0],
            isError    = errorStaus[1],
            errorMsg   = errorStaus[2];

        if (type == 'email') {
          // 把'是否有錯誤'當作開關
          this.inputHasError = isError;
          this.email.error    = isError;

          // input有錯誤
          if (isError) {
            // 讓錯誤訊息出現errorMsg該出現的地方
            this.email.errorMsg = errorMsg;
          }
          // input正確
          else {
            this.email.errorMsg = '';
          }
        }
        if (type == 'password') {
          this.inputHasError = isError;
          this.passWord.error = isError;

          if (isError) {
            this.passWord.errorMsg = errorMsg;
          }
          else {
            this.passWord.errorMsg = '';
          }
        }
      },
      checkForm(e) {
        this.errors = [];
        // **
        // * 連線錯誤？
        // * 資料錯誤？ 帳號重複？
        // * 註冊成功，直接登入
        // *

        // input有錯誤
        if(this.inputHasError) {
          return;
        }
        if(!this.email.value) {
          // 計算是否有錯誤
          this.errors.push( this.errorState.emailempty );
          // 存在 Vuex sotre.app
          this.email.error    = true;
          this.email.errorMsg = this.errorState.emailempty;

        }
        if(!this.passWord.value) {
          this.errors.push( this.errorState.passwordempty );

          this.passWord.error    = true;
          this.passWord.errorMsg = this.errorState.passwordempty;
        }
        if (!this.errors.length) {
          alert('註冊成功');
          // ** 
          // * 後端API串接
          // *
          // fetch(apiUrl)
          // .then(res => res.json())
          // .then(res => {
          //   if (res.error) {
          //     this.errors.push(res.error);
          //   } else {
          //     alert('ok!');
          //   }
          // });
        }
        else {
          alert('註冊失敗');
        }
      }
    }
  }
</script>