import types from './action-types';

export const addUtang = (newUtang) => {
    return {
        type: types.ADD_UTANG,
        payload: newUtang
    }
}

export const deleteUtang = (id) => {
    return {
        type: types.DELETE_UTANG,
        payload: id
    }
}

export const toggleEdit = (id) => {
    return {
        type: types.TOGGLE_EDIT,
        payload: id
    }
}

export const editDetails = (newUtang) => {
    return {
        type: types.EDIT_DETAILS,
        payload: newUtang
    }
}

export const togglePayment = (id) => {
    return {
        type: types.TOGGLE_PAYMENT,
        payload: id
    }
}

export const addPayment = (newUtang) => {
    return {
        type: types.ADD_PAYMENT,
        payload: newUtang
    }
}

export const completeUtang = (paid) => {
    return {
        type: types.COMPLETE_UTANG,
        payload: paid
    }
}

export const closePopUp = (id) => {
    return {
        type: types.CLOSE_POPUP,
        payload: id
    }
}