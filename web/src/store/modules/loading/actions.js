

const showLoading = ( {commit}) => {
    
    commit('SHOW_LOADING', true)
}


const hideLoading = ( {commit}) => {
    
    commit('HIDE_LOADING', false)
}



export default {
    showLoading,
    hideLoading
}