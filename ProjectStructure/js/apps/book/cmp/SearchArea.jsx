
import { searchBook } from '../services/search.book.service.js'
import { bookService } from "../services/book.service.js";
import { eventBusService } from "../services/event-bus.service.js";
import { SearchList } from './SearchList.jsx'

export class SearchArea extends React.Component {

    state = {
        searchBooks: [],
        nameBook: '',
    }

    handleChange = ({ target }) => {
        // console.log(target.value)
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({ ...prevState, [field]: value }))
    }

    addBook=(idx)=>{
        const books=this.state.searchBooks
        const book=books[idx]
        bookService.saveBook(book)
        .then((book)=>{
            eventBusService.emit('user-msg',{txt:`The Book ${book.title} was saved!`,type:'succes',link:`${book.id}`})
            this.props.loadBooks();
        })
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        const books = this.state.nameBook;
        if (!books) return;
        searchBook.getSearchBook(books)
            .then((books) => {
                this.state.searchBooks.push(books);
                this.setState(prev => ({ ...prev, searchBooks: books }), console.log(this.state))
            });

    }

    render() {
        const { searchBooks } = this.state;
        return (
            <section>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="nameBook" onChange={this.handleChange} />
                    <button type="submit">Search</button>
                    {searchBooks.length && <SearchList searchBooks={searchBooks} addBook={this.addBook} />}
                </form>
            </section>
        )

    }

}