const initialState = {
    mobileNum: ''
}

const MobileNumReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Mobile Number': {
            return { ...state, ...action.payload }
        }
        default: return state;
    }
}

export default MobileNumReducer;
