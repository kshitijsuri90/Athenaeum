import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from '../../components/Book/Book'
import './Search.module.css'

// Component to render Search page
class Search extends Component {

  render() {
    const {filteredBooks, searchBooks, updateOption} = this.props

    return (
      <div>
        <div className="search-books-bar">
          <Link to='/' className='close-search'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input
              className='search-books-results'
              type='text'
              placeholder='Search books..'
              onChange={(event) => searchBooks(event.target.value)}/>
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {filteredBooks.map(book => (<Book book={book} key={book.id} updateOption={updateOption}/>))}
          </ol>
        </div>

      </div>
    )
  }
}

export default Search;
