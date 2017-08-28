import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookThumb extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired
  };

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

export default BookThumb