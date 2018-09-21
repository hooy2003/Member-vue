const state = {
    User: {
        account: "",
        name: "",
        phone: "",
        isLogin: false
    },
    errorState: {
        "more"  : "使用者帳號須在5-30個字元",
        "emailempty" : "信箱不得為空",
        "email" : "信箱已經被註冊過了",
        "phone" : "手機號碼已經被註冊過了",
        "passwordempty" : "密碼不得為空",
        "less"  : "密碼須為英文數字混合且6位數以上",
        "same"  : "兩次輸入的密碼不一樣",        
        "type"  : "格式不正確",
        "agree" : "請勾選同意",
        "what"  : "無效的資料",
        "code"  : "驗證碼錯誤"
    },
    isLoading: false,
};


const getters = {
    User: state => state.User,    
    errorState: state => state.errorState,
    isLoading: state => state.isLoading
};

const mutations = {
    setUserData(state, { userData }) {
        console.log(userData);
        state.User.account  = userData.account;
        state.User.name     = userData.name;
        state.User.phone    = userData.phone;
        state.User.isLogin  = true;
    },
    clearUserData(state) {
        console.log('clearUserData');
        state.User.account  = "";
        state.User.name     = "";
        state.User.phone    = "";
        state.User.isLogin  = false;
    },
    isLoading (state) {
        state.isLoading = !state.isLoading
    }
};

const actions = {
};

export default {
    state,
    getters,
    mutations
}
  
  