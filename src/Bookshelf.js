import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookThumb from './BookThumb'

/**
 * @description Shows the list of books corresponding to a specific shelf. If there are no books,
 * it will show the message: "There are no books in this shelf, for now..."
 */
class Bookshelf extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onBookshelfChange: PropTypes.func
  };

  handleBookshelfChange = (book, bookshelf) => {
    if (this.props.onBookshelfChange) {
      this.props.onBookshelfChange(book, bookshelf);
    }
  };

  /**
   * @description renders the Bookshelf UI.
   * @returns {XML} the rendered HTML of a Bookshelf.
   */
  render () {

    const { title, books } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          {books.length === 0 && (<em>There are no books in this shelf, for now...</em>)}
          <ol className="books-grid">
            {
              books.map(book => (
                <li key={book.id}>
                  <BookThumb book={book} onBookshelfChange={this.handleBookshelfChange}/>
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf;
