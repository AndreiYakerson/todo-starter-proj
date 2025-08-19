import { userService } from "../../services/user.service.js";

//CMDS:
export const SET_USER = 'SET_USER'
export const SET_BALANCE = 'SET_BALANCE'

const initialState = {
    loggedinUser: null,
    userBalance: userService.getLoggedinUser()? userService.getLoggedinUser().balance : 0,
}

export function userReducer(state = initialState, cmd = {}) {
    switch (cmd.type) {
        case SET_USER:
            return { ...state, loggedinUser: cmd.loggedinUser }
            
        case SET_BALANCE:
            return { ...state, userBalance: cmd.userBalance }

        default:
            return state;
    }

}

