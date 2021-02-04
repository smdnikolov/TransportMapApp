const map = (state =
    {
        center: [42.69181499481202, 23.351221656799318],
        zoom: 14
    },
    action) => {
    switch (action.type) {
        case 'GET_MAP':
            return action.payload
        default:
            return state
    }
}

export default map