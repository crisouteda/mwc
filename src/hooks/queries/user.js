import { useMutation } from 'react-query';
import {login, register, dataResults} from '../../api/user'

export function useLogin({queryConfig={}}={}) {
    return useMutation(login, queryConfig)
}

export function useRegister({queryConfig={}}={}) {
    return useMutation(register, queryConfig)
}

export function useDataResults({queryConfig={}}={}) {
    return useMutation(dataResults, queryConfig)
}