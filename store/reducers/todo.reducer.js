import { todoService } from "../../services/todo.service.js"


//CMDS:
export const SET_TODOS = 'SET_TODOS'
export const REMOVE_TODOS = 'REMOVE_TODOS'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const SET_DONE_PERCENT = 'SET_DONE_PERCENT'

export const SET_FILTER_BY = 'SET_FILTER_BY'



const initialState = {
    todos: [],
    filterBy: todoService.getDefaultFilter(),
    donePercent: 0,
}



export function todoReducer(state = initialState, cmd = {}) {
    switch (cmd.type) {
        case SET_TODOS:
            return { ...state, todos: cmd.todos }

        case REMOVE_TODOS:
            var todos = state.todos.filter(todo => todo._id !== cmd.todoId)
            return { ...state, todos }

        case ADD_TODO:
            return { ...state, todos: [...state, cmd.todo] }

        case UPDATE_TODO:
            var todos = state.todos.map(todo => todo._id !== cmd.savedTodo._id ? todo : cmd.savedTodo)
            return { ...state, todos: [...todos] }

        case SET_DONE_PERCENT:
            return { ...state, donePercent: cmd.donePercent }

        case SET_FILTER_BY:
            return { ...state, filterBy: { ...state.filterBy, ...cmd.filterBy } }

        default:
            return state;
    }

}
