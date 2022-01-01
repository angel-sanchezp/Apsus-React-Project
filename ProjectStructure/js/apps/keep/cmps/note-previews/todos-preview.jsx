export function TodosPreview({ note, onClick, isEditMode }) {
    return (
        <div className="todo-card" onClick={() => onClick(note)}>
            <h1 className="card-label">{note.info.label}</h1>
            <ul className="todos">
                {note.info.todos.map((todo, idx) => (
                    <li className="todo" key={idx}>{todo.txt}</li>
                ))}
            </ul>
        </div>
    )
}