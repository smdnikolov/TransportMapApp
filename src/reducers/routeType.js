const routeTypeReducer = (state = null, action) => {
    switch (action.type) {
        case 'AB':
            return 'AB'
        case 'BA':
            return 'BA'
        default:
            return state
    }
}

export default routeTypeReducer