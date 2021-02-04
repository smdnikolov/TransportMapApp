export const loading = () => {
    return {
        type: 'LOADING'
    }
}
export const getRoute = (payload) => {
    return {
        type: 'GET_ROUTE',
        payload
    }
}
export const getMap = (payload) => {
    return {
        type: 'GET_MAP',
        payload
    }
}
export const toggle = (payload) => {
    return {
        type: 'TOGGLE',
        payload
    }
}