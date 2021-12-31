export function TodosPreview({ note, onClick }) {
    return (
        
        <div key={note.id} className="todo-card" onClick={() => onClick(note)}>
            <h1 className="card-label">{note.info.label}</h1>
            <ul className="todos">
                {note.info.todos.map(todo => (
                    <li className="todo" key={todo.doneAt}>{todo.txt}</li>
                ))}
            </ul>
        </div>
        
    )
}