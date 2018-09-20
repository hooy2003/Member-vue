
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
        <p class="input__status--error js__input__status--error email"></p>
        <!-- 改成，改變狀態的做法看看 -->
        <!-- <p v-show="false"
           class="input__status--error js__input__status--error">{{emailErrorMsg}}</p> -->
      </div>
      <!-- <div class="input__wrap">
        <input type="text" v-model="account" placeholder="帳號" required>
      </div> -->
      <div class="input__wrap">
        <input type="password"
               v-model="passWord"
               @focus="clear($event)"
               @blur="check($event)"
               placeholder="密碼"
               >
        <p class="input__status--error js__input__status--error pw"></p>   
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
import { checkInput, clearError, checkForm } from '../utils/sign';
import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        inputError: false,
        errors: [],
        email: '',
        emailError: false,
        emailErrorMsg: '',
        passWord: '',
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
      clear(e) {
        clearError(e.target);
      },
      check(e) {
        // checkInput => return [isError , errorMsg]
        let errorStaus = checkInput(e.target, e.target.value),
            isError    = errorStaus[0],
            errorMsg   = errorStaus[1];

        if (isError) {
          console.log('dddd', isError);
          console.log('dddd2', errorMsg);
          // 表單有錯誤
          this.inputError = isError;

          // 讓錯誤訊息出現errorMsg該出現的地方
          let node = e.target.nextElementSibling;
          let content = document.createTextNode(errorMsg);

          node.appendChild(content);
          // this.emailError    = isError;
          // this.emailErrorMsg = errorMsg;
        }else {
          // 表單正確
          this.inputError = isError;
          // this.emailError = isError;
          // this.emailErrorMsg = '';
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
        if(this.inputError) {
          return;
        }
        if(!this.email) {
          // 計算是否有錯誤
          this.errors.push( this.errorState.emailempty );

          // this.emailErrorMsg = true;
          $('.input__status--error.email').append( this.errorState.emailempty );
          $('.input__status--error.email').addClass('error__show');

        }
        if(!this.passWord) {
          this.errors.push( this.errorState.passwordempty );

          $('.input__status--error.pw').append( this.errorState.passwordempty );
          $('.input__status--error.pw').addClass('error__show');
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
          //     // 在成功的时候重定向到一个新的 URL 或做一些别的事情
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