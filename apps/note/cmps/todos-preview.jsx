export class TodosPreview extends React.Component {
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

    onRemoveTodo = (ev , todoIdx) => {
        ev.stopPropagation()
        const todos = this.state.todos.filter((todo, idx) => idx !== todoIdx)
        this.setState({ todos })
    }

    render() {
        const { title, txt } = this.props.note.info
        const { todos } = this.props.note.info
        const { onToggleTodo, onRemoveTodo } = this
        return <div className="todos-preview">
            {(title) && <h1 className="preview-title" >{title}</h1>}
            {(txt) && <pre className="preview-text" >{`${txt}`}</pre>}
            {(todos) && (<ul className="todos-list">
                {
                    todos.map((todo, idx) => {
                        return <li key={idx} onClick={() => onToggleTodo(idx)}
                            className={todo.doneAt ? 'done' : ''}>
                            {todo.txt}
                            <button onClick={(event) => onRemoveTodo(event, idx)}>x</button></li>
                    })
                }
            </ul>)}
        </div>
    }
}