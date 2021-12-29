
const { Link } = ReactRouterDOM
export function BookPreview({ book }) {

    function symbol() {
        switch (book.listPrice.currencyCode) {
            case 'EUR':
                return '€'
            case 'USD':
                return '$'
            case 'ILS':
                return '₪'
        }

    }


    return (
        <Link to={`/book/${book.id}`}>
            <div className="book-card">
                <img src={book.thumbnail} />
                <label>Title:{book.title}</label>
                <label>Price:{book.listPrice.amount} {symbol()}</label>
            </div>
        </Link>
    )
}