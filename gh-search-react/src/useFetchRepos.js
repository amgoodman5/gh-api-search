import { useReducer, useEffect } from 'react';
import axios from 'axios'


const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

const BASE_URL = 'https://api.github.com/search/repositories?q=ticTacToe+language:react&sort=stars&order=desc'

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, repos: [] }
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, repos: action.payload.repos }
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, repos: action.payload.error }
        default:
            return state;
    }
}

export default function useFetchRepos(params, page) {
    const [state, dispatch] = useReducer(reducer, { repos: [], loading: true })

    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        dispatch({ type: ACTIONS.MAKE_REQUEST })
        axios.get(BASE_URL, {
            cancelToken: cancelToken.token,
            params: { markdown: true, page: page, ...params }
        }).then(res => {
            dispatch({ type: ACTIONS.GET_DATA, payload: { repos: res.data.items } })
        }).catch((e) => {
            dispatch({ type: ACTIONS.ERROR, payload: { error: e } })
        })

        return  () => {
            cancelToken.cancel()
        }
    }, [params, page])

    return state;
}