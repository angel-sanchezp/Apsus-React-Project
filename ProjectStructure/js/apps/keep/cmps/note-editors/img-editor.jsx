

const { Link } = ReactRouterDOM 

export class ImgEditor extends React.Component {
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
        const { info: { title, url } } = note
        return (
            <div className = "card-img">
                 <form className= "img-modal" onSubmit={this.handleSubmit}>
                    <textarea className="note-title-input" type="text" id="title-input" name="title" value= {title || ''} placeholder="Enter your title" onChange={this.handleChange}/>
                    <input className="note-url-input" type="text" id="img-input" name="url" value={url || ''} placeholder="Enter img url" onChange={this.handleChange} />
                    <input className="btn-modal-save" type="submit" value="save" className="btn-save" />
                </form>
            </div> 
        ) 
    }
}

