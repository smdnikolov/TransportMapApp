const toggler = (state = 'map', action) => {
    switch (action.type) {
        case 'TOGGLE':
            return action.payload
        default:
            return state
    }
}

export default toggler