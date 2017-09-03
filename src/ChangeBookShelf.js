import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * @description Sends a signal to change the book from shelf
 */
class ChangeBookshelf extends Component {

  static propTypes = {
    currentShelf: PropTypes.string.isRequired,
    onBookshelfChange: PropTypes.func.isRequired
  };

  handleChange = (e) => {
    if(this.props.onBookshelfChange) {
      this.props.onBookshelfChange(e.target.value);
    }
  };

  /**
   * @description renders a drop down menu with the shelves available.
   * @returns {XML} the rendered HTML of a list of shelves.
   */
  render() {

    const { currentShelf } = this.props;

    return (
      <div className="book-shelf-changer">
        <select defaultValue={currentShelf} onChange={this.handleChange}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }

}

export default ChangeBookshelf;
