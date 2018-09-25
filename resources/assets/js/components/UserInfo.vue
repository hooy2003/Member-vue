<template>
  <section class="content">
    <h1>UserInfo</h1>
    <form @submit.prevent="editUserData"
          novalidate="true">
      <div class="input__wrap">
        <label>聯絡E-mail</label>
        <input type="email"
              class=""
              v-model="email.value"
              @keyup="check($event)"
              placeholder="聯絡E-mail">
        <p v-show="email.errorMsg.length > 0"
              class="input__status--error js__input__status--error">{{name.errorMsg}}</p>
      </div>
      <div class="input__wrap">
        <label>名字</label>
        <input type="text"
              class=""
              v-model="name.value"
              @keyup="check($event)"
              placeholder="名字">
        <p v-show="name.errorMsg.length > 0"
              class="input__status--error js__input__status--error">{{name.errorMsg}}</p>
      </div>
      <div class="input__wrap">
        <label>電話號碼</label>
        <input type="tel"
              class=""
              v-model="tel.value"
              @keyup="check($event)"
              placeholder="電話號碼">
        <p v-show="tel.errorMsg.length > 0"
              class="input__status--error js__input__status--error">{{tel.errorMsg}}</p>
      </div>
      <div class="form_buttonbar">
        <button type="submit"
                class="primary"
                >Change</button>
      </div>
    </form>
  </section>
</template>
<script>
import { checkInput } from '../utils/form';
import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        email: {
          value: '',
          errorMsg: '',
        },
        name: {
          value: '',
          errorMsg: '',
        },
        tel: {
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
        'User'
      ]),
      // 可能要先 clone data 一份到這頁，然後用修改完，確認過完後端API
      // 再從API那邊接回新的data 去 render
      // userName () {
      //   return this.User.name;
      // },
      // userPhone () {
      //   return his.User.phone;
      // },
    },
    mounted() {
      this.email.value = this.User.email;
      this.name.value = this.User.name;
      this.tel.value  = this.User.phone;
    },
    methods: {
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
        if (type == 'tel') {
          this.tel.errorMsg = isError ? errorMsg : '';
        }
        if (type == 'text') {
          this.tel.errorMsg = isError ? errorMsg : '';
        }
      },
      editUserData (e) {
        console.log('go editUserData');
        let AllData = { email: this.email.value,
                        name: this.name.value,
                        tel: this.tel.value};
        console.log(AllData);
        // commit 全部的東西進去
        this.$store.commit({
          type: 'editUserData',
          value: AllData
        })
      },
    }
  }
</script>