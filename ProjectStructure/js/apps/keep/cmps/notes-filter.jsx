export class NotesFilter extends React.Component {
    state = {
        filterBy: ''
    }

    handleChange = ({ target }) => {
        const value = target.value 
        this.setState((prevState) => ({ ...prevState, filterBy: value }))
        this.props.onSetFilter(value)
    }

    onSubmitFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
        this.cleanForm()
    }

    cleanForm = () => {
        this.setState({ filterBy: '' })
    }

    render() {
        return (
            <form className="note-filter" onSubmit={this.onSubmitFilter}>
                <label
                    htmlFor="by-type">By type:</label>
                  <select onChange={this.handleChange} name="type" id="type">
                        <option value="all">All</option> 
                        <option value="note-txt">text notes</option>
                        <option value="note-img">pictures</option>
                        <option value="note-todos">todos</option>
                        <option value="note-video">videos</option>
                    </select>
                <button>Filter</button>
            </form>
        )
    }
}