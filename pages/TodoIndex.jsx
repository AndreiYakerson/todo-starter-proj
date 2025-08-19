import { TodoFilter } from "../cmps/TodoFilter.jsx"
import { TodoList } from "../cmps/TodoList.jsx"
import { DataTable } from "../cmps/data-table/DataTable.jsx"
import { todoService } from "../services/todo.service.js"
import { userService } from "../services/user.service.js"
import { loadTodos, removeTodo, saveTodo } from "../store/actions/todo.actions.js"
import { setBalance } from "../store/actions/user.actions.js"
import { SET_FILTER_BY } from "../store/reducers/todo.reducer.js"

const {  useEffect } = React
const { useSelector, useDispatch } = ReactRedux
const { Link, useSearchParams } = ReactRouterDOM

export function TodoIndex() {
    const todos = useSelector(state => state.todoModule.todos)
    const filterBy = useSelector(state => state.todoModule.filterBy)

    const dispatch = useDispatch()

    const [searchParams, setSearchParams] = useSearchParams()
    const defaultFilter = todoService.getFilterFromSearchParams(searchParams)

    useEffect(() => {
        dispatch({type: SET_FILTER_BY, filterBy: defaultFilter}) 
    },[])
    
    useEffect(() => {
        setSearchParams(filterBy)
        loadTodos(filterBy)
    }, [filterBy])

    
    function onRemoveTodo(todoId) {
        removeTodo(todoId)
    }

    function onToggleTodo(todo) {
        const todoToSave = { ...todo, isDone: !todo.isDone }
        saveTodo(todoToSave)
        if (todoToSave.isDone) setBalance(10)
    }

    if (!todos) return <div>Loading...</div>
    return (
        <section className="todo-index">
            <TodoFilter filterBy={filterBy} />
            <div>
                <Link to="/todo/edit" className="btn" >Add Todo</Link>
            </div>
            <h2>Todos List</h2>
            <TodoList todos={todos} onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo} />
            <hr />
            <h2>Todos Table</h2>
            <div style={{ width: '60%', margin: 'auto' }}>
                <DataTable todos={todos} onRemoveTodo={onRemoveTodo} />
            </div>
        </section>
    )
}