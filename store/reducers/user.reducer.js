
//CMDS:
export const SET_USER = 'SET_USER'

const initialState = {
    loggedinUser: null,
    userBalance: 1000,
}

export function userReducer(state = initialState, cmd = {}) {
    switch (cmd.type) {
        case SET_USER:
            return { ...state, loggedinUser: cmd.loggedinUser }
            
        case SET_USER:
            return { ...state, userBalance: cmd.userBalance }

        default:
            return state;
    }

}

