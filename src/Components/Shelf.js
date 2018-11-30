import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types'

class Shelf extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
      };

    render() {

        const { books, updateShelf } = this.props

        return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.section}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {
                    // if there are any books, map over them and add book details
                    books && books.map((book) => {
                         return (
                              <Book
                                   book={book}
                                   key={book.id}
                                   updateShelf={updateShelf}
                              />
                         )
                    })
               }
                 
                </ol>
            </div>
        </div>
        )
    }
}

export default Shelf