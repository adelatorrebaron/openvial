import User from '@/models/User'


const LOGIN = (state) => {
      state.user = User.from(localStorage.token)
}

const LOGOUT = (state) => {
      state.user = null
}

export default {
    LOGIN,
    LOGOUT
}