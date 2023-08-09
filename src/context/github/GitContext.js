
import { createContext, useReducer} from 'react'
import gitReducer from './GitReducer'

const GitContext = createContext()

const GIT_URL = process.env.REACT_APP_GIT_URL
const GIT_TOKEN = process.env.REACT_APP_GIT_TOKEN
console.log(`Token: ${GIT_TOKEN}`);


export const GitProvider = ({children}) => {
    const iState = {
        users: [],
        load: false,
        user: {},
        repos: []
    }

    const [state, dispatch] = useReducer(gitReducer, iState)

    const searchU = async (text) => {
        setLoading();
        const params = new URLSearchParams({
            q: text
        });
    
        console.log(`${GIT_URL}/search/users?${params}`); // Adaugă această linie
    
        const res = await fetch(`${GIT_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GIT_TOKEN}`
            }
        });
    
        const {items} = await res.json()
        console.log(items);

        
        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }

    const userU = async (login) => {
        setLoading();
        console.log("Fetching user with login:", login);
    
        const res = await fetch(`${GIT_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GIT_TOKEN}`
            }
        });

        if(res.status === 404){
            window.location = '/notfound'
        }else{
            const data = await res.json()

            dispatch({
                type: 'GET_USER',
                payload: data
            })
        }
        
        
    }

    const getU = async (login) => {
        setLoading();
    
        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10
        });
    
        const res = await fetch(`${GIT_URL}/users/${login}/repos?${params}`, {
            headers: {
                Authorization: `token ${GIT_TOKEN}`
            }
        });
    
        const data = await res.json()

        
        dispatch({
            type: 'GET_REPOS',
            payload: data
        })
    }

    const clearU = () => dispatch({
        type: 'CLEAR'
    })
    
    const setLoading = () => dispatch({type: 'SET_LOAD'})
    
    return <GitContext.Provider value={{users: state.users, load: state.load, searchU, clearU, user: state.user, userU, repos: state.repos, getU}}>
        {children}
    </GitContext.Provider>
}

export default GitContext