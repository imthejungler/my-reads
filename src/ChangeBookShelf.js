import React, { Component } from 'react'

/**
 * @description Sends a signal to change the book from shelf
 */
class ChangeBookshelf extends Component {

  /**
   * @description renders a drop down menu with the shelves available.
   * @returns {XML} the rendered HTML of a list of shelves.
   */
  render() {
    return (
      <div className="book-shelf-changer">
        <select>
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
