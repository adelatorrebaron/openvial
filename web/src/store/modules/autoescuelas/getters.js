
// Devuelve la autoescuela del State
const currentAutoescuela = (state) => {
      return state.autoescuela
}

// Devuelve un boolean indicando si existe la Autoescuela
const existAutoescuela = (state) => {
    if (state.autoescuela === null)
        return false;
    else
        return true;
}

export default {
    currentAutoescuela,
    existAutoescuela
}