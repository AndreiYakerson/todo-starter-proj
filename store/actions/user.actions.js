import { showErrorMsg, showSuccessMsg } from "../../services/event-bus.service.js";
import { userService } from "../../services/user.service.js";
import { SET_USER, store } from "../store.js";

export function login(user) {
    userService.login(user)
        .then(loggedinUser => store.dispatch({ type: SET_USER, loggedinUser }))
        .then(() => { showSuccessMsg('Logged in successfully') })
        .catch((err) => { showErrorMsg('Oops try again') })
}
export function logout() {
    userService.logout()
        .then(() => store.dispatch({ type: SET_USER, loggedinUser: null }))
        .catch(() => showErrorMsg('OOPs try again'))
}

