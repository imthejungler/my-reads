import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookThumb from './BookThumb';

/**
 * @description This component allows the user to search, see and move the books to a shelf.
 */
class SearchBooks extends Component {

  static propTypes = {
    onBookshelfChange: PropTypes.func.isRequired,
    myBooks: PropTypes.array.isRequired,
  };

  state = {
    books: [],
  };

  updateQuery(query) {

    const { myBooks } = this.props;

    if (query) {
      BooksAPI.search(query.trim(), 20).then((books) => {
        books = books.map(book => {
          let myBook = myBooks.find(myBook => book.id === myBook.id);
          return myBook ? myBook : book;
        });

        this.setState({ books })
      });
    } else {
      this.setState({ books: [] })
    }
  }

  /**
   * @description renders the a Search for books UI and the list of results.
   * @returns {XML} the rendered HTML of a search engine for books.
   */
  render() {

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text"
                   placeholder="Search by title or author"
                   onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          {this.state.books.error && (<em>There are no books for your query! Try again!</em>)}
          <ol className="books-grid">
            {!this.state.books.error && this.state.books.map(book => (
                <li key={book.id}>
                  <BookThumb book={book} onBookshelfChange={this.props.onBookshelfChange}/>
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;
