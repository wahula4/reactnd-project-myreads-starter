import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import PropTypes from 'prop-types'

class ListBooks extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
      };

    render() {

        const { books, updateShelf } = this.props
        // each shelf will render the books that have shelf values corresponding to their section

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf 
                            section="Currently Reading"
                            books={books.filter((book) => book.shelf === 'currentlyReading'
                                )}
                            updateShelf={updateShelf}
                        />
                        <Shelf
                            section="Want to Read"
                            books={books.filter((book) => book.shelf === 'wantToRead'
                                )}
                            updateShelf={updateShelf} 
                        />
                        <Shelf
                            section="Read"
                            books={books.filter((book) => book.shelf === 'read'
                                )}
                            updateShelf={updateShelf} 
                        />
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