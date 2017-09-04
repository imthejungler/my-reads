import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChangeBookshelf from './ChangeBookShelf';

/**
 * @description Shows a thumbnail or summary of a book, just the most basic data.
 */
class BookThumb extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    onBookshelfChange: PropTypes.func
  };

  handleBookshelfChange = (newBookshelf) => {

    if(this.props.onBookshelfChange) {
      this.props.onBookshelfChange(this.props.book, newBookshelf)
    }
  };

  /**
   * @description renders the BookThumb UI.
   * @returns {XML} the rendered HTML of a Book thumbnail.
   */
  render() {

    const { book, onBookshelfChange } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')'
          }}> </div>
          {onBookshelfChange && (
            <ChangeBookshelf
              currentShelf={book.shelf}
              onBookshelfChange={this.handleBookshelfChange}
            />
          )}
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors && book.authors.map(author => (
          <div key={book.id + author} className="book-authors">{author}</div>
        ))}
      </div>
    );
  }

}

export default BookThumb;
