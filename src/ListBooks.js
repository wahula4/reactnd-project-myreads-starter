import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {
    state = {
        books: [],
        currentlyReading: [],
        wantToRead: [],
        read: []
    }
    
        async componentDidMount() {
            const books = await BooksAPI.getAll()
            const currentlyReading = books.filter(book => book.shelf === "currentlyReading")
            const wantToRead = books.filter(book => book.shelf === "wantToRead")
            const read = books.filter(book => book.shelf === "read")
            this.setState( { books, currentlyReading, wantToRead, read } )
                  console.log('wantToRead', this.state.wantToRead)
        }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf title="Currently Reading" books={this.props.currentlyReading} />
                        <Shelf title="Want to Read" books={this.props.wantToRead} />
                        <Shelf title="Read" books={this.props.read} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks