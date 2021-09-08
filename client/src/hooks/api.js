import {useResource} from 'react-request-hook'

export function useAPILogin () {
    return useResource(({userObj}) => ({
        url: '/user/login', 
        method: 'get',
        data: {userObj}
    })) 
}

export function useAPIRegister() {
    return useResource((username, password) => ({
        url: '/user/register',
        method: 'post',
        data: {username, password}
    }))
}