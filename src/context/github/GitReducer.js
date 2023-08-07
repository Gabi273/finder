const gitReducer = (state, action) => {
    switch(action.type){
        case 'GET_USERS':
            return{
                ...state,
                users:  action.payload,
                load: false
            }
        default: 
            return state
    }
}

export default gitReducer