const gitReducer = (state, action) => {
    console.log("Action:", action);
    console.log("Current state:", state);
    switch(action.type){
        case 'GET_USERS':
            return{
                ...state,
                users:  action.payload,
                load: false
            }
        case 'GET_USER':
            return{
                ...state,
                user:  action.payload,
                load: false
            }
        case 'GET_REPOS':
            return{
                ...state,
                repos:  action.payload,
                load: false
            }
        case 'SET_LOAD':
            return {
                ...state,
                load: true
            }
        case 'CLEAR':
            return {
                ...state,
                users: [],
                load: false
            }
        default: 
            return state
    }
}

export default gitReducer