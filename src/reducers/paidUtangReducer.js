import types from '../store/action-types';

export const initialComplete = {
    completeList: []
}

export const paidUtangReducer = (state = initialComplete, action) => {
    switch(action.type) {
        case types.COMPLETE_UTANG:
            return {
                ...state,
                completeList: [...state.completeList, action.payload]
            };
        default:
            return state;
    }
}

export default paidUtangReducer; 