import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'

class SearchBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  };

   state = {
     books: [],
     query: ''
   }

    // value typed into search bar will be set as the state for query
    handleChange = async e => {
      const query = e.target.value
      this.setState( { query } )
      
      // if search is empty, then empty array so no books are displayed
      if (query === '' || query === undefined) {
            return this.setState({
               books: []
             })
           }
      else {
            // Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects
            // if a query exists, search that query and set the state of books to be equal to the books that pass the search
            const results = await BooksAPI.search(query)
            this.setState( { books: results } )
           }
      }

    render() {

      const { updateShelf } = this.props;
      const { books } = this.state;

        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" 
                       placeholder="Search by title or author"
                       value={this.state.query}
                       onChange={this.handleChange}
                       />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {books.length > 0 && books.map(book => 
                  <Book
                    book={book}
                    key={book.id}
                    updateShelf={updateShelf}
                  />
                )}
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks