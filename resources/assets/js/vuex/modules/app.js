const state = {
    authUser: null,
    isLoading: false,
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
};

const getters = {
    authUser: state => state.authUser,
    isLoading: state => state.isLoading,
    errorState: state => state.errorState
};

const mutations = {
    authUser (state, user) {
    state.authUser = user;
    },
    isLoading (state) {
        state.isLoading = !state.isLoading
    }
};

export default {
    state,
    getters,
    mutations
}
  
  