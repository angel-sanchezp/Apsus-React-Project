export function TodosPreview({ note, onClick }) {
    const { info : { label, todos = [] }} = note;
    const todosText = todos.map(curr => curr.txt).join(', ')

    return (
        <div className="todo-card" onClick={() => onClick(note)}>
            { label && <h1 className="card-label">{label}</h1> }
            <ul className="todos">
                {todos.map((todo, idx) => (
                    <li className="todo" key={idx}>{todo.txt}</li>
                ))}
            </ul>
        </div>
    )
}

