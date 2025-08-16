import { showErrorMsg, showSuccessMsg } from "../../services/event-bus.service.js";
import { todoService } from "../../services/todo.service.js";


import { REMOVE_TODOS, SET_TODOS, store } from "../store.js";

export function loadTodos(filterBy) {
    return todoService.query(filterBy)
        .then(todos => store.dispatch({ type: SET_TODOS, todos }))
        .catch(err => {
            console.error('err:', err)
            showErrorMsg('Cannot load todos')
        })

}

export function removeTodo(todoId) {
    todoService.remove(todoId)
        .then(() => {
            store.dispatch({ type: REMOVE_TODOS, todoId })
            showSuccessMsg(`Todo removed`)
        })
        .catch(err => {
            console.error('err:', err)
            showErrorMsg('Cannot remove todo ' + todoId)
        })
}