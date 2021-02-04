const isLoading = (state = true, action) => {
    switch (action.type) {
        case 'LOADING':
            return !state
        default:
            return state
    }
}

export default isLoading