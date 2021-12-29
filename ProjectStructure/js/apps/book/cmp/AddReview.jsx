import { bookService } from "../services/book.service.js";
import { eventBusService } from "../services/event-bus.service.js";

export class AddReview extends React.Component {

    state = {
        review:{
            name: 'Anonymus',
            rate: 0,
            date: '',
            comment: ''
        }
    }

    inputRef = React.createRef()
    componentDidMount() {
        console.log('props in addReview', this.props);
        this.inputRef.current.focus()
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ review: { ...prevState.review, [field]: value } }))
    }


    onGoBack = () => {
        this.props.history.push(`/book/${this.state.reviewbookId}`)
    }


    onSubmit = (ev) => {
        ev.preventDefault()
        const { book } = this.props;
        const { review } = this.state;
        bookService.addReview(book, review).then(()=>{
            eventBusService.emit('user-msg',{txt:'Review was saved!',type:'succes'})
            this.props.loadBook()
        });
        this.props.toggleModal();
    }

    cleanForm = () => {
        this.setState({ review: { name: '', date: '', comment: '' } })
    }


    render() {
        const { name, rate, comment } = this.state.review
        return (
            <section className="review-add">
                <form className="review-form" onSubmit={this.onSubmit}>
                    <label htmlFor="name">Your name:</label>
                    <input ref={this.inputRef}
                        placeholder="Enter name"
                        type="text"
                        id="full-name"
                        name="name"
                        value={name}
                        onChange={this.handleChange} />
                    <label htmlFor="name">Rate this book:</label>
                    <input
                        type="number"
                        id="rate"
                        name="rate"
                        value={rate}
                        onChange={this.handleChange} />
                    <label htmlFor="comment">Your Comment:</label>
                    <textarea
                        name="comment"
                        id="review"
                        cols="30"
                        rows="10"
                        value={comment}
                        onChange={this.handleChange}></textarea>
                    <div className="btns-container">
                        <button type="submit">Save!</button>
                        <button type="button" onClick={this.onGoBack}>Go Back</button>
                    </div>
                </form>
            </section>
        )
    }







}