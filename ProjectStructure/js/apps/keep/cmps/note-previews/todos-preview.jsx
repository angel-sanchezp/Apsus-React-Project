export function TodosPreview({ note }) {
    return (
        <div key={note.id} className="card todo-card">
            <h1 className="card-label">{note.info.label}</h1>
            <div className="todos">
                {note.info.todos.map(todo => (
                    <div className="todo" key={todo.doneAt}>
                        {todo.txt} , <span className="smaller">{todo.doneAt}</span>
                    </div>
                ))}
            </div>
        </div> 
    )
}