import { BookPreview } from '../cmp/BookPreview.jsx'

export function BookList({books}) {
    // console.log(books)
    return (
        <section className="book-list">
            {books.map(book => <BookPreview key={book.id} book={book}/>)}
        </section>
    )
}
