

export function SearchList({ searchBooks ,addBook}) {
    console.log(searchBooks)

    


    return <section className="search-list">
        <select name="books-list" id="books-list" onChange={(ev) => addBook(ev.target.value)}>
            {searchBooks.map((book, idx) => {
                return (
                    <option
                        key={book.id}
                        value={idx}>{book.title}
                    </option>
                )
            })}
        </select>
    </section>

}