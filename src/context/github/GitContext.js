
import { createContext, useReducer} from 'react'
import gitReducer from './GitReducer'

const GitContext = createContext()

const GIT_URL = process.env.REACT_APP_GIT_URL
const GIT_TOKEN = process.env.REACT_APP_GIT_TOKEN


export const GitProvider = ({children}) => {
    const iState = {
        users: [],
        load: true
    }

    const [state, dispatch] = useReducer(gitReducer, iState)

    const fetchU = async () => {
        const res = await fetch(`${GIT_URL}/users`, {
            headers: {
                Authorization: `token ${GIT_TOKEN}`
            }
        })

        const data = await res.json()

        dispatch({
            type: 'GET_USERS',
            payload: data
        })
    }

    return <GitContext.Provider value={{users: state.users, load: state.load, fetchU}}>
        {children}
    </GitContext.Provider>
}

export default GitContext