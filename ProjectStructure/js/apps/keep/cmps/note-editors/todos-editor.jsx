import { notesService } from "../../services/note.service.js"



const { Link } = ReactRouterDOM 

export class TodosEditor extends React.Component {
    state = {
        note: this.props.note,
    }

    handleChange = ({target}) =>{
        const value = target.value 
        const name = target.name 
        this.setState((prevState) => ({
            ...prevState, 
            note: {
                ...prevState.note,
                info: {
                    ...prevState.note.info,
                    [name]: value
                }
            }
        }))
    }


    handleTodoChange = (ev, idx) =>{
        const value = ev.target.value 
        const todos = this.state.note.info.todos
        todos[idx].txt = value
        this.setState((prevState) => ({
            ...prevState, 
            note: {
                ...prevState.note,
                info: {
                    ...prevState.note.info,
                    todos
                }
            }
        }))
    } 

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.onSaveNote(this.state.note)
    }

    addTodo = () =>{
        this.setState((prevState) => ({
            ...prevState, 
            note: {
                ...prevState.note,
                info: {
                    ...prevState.note.info,
                    todos: [...prevState.note.info.todos, { txt: '' }]
                }
            }
        }))
    }

    removeTodo = (idx) =>{
        const todos = this.state.note.info.todos
        todos.splice(idx,1);

        this.setState((prevState) => ({
            ...prevState, 
            note: {
                ...prevState.note,
                info: {
                    ...prevState.note.info,
                    todos
                }
            }
        }))
    }


    render(){
        const { note } = this.state
        const { info: { label, todos } } = note
        const todosText = todos.map(curr => curr.txt).join(', ')
        return (
            <div className = "todo-card">
                <form className= "todo-modal" onSubmit={this.handleSubmit}>
                    <textarea type="text" id="title-input" name="label" value= {label || ''} placeholder="Enter your title" onChange={this.handleChange}/>
                    {todos.map((todo, idx)=> (
                        <div className="todo" key={`frag-${idx}`}>
                        <input className="note-todo-input" type="text" key={idx} value={todo.txt || ''} placeholder="Enter your todo" onChange={(ev) => this.handleTodoChange(ev, idx)} />
                        <img key={`img-${idx}`} src="https://static.thenounproject.com/png/1833346-200.png" className="btn-todo-remove" onClick={()=> this.removeTodo(idx)}/>
                        </div>
                    ))}
                    <input className="btn modal-save" type="submit" value="save" className="btn-save" />
                </form>
                <button onClick={this.addTodo}>+</button>
            </div> 
        ) 
    }
     
}

