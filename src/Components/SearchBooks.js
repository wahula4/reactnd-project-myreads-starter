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
     results: [],
     query: '',
     books: []
   }

   async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState( { books } )
  }

    // value typed into search bar will be set as the state for query
    handleChange = async e => {
      // try{
      const query = e.target.value
      this.setState( { query } )
      
      // if search is empty, then empty array so no books are displayed
      if (query === '' || query === undefined) {
            return this.setState({
               results: []
             })
           }
      else {
            // Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects
            // if a query exists, search that query and set the state of books to be equal to the books that pass the search
            await BooksAPI.search(query).then(results => {
              if(!results || results.hasOwnProperty('error')) {
                this.setState({ results: [] })
              } else {
                // if the id of the results match the id of a shelved book, set the shelf value of the searched book
                  for(let result of results){
                    result.shelf = 'none'
                    for(let book of this.state.books){
                      if(book.id === result.id){
                        result.shelf = book.shelf
                      }
                    }
                  }
                  this.setState( { results } )
                }  
            })
           }      
      }

    render() {

      const { updateShelf } = this.props;
      const { results } = this.state;

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
            <div className="search-books-results" id="hello">
              <ol className="books-grid">
                {results.length > 0 ? results.map(book => 
                    <Book
                      book={book}
                      key={book.id}
                      updateShelf={updateShelf}
                    />
                  ) : "No Results"
                }
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks