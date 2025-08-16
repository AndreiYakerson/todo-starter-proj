
const { createStore } = Redux

//CMDS:
export const SET_TODOS = 'SET_TODOS'
export const REMOVE_TODOS = 'REMOVE_TODOS'


const initialState = {
    todos: [],
}


export function appReducer(state = initialState, cmd = {}) {
    switch (cmd.type) {
        case SET_TODOS:
            return { ...state, todos: cmd.todos }

        case REMOVE_TODOS:
            const todos = state.todos.filter(todo => todo._id !== cmd.todoId)
            return { ...state, todos }

        default:
            return state;
    }

}

export const store = createStore(appReducer)