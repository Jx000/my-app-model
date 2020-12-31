import {combineReducers} from 'redux'

import { LOGIN_SUCCESS } from './action-type'

const user = {
    phone: '',
    identityType: 1,
    sellerId: '',
    supplierId: '',
    token: '',
    id: ''
}

function userMsg(state = user, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, ...action.data}
        default:
            return state
    }
}


export default combineReducers({
    userMsg,
})