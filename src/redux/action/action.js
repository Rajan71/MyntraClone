export const saveProfile = (obj) => {
    return dispatch => {
        dispatch({
            type: 'Profile',
            payload: obj
        },
        )
    }
}

export const saveMobileNum = (getNumber) => {
    return dispatch => {
        dispatch({
            type: 'Mobile Number',
            payload: getNumber
        })
    }
}

export const cartUpdate = (cart) => {
    return dispatch => {
        dispatch({
            type: 'Update Cart',
            payload: cart
        })
    }
}
export const removeUpdate = (bagDelete) => {
    return dispatch => {
        dispatch({
            type: 'Delete Cart',
            payload: bagDelete
        })
    }
}