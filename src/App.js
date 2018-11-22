import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {

  state = {
    books: []
}

    async componentDidMount() {
        const books = await BooksAPI.getAll()
        this.setState( { books } )
              console.log('currently reading: ', books.filter(book => book.shelf === "currentlyReading"))
              console.log('want to read: ', books.filter(book => book.shelf === "wantToRead"))
              console.log('read: ', books.filter(book => book.shelf === "read"))
    }

    updateShelf = (book, shelf) => {
       BooksAPI.update(book, shelf)
        .then((response) => {
          book.shelf = shelf;
          this.setState((state) => ({
            books: state.books.filter((x) => {
              return (x.id !== book.id)     
            }).concat([book])
          }))
        })
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
        <SearchBooks />
      )} />
      </div>
    )
  }
}

export default BooksApp
