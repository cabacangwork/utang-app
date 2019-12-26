import types from '../store/action-types';
import {initialUtang} from '../data/initialUtang'

const utangReducer = (state = initialUtang, action) => {
    switch(action.type) {
        case types.ADD_UTANG:
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        case types.DELETE_UTANG:
            return {
                ...state,
                list: state.list.filter(utang => utang.id !== action.payload)
            };
        case types.TOGGLE_EDIT:
            return {
                ...state,
                list: state.list.map(utang =>
                    utang.id === action.payload
                    ? { ...utang, editing: !utang.editing }
                    : utang
                )
            };
        case types.EDIT_DETAILS:
            return {
                ...state,
                list: state.list.map(utang => {
                    if(utang.id === action.payload.id) {
                        return {
                            ...utang,
                            title: action.payload.newTitle,
                            description: action.payload.newDescription,
                            popUp: !utang.popUp
                        }
                    }
                    else return utang;
                })
            }
        case types.TOGGLE_PAYMENT:
            return {
                ...state,
                list: state.list.map(utang =>
                    utang.id === action.payload
                    ? { ...utang, addPayment: !utang.addPayment }
                    : utang
                )
            };
        case types.ADD_PAYMENT:
            return {
                ...state,
                list: state.list.map(utang => {
                    if(utang.id === action.payload.id) {
                        return {
                            ...utang,
                            remainingBal: utang.remainingBal - action.payload.paymentAmount,
                            addPayment: !utang.addPayment,
                            paymentList: [
                                ...utang.paymentList,
                                {
                                    paymentId: action.payload.paymentId,
                                    paymentAmount: action.payload.paymentAmount,
                                    paymentNote: action.payload.paymentNote,
                                    paymentDate: action.payload.paymentDate
                                }
                            ]
                        }
                    }
                    else return utang;
                })
            }
        case types.CLOSE_POPUP:
            return {
                ...state,
                list: state.list.map(utang =>
                    utang.id === action.payload
                    ? { ...utang, 
                        popUp: !utang.popUp,
                        editing: false,
                        addPayment: false
                     }
                    : utang
                )
            };
        default:
            return state;
    }
}

export default utangReducer; 