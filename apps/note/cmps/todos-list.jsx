export class TodosList extends React.Component {
    state = {
        todos: []
    }

    componentDidMount() {
        this.setState(this.props.note.info)
    }

    onToggleTodo = (idx) => {
        const currTodo = this.state.todos[idx]
        const todos = this.state.todos
        todos[idx].doneAt = (currTodo.doneAt) ? null : Date.now
        this.setState({ todos })
    }

    onRemoveTodo = (ev, todoIdx) => {
        ev.preventDefault()
        const todos = this.state.todos.filter((todo, idx) => idx !== todoIdx)
        this.setState({ todos })
    }

    render() {
        const { title, txt } = this.props.note.info
        const { todos } = this.state
        console.log(this.state.todos)
        const { onToggleTodo, onRemoveTodo } = this
        return <div className="todos-preview">
            <ul className="todos-list">
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
        </div>
    }
}