import { bookService } from "../services/book.service.js";
import { AddReview } from "../cmp/AddReview.jsx";
import { ReviewList } from '../cmp/ReviewList.jsx';
import { eventBusService } from "../services/event-bus.service.js";


 

export class BookDetails extends React.Component {

    state = {
        book: null,
        isModalShown: false,
    }

    componentDidMount() {
        console.log('props in BookDetails', this.props);
        this.loadBook()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
            this.loadBook()
        }
    }

    onSale = () => {
        const { book } = this.state
        if (!book.listPrice.isOnSale) return
        return 'SALE'
    }

    loadBook = () => {
        const { bookId } = this.props.match.params
        console.log('bookId in BookDetails', bookId);
        bookService.getBookById(bookId).then(book => {
            if (!book) return this.props.history.push('/')
            this.setState({ book })
        })
    }

    onGoBack = () => {
        this.props.history.push('/book')
    }

    onRemoveBook = () => {
        const { id } = this.state.book
        bookService.removeBook(id).then(()=>{
            eventBusService.emit('user-msg',{txt:'Book was delete!',type:'danger'});
            this.onGoBack();
        });
    }


    BookPageCount = () => {
        const { book } = this.state
        // console.log(book.reviews)
        if (book.pageCount >= 500) return ' Long Reading'
        else if (book.pageCount >= 200) return ' Decent Reading'
        if (book.pageCount <= 100) return ' Light Reading'
    }

    publishBook = () => {
        const { book } = this.state
        if (book.publishedDate >= 2020) return ' New'
        if (book.publishedDate <= 2010) return ' Veteran Book'
    }

    toggleModal = () => {
        this.setState(prev => ({ ...prev, isModalShown: !prev.isModalShown }), () => console.log(this.state));
    }

    onRemoveReview = (reviewId) => {
        const bookId = this.state.book.id;
        bookService.removeReview(bookId, reviewId).then(()=>{
            eventBusService.emit('user-msg',{txt:'Review was delete!',type:'danger'});
            this.loadBook();
        });
      };

    classByPrice = () => {
        const { book } = this.state
        if (book.listPrice.amount > 150) return 'red'
        else if (book.listPrice.amount < 50) return 'green'
        return ''
    }

    onAddReview = () => {
        this.setState({ isAddReview: true });
    }


    render() {
        const { book, isModalShown } = this.state
        if (!book) return <div>Loading...</div>
        return (
            <section>
                <section className="book-details">
                    <div className="details-container">
                        <h2>Title: {book.title}</h2>
                        <h2>Price: {book.listPrice.amount}</h2><span className={this.classByPrice()}> {this.onSale()}</span>
                        <h3>Authors: {book.authors}</h3>
                        <h3>Pages: {book.pageCount} {this.BookPageCount()}</h3>
                        <h3>Published Date: {book.publishedDate} {this.publishBook()}</h3>
                        <h3>Book Description:</h3>
                        <p>{book.description}</p>
                        <button className="btn back-btn" onClick={this.onGoBack}>Go back</button>
                        <button className="btn remove-btn" onClick={this.onRemoveBook}>Remove Book</button>
                    </div>
                    <div className="img-container">
                        <img src={book.thumbnail} />
                    </div>
                </section>
                <hr />
                <section className="reviews-container">
                <ReviewList reviews={book.reviews} onRemoveReview={this.onRemoveReview}/>
                    <button onClick={this.toggleModal}>Add Review</button>
                    {isModalShown && <AddReview book={book.id} loadBook={this.loadBook} toggleModal={this.toggleModal} />}
                    

                </section>
            </section>



)




// {!book.reviews.length && <h1>This Book no have Reviews</h1>}
// {book.reviews.map((review, idx) => {
//     <div key={review + idx}>
//         <h3>{review.name}</h3>
//         <h3>{review.date}</h3>
//         <p>{review.comment}</p>
//     </div>

// })}

    }

}
