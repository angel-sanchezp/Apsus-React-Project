

const { Link } = ReactRouterDOM 

export class TextEditor extends React.Component {
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

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.onSaveNote(this.state.note)
    }


    render(){
        const { note } = this.state
        const { info: { title, txt } } = note
        return (
            <div className = "card-txt">
                <form className= "text-modal" onSubmit={this.handleSubmit}>
                    <textarea type="text" id="title-input" name="title" value= {title || ''} placeholder="Enter your title" onChange={this.handleChange}/>
                    <textarea type="text" id="text-input" name="txt" value={txt || ''} placeholder="Enter your note" onChange={this.handleChange} />
                    <input type="submit" value="save" className="btn-save" />
                </form>
            </div> 
        ) 
    }
     
}


