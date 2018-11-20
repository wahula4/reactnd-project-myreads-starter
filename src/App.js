import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends Component {

  render() {
    return (
      <div className="app">
      <Route exact path='/' component ={ListBooks} />
      <Route path='/search' render ={() => (
        <SearchBooks />
      )} />
      </div>
    )
  }
}

export default BooksApp
