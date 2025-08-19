import { showErrorMsg, showSuccessMsg } from "../../services/event-bus.service.js";
import { userService } from "../../services/user.service.js";
import { SET_BALANCE, SET_USER } from "../reducers/user.reducer.js";
import { store } from "../store.js";

export function login(user) {
    userService.login(user)
        .then(loggedinUser => {
            store.dispatch({ type: SET_USER, loggedinUser })
            store.dispatch({ type: SET_BALANCE, userBalance: loggedinUser.balance })
        })
        .then(() => { showSuccessMsg('Logged in successfully') })
        .catch((err) => { showErrorMsg('Oops try again') })
}
export function logout() {
    userService.logout()
        .then(() => {
            store.dispatch({ type: SET_USER, loggedinUser: null })
            store.dispatch({ type: SET_BALANCE, userBalance: null })
        })
        .catch(() => showErrorMsg('OOPs try again'))
}

export function signup(credentials) {
    userService.signup(credentials)
        .then(store.dispatch({ type: SET_USER, loggedinUser: credentials }))
        .then(() => {
            showSuccessMsg('Signed in successfully')
        })
        .catch((err) => { showErrorMsg('Oops try again') })
}

export function setBalance(balance) {
    userService.setUserBalance(balance)
        .then((user) => {
            console.log(user);

            store.dispatch({ type: SET_BALANCE, userBalance: user.balance })
        })
        .catch(() => showErrorMsg('OOPs try again'))

}



