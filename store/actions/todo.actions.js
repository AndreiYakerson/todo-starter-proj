import { showErrorMsg, showSuccessMsg } from "../../services/event-bus.service.js";
import { todoService } from "../../services/todo.service.js";
import { ADD_TODO, REMOVE_TODOS, SET_DONE_PERCENT, SET_TODOS, UPDATE_TODO } from "../reducers/todo.reducer.js";
import { store } from "../store.js";


export function loadTodos(filterBy) {
    return todoService.query(filterBy)
        .then(todos => store.dispatch({ type: SET_TODOS, todos }))
        .catch(err => {
            console.error('err:', err)
            showErrorMsg('Cannot load todos')
        })

}

export function removeTodo(todoId) {
    return todoService.remove(todoId)
        .then(() => {
            store.dispatch({ type: REMOVE_TODOS, todoId })
            showSuccessMsg(`Todo removed`)
        })
        .catch(err => {
            console.error('err:', err)
            showErrorMsg('Cannot remove todo ' + todoId)
        })
}

export function saveTodo(todoToSave) {
    const cmdType = todoToSave._id ? UPDATE_TODO : ADD_TODO
    
    return todoService.save(todoToSave)
        .then((savedTodo) => {
            
            store.dispatch({ type: cmdType, savedTodo })
            showSuccessMsg(`Todo is ${(savedTodo.isDone) ? 'done' : 'back on your list'}`)
        })
        .catch(err => {
            console.log('err:', err)
            showErrorMsg('Cannot toggle todo ')
        })
}

export function updateDonePercent() {
    return todoService.getDonePercent()
        .then(donePercent => {
            store.dispatch({ type: SET_DONE_PERCENT, donePercent })
        })
        .catch(err => {
            console.error('err:', err)
            showErrorMsg('Cannot get done percent')
        })
}