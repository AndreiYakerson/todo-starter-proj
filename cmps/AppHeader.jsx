
const { Link, NavLink } = ReactRouterDOM
const { useSelector, useDispatch } = ReactRedux
const { useEffect } = React

import { UserMsg } from "./UserMsg.jsx"
import { LoginSignup } from './LoginSignup.jsx'
import { logout } from '../store/actions/user.actions.js'
import { updateDonePercent } from '../store/actions/todo.actions.js'


export function AppHeader() {
    const loggedinUser = useSelector(state => state.loggedinUser)
    const donePercent = useSelector(state => state.donePercent)
    const todos = useSelector(state => state.todos)

    useEffect(() => {
        updateDonePercent()
    },[todos])
    
    function onLogout() {
       logout()
    }


    
    return (
        <header className="app-header full main-layout">
            <section className="header-container">
                <h1>React Todo App</h1>
                {loggedinUser ? (
                    < section >
                        <Link to={`/user/${loggedinUser._id}`}>Hello {loggedinUser.fullname}</Link>
                        <button onClick={onLogout}>Logout</button>
                    </ section >
                ) : (
                    <section>
                        <LoginSignup />
                    </section>
                )}
                <section className="percent-container">
                    <p>Done: {donePercent}%</p>
                </section>
                <nav className="app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/todo" >Todos</NavLink>
                    <NavLink to="/dashboard" >Dashboard</NavLink>
                </nav>
            </section>
            <UserMsg />
        </header>
    )
}
