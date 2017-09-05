import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

/**
 * @description List the shelves and the books in them.
 */
class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onBookshelfChange: PropTypes.func
  };

  /**
   * @description renders the List of Bookshelves and books on it UI.
   * @returns {XML} the rendered HTML of Bookshelves and its books.
   */
  render() {
    const { books, onBookshelfChange } = this.props;

    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
    const wantToRead = books.filter(book => book.shelf === 'wantToRead');
    const read = books.filter(book => book.shelf === 'read');

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf key="currentlyReading"
                       title="Currently Reading"
                       books={currentlyReading}
                       onBookshelfChange={onBookshelfChange}
            />
            <Bookshelf key="wantToRead"
                       title="Want To Read"
                       books={wantToRead}
                       onBookshelfChange={onBookshelfChange}
            />
            <Bookshelf key="read"
                       title="Read"
                       books={read}
                       onBookshelfChange={onBookshelfChange}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;
