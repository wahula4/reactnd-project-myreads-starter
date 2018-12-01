import React, { Component } from 'react'
import '../App.css'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from '../BooksAPI'

class BooksApp extends Component {

  state = {
    books: []
}
    // Returns a Promise which resolves to a JSON object containing a collection of book objects currently on shelves
    async componentDidMount() {
        const books = await BooksAPI.getAll()
        this.setState( { books } )
    }

    // Returns a Promise which resolves to a JSON object containing the response data of the POST request
    // updateShelf will be passed down to all other components
    updateShelf = (book, shelf) => {
       BooksAPI.update(book, shelf)
        .then((response) => {
          book.shelf = shelf;
          this.setState((state) => ({
            books: state.books.filter((x) => {
              return (x.id !== book.id)
            }).concat([book])
          }))
        }).then(() => shelf !== 'none' ? alert(`${book.title} has been moved.`) : null)
      }
      

  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <ListBooks 
          books={this.state.books}
          updateShelf={this.updateShelf}
        />
      )} />
      <Route path='/search' render={() => (
        <SearchBooks
          books={this.state.books}
          updateShelf={this.updateShelf}
        />
      )} />
      </div>
    )
  }
}

export default BooksApp
