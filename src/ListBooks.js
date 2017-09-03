import PropTypes from 'prop-types'
import React, { Component } from 'react'
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

    const shelves = [
      {
        label: 'Currently Reading',
        key: 'currentlyReading',
        books: []
      },
      {
        label: 'Want to Read',
        key: 'wantToRead',
        books: []
      },
      {
        label: 'Read',
        key: 'read',
        books: []
      }
    ];

    const availvableShelves = shelves.map(shelf => shelf.key);

    shelves.map(shelf => {
      shelf.books = books.filter(book => book.shelf === shelf.key);
      return shelf;
    });

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map(shelf => (
              <Bookshelf key={shelf.key}
                         title={shelf.label}
                         books={shelf.books}
                         onBookshelfChange={onBookshelfChange}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks;
