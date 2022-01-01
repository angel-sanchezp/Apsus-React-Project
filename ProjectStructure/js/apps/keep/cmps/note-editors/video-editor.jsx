

const { Link } = ReactRouterDOM

export class VideoEditor extends React.Component {
    state = {
        note: this.props.note,
    }

    handleChange = ({ target }) => {
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



    render() {
        const { note } = this.state
        const { info: { title, url } } = note
        return (
            <div className="card-video">
                <form className="video-modal" onSubmit={this.handleSubmit}>
                    <textarea type="text" id="title-input" name="title" value={title || ''} placeholder="Enter your title" onChange={this.handleChange} />
                    <input type="text" id="video-input" name="url" value={`https://www.youtube.com/watch?v=${url}` || ''} placeholder="Enter video url" onChange={this.handleChange} />
                    <input type="submit" value="save" className="btn-save" />
                </form>
            </div>
        )
    }

}




