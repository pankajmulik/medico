const reducer = (state = 0, action) => {

    if (action.type === 'schedule') {
        return state + action.payload
    }
    else if (action.type === 'cancel') {
        return state - action.payload
    }
    else {
        return state
    }

}


export default reducer; 