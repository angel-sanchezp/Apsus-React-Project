export function TodosPreview({ note, onClick }) {
    const { info : { label, todos = [] }} = note;
    const todosText = todos.map(curr => curr.txt).join(', ')

    return (
        <div className="card-content todo-card" onClick={() => onClick(note)}>
            { label && <h1 className="card-label">{label}</h1> }
            <div className="todos">
                {todos.map((todo, idx) => (
                    <div key={idx} className="todo-row">
                        <input type="checkbox" name="marked" checked={!!todo.doneAt} onChange={(ev) => ev.preventDefault()}/>
                        <span className={`todo-item ${todo.doneAt ? 'marked' : ''}`} key={idx}>{todo.txt}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

