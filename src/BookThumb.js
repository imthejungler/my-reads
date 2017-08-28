import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * @description Shows a thumbnail or summary of a book, just the most basic data.
 */
class BookThumb extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired
  };

  /**
   * @description renders the BookThumb UI.
   * @returns {XML} the rendered HTML of a Book thumbnail.
   */
  render() {

    const { book } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')'
          }}> </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors.map(author => (
          <div className="book-authors">{author}</div>
        ))}
      </div>
    );
  }

}

export default BookThumb;
