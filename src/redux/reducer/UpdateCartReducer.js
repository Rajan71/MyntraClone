const initialState = {
    cartItems: '',
    image: '',
    deleteItem: ''
}

const UpdateCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Update Cart': {
            return { ...state, ...action.payload }
        }
        case 'Delete Cart': {
            console.log('stateeeee', state)
            return { ...state, ...action.payload }
        }
        default: return state;
    }

}

export default UpdateCartReducer;
