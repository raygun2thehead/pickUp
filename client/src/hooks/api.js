import {useResource} from 'react-request-hook'

export function useAPILogin () {
    return useResource((username, password) => ({
        url: `/login/${encodeURI(username)}/${encodeURI(password)}`, 
        method: 'get'
    })) 
}

export function useAPIRegister() {
    return useResource((email, password) => ({
        url: '/user/register',
        method: 'post',
        data: {email, password}
    }))
}