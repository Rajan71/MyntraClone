const initialState = {
    iamgeUrl: ''
}

const ProfilePicReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Profile': {
            return { ...state, ...action.payload }
        }
        default: return state;
    }
}

export default ProfilePicReducer;
