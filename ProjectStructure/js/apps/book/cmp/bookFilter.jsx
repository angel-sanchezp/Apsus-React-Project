
import { SearchArea } from './SearchArea.jsx'

export class BookFilter extends React.Component {
    state = {
        filterBy: {
            title: '',
            minPrice: '',
            maxPrice: ''
        }
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: value } }))
    }

    onSubmitFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
        this.cleanForm()
    }

    cleanForm = () => {
        this.setState({ filterBy: { title: '', maxPrice: '', minPrice: '' } })
    }

    render() {
        const { filterBy: { title, minPrice, maxPrice } } = this.state;
        return (
            <section>
                <form className="book-filter" onSubmit={this.onSubmitFilter}>
                    <label
                        htmlFor="by-title">By Title Book:</label>
                    <input
                        placeholder="Name Book?"
                        type="text"
                        id="by-title"
                        name="title"
                        value={title}
                        onChange={this.handleChange} />
                    <label htmlFor="by-min-price">Price From:</label>
                    <input
                        placeholder='0'
                        type="number"
                        min="0"
                        id="by-min-price"
                        name="minPrice"
                        value={minPrice}
                        onChange={this.handleChange} />
                    <label
                        htmlFor="by-max-price">Price To:</label>
                    <input
                        placeholder="Maximum Price"
                        type="number"
                        min="0"
                        id="by-max-price"
                        name="maxPrice"
                        value={maxPrice}
                        onChange={this.handleChange} />
                    <button>Filter</button>

                </form>

                <SearchArea loadBooks={this.props.loadBooks}/>


            </section>
        )
    }
    
    
    // <label for="site-search">Search Book:</label>
    // <input
    //     type="search"
    //     id="site-search"
    //     name="q"
    //     aria-label="Search through site content" />
    // <button>Search</button>

}