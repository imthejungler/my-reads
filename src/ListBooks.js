import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom';

class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired
  };

  render() {
    const { books } = this.props;

    let bookshelves = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    };

    books.forEach(book => {
      book.shelf === 'currentlyReading' && bookshelves.currentlyReading.push(book);
      book.shelf === 'wantToRead' && bookshelves.wantToRead.push(book);
      book.shelf === 'read' && bookshelves.read.push(book);
    });

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf title="Currently Reading" books={bookshelves.currentlyReading}/>
            <Bookshelf title="Want To Read" books={bookshelves.wantToRead}/>
            <Bookshelf title="Read" books={bookshelves.read}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks