import { bookService } from '../services/book.service.js'
import { BookList } from '../cmp/bookList.jsx'
import { BookFilter } from '../cmp/bookFilter.jsx'


export class BookApp extends React.Component {
    state = {
        books: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        console.log('hi')
        const { filterBy } = this.state
        // console.log(filterBy)
        bookService.query(filterBy).then(books => {
            this.setState({ books });
        })
    }

    onSetFilter = (filterBy) => {
        this.setState(prevState=>({ ...prevState,filterBy }), this.loadBooks)
    }

  

    render() {
        const { books} = this.state
        if (!books) return <h1>Loading...</h1>
        return (
            <section className="book-app">
                <BookFilter onSetFilter={this.onSetFilter} loadBooks={this.loadBooks}/>
                <BookList books={books}/>
            
            </section>
        )

    }
}