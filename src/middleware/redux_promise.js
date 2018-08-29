//ES6
// export default store => next => action => {
//     //anything we want to do inside of middleware, the code goes here
//     //function that returns a function that returns a function ... 3 layers deep

//     //if our action doesn't have a payload property or doesn't have a then method (not a promimse)
//     if(!action.payload || !action.payload.then){
//         return next(action)
//     }
//     action.payload.then(resp => {
//         //rebuild the action
//         const newAction = {
//             ...action,
//             payload: resp
//         }
//         //take this action and resend it through the middleware and to the reducer eventually
//         store.dispatch(newAction)
//     })
//     return action.payload;
// }

export default (store) => (next) => async (action) => {
    //anything we want to do inside of middleware, the code goes here
    //function that returns a function that returns a function ... 3 layers deep

    //if our action doesn't have a payload property or doesn't have a then method (not a promimse)
    if (!action.payload || !action.payload.then) {
        return next(action)
    }
    const resp = await action.payload;
    const newAction = {
        ...action,
        payload: resp
    }
    store.dispatch(newAction)
}
















//dispatch - taking an action and sending it to your reducer... sending it through all the middleware and then hits the reducer

//ES5
// function (store){
//     return function(next){
//         return function(action){
//             //Code goes here
//         }
//     }
// }