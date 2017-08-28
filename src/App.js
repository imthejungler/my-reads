import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books})
    })
  }
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks/>
        )}/>
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
