
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
        <p v-show="email.errorMsg.length > 0"
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
        <p v-show="passWord.errorMsg.length > 0"
           class="input__status--error js__input__status--error">{{passWord.errorMsg}}</p>
      </div>
      <div class="form_buttonbar">
        <button type="submit"
                class="primary"
                >Sign Up</button>
      </div>
    </form>
  </section>
</template>
<script>
import { checkInput } from '../utils/form';
import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        inputHasError: false,
        errors: [],
        email: {
          value: '',
          errorMsg: '',
        },
        passWord: {
          value: '',
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
        this.email.errorMsg = '';
      },
      clearPassWord(e) {
        this.passWord.errorMsg = '';
      },
      check(e) {
        // checkInput will return [type, isError, errorMsg]
        let errorStaus = checkInput(e.target, e.target.value),
            type       = errorStaus[0],
            isError    = errorStaus[1],
            errorMsg   = errorStaus[2];

        // 把'是否有錯誤'當作開關
        this.inputHasError  = isError;

        if (type == 'email') {
          this.email.errorMsg = isError ? errorMsg : '';
        }
        if (type == 'password') {
          this.passWord.errorMsg = isError ? errorMsg : '';
        }
      },
      checkForm(e) {
        this.errors = [];
        // **
        // * 連線錯誤？
        // * 資料錯誤？ 帳號重複？
        // * 註冊成功，直接登入
        // *

        // 如果任一input有錯誤
        if(this.inputHasError) {
          return;
        }
        if(!this.email.value) {
          // 計算是否有錯誤
          // errorState 存在 Vuex sotre.app
          this.errors.push( this.errorState.emailempty );
          
          this.email.errorMsg = this.errorState.emailempty;
        }
        if(!this.passWord.value) {
          this.errors.push( this.errorState.passwordempty );

          this.passWord.errorMsg = this.errorState.passwordempty;
        }
        if (!this.errors.length) {
          alert('註冊成功');
          // ** 
          // * 後端API串接
          // * 如果有其他錯誤訊息，可以由我這邊開一個位置，把store 裡的 state叫出來用
          // * 讓前端控制錯誤訊息
          // *
          // axios.get(apiUrl)
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