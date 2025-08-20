
import { TodoPreview } from "./TodoPreview.jsx"
import { PagesCmp } from "./PagesCmp.jsx"

const { Link } = ReactRouterDOM
const { Fragment } = React

export function TodoList({ todos, onRemoveTodo, onToggleTodo, onChangePage }) {
    return (
        <Fragment>
            <PagesCmp onChangePage={onChangePage}/>
            <ul className="todo-list">
                {todos.map(todo =>
                    <li key={todo._id} style={{ backgroundColor: todo.isDone ? 'var(--done)' : 'var(--active)' }}>
                        <TodoPreview todo={todo} onToggleTodo={() => onToggleTodo(todo)} />
                        <section>
                            <button onClick={() => onRemoveTodo(todo._id)}>Remove</button>
                            <button><Link to={`/todo/${todo._id}`}>Details</Link></button>
                            <button><Link to={`/todo/edit/${todo._id}`}>Edit</Link></button>
                        </section>
                    </li>
                )}
            </ul>
        </Fragment>
    )
}