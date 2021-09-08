import {useResource} from 'react-request-hook'

export function useAPILogin () {
    return useResource((username, password) => ({
        url: '/user/login', 
        method: 'post',
        data: {username, password}
    })) 
}

export function useAPIRegister() {
    return useResource((username, password) => ({
        url: '/user/register',
        method: 'post',
        data: {username, password}
    }))
}