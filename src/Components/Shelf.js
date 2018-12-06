import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types'

// using stateless functional component because state is not being altered (improves performance by reducing the number of renders)
const Shelf = ({books, section, updateShelf}) => { 
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{section}</h2>
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

Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    section: PropTypes.string.isRequired,
    updateShelf: PropTypes.func.isRequired
}

export default Shelf