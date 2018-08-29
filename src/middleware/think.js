export default (store) => (next) => async (action) => {
    if(typeof action !== 'function'){
        return next(action)
    }
    return action(store.dispatch)
}