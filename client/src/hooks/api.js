import {useResource} from 'react-request-hook'

export function useAPIRegister() {
    return useResource((email, password) => ({
        url: '/user/register',
        method: 'post',
        data: {email, password}
    }))
}