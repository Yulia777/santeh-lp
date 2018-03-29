import {ORDER_A_CALLBACK, ORDER_A_FREE_AUDIT} from './constants';
import {postJson} from "../utils/ajax";

/*Actions*/

export const orderCallbakcSuccess = (response) => {
    return{
        type: ORDER_A_CALLBACK,
        payload: response
    }
};

export const orderFreeAuditSuccess = (response) => {
    return{
        type: ORDER_A_FREE_AUDIT,
        payload: response
    }
};

/*Async actions*/

export const sendOrderCallback = (formData) => {
    return dispatch => {
        return postJson('backend/send_lids.php', formData)
            .then(json => {
                dispatch(orderCallbakcSuccess(json.response));
            }).catch(error => console.log(error))
    }
};

export const sendOrderFreeAudit = (formData) => {
    return dispatch => {
        return postJson('backend/send_lids.php', formData)
            .then(json => {
                dispatch(orderFreeAuditSuccess(json.response));
            }).catch(error => console.log(error))
    }
};


