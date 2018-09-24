
const currentAutoescuela = (state) => {
      return state.autoescuela
}

const existAutoescuela = (state) => {
    if (state.autoescuela === null || typeof state.autoescuela == "undefined")
        return false;
    else
        return true;
}

export default {
    currentAutoescuela,
    existAutoescuela
}