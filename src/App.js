import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

/**
 * @description An app made to keep track of the books you are interested in, those you already read and
 * the ones you are currently reading.
 */
class BooksApp extends Component {
  state = {
    books: []
  };

  /**
   * @description gets all the books in the shelves.
   */
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  /**
   * @description moves a book to a shelf
   * @param book the book to be moved
   * @param shelf the destination shelf
   */
  changeBookshelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState((state) => ({
        books: state.books.map(b => b.id === book.id ? book : b)
      }))
    });
  };

  /**
   * @description renders THE APP!, well is just a saying. Because I'll have to list every feature of the app
   * and I won't. xD
   * @returns {XML} the rendered HTML of the app.
   */
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks/>
        )}/>
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            onBookshelfChange={this.changeBookshelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
