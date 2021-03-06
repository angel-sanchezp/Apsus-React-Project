
export class MailFilter extends React.Component {

    state = {
        filterBy:{
            txt: '',
            status: ''
        }
    };

    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.type === 'number' ? +target.value : target.value;
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }))

    };

    onSubmitFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
        this.cleanForm()
    }
    cleanForm = () => {
        this.setState({ filterBy: { txt: '', status: '' } })
    }


    render() {
        const { txt} = this.state;
        return (
            <div className="search-filter-container">
                <form className="search-mail-form" onSubmit={this.onSubmitFilter}>
                    <div className="search-input-div">
                    <input name="txt" value={txt} placeholder="Search Mail..." className="search-input" type="text" onChange={this.handleChange} />
                    </div>
                    <div className="mail-status-select">
                    <select  className="select-filter-search-mail "name="status" id="status" onChange={this.handleChange}>
                        <option value="Inbox">Inbox</option>
                        <option value="unRead">UnRead</option>
                        <option value="read">Read</option>
                        <option value="sent">Sent</option>
                        <option value="draft">Draft</option>
                        <option value="favorite">Favorite</option>
                    </select>
                    </div>
                    <div>
                    <button className="mail-search-btn">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}