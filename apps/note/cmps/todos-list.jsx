export function TodosList({ todos, onToggleTodo, onRemoveTodo }) {

    onToggleTodo = (idx) => {
        const currTodo = todos[idx]
        todos[idx].doneAt = (currTodo.doneAt) ? null : Date.now
        this.setState({ todos })
    }

    onRemoveTodo = (ev , todoIdx) => {
        ev.preventDefault()
        const newTodos = todos.filter((todo, idx) => idx !== todoIdx)
        this.setState({ newTodos })
    }

    return <ul className="todos-list">
        {
            todos.map((todo, idx) => {
                return <li key={idx} className="flex" >
                    <p className={todo.doneAt ? 'done' : ''} onClick={() => onToggleTodo(idx)} >
                        {todo.txt}
                    </p>
                    <button onClick={(event) => onRemoveTodo(event, idx)}>x</button></li>
            })
        }
    </ul>
}