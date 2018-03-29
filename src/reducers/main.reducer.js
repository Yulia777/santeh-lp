import {ORDER_A_CALLBACK, ORDER_A_FREE_AUDIT} from '../actions/constants';

const initialState = {
    isCallBackNotification: false,
    isAuditNotification: false
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_A_CALLBACK:
            return Object.assign({}, state, {isCallBackNotification: action.payload});
        case ORDER_A_FREE_AUDIT:
            return Object.assign({}, state, {isAuditNotification: action.payload});
    }
    return state;
};