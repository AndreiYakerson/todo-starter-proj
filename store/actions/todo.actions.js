import { showErrorMsg } from "../../services/event-bus.service.js";
import { todoService } from "../../services/todo.service.js";


import { SET_TODOS, store } from "../store.js";

export function loadTodos(filterBy) {
    return todoService.query(filterBy)
        .then(todos => store.dispatch({ type: SET_TODOS, todos }))
        .catch(err => {
            console.error('err:', err)
            showErrorMsg('Cannot load todos')
        })

}