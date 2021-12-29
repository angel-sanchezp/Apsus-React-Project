
import { utilService } from './utils.service.js'
export const searchBook = {
    getSearchBook

}


function getSearchBook(value) {

    console.log(value)
    return axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${value}`)
        .then(res => {
            console.log(res.data.items)
            return res.data.items
        })
        .then(books => books.map(book => ({
            id: book.id,
            title: book.volumeInfo.title,
            pageCount: book.volumeInfo.pageCount,
            description: book.volumeInfo.description,
            thumbnail: book.volumeInfo.imageLinks.thumbnail,
            authors: book.authors,
            publishedDate: book.publishedDate,
            reviews: [],
            listPrice: { "amount": utilService.getRandomIntInclusive(0, 100), "currencyCode": (Math.random > 0.5) ? 'EUR' : 'USD', "isOnSale":(Math.random > 0.5) ? true : false }


        })))
        .then(books => {
            return books
        })

}