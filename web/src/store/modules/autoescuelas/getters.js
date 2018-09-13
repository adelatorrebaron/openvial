
const currentUser = (state) => {
      return state.user
}

const isUserLogged = (state) => {
    if (state.user === null)
        return false;
    else
        return true;
}

export default {
    currentUser,
    isUserLogged
}