import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from '../../components/Book/Book'
import styles from './Home.module.css'

// Component to render main page with bookshelves
class Home extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const {books, updateOption} = this.props

    return (
      <div className={styles['list-books']}>
        <div className={styles['list-books-title']}>
          <h1>Athenaeum - Your neighbourhood bookstore</h1>
        </div>

        <div className={styles['list-books-content']}>
          <div className={styles['bookshelf']}>
            <h2 className={styles['bookshelf-title']}>Currently Reading</h2>
            <div className={styles['bookshelf-books']}>
              <ol className={styles['books-grid']}>
                {books.filter((book) => book.shelf === "currentlyReading").map(book => (<Book book={book} key={book.id} updateOption={updateOption}/>))}
              </ol>
            </div>
          </div>

          <div className={styles['bookshelf']}>
            <h2 className={styles['bookshelf-title']}>Want To Read</h2>
            <div className={styles['bookshelf-books']}>
              <ol className={styles['books-grid']}>
                {books.filter((book) => book.shelf === "wantToRead").map(book => (<Book book={book} key={book.id} updateOption={updateOption}/>))}
              </ol>
            </div>
          </div>

          <div className={styles['bookshelf']}>
            <h2 className={styles['bookshelf-title']}>Read</h2>
            <div className={styles['bookshelf-books']}>
              <ol className={styles['books-grid']}>
                {books.filter((book) => book.shelf === "read").map(book => (<Book book={book} key={book.id} updateOption={updateOption}/>))}
              </ol>
            </div>
          </div>

          <div className={styles['open-search']}>
            <Link to="/search">Add a book</Link>
          </div>

        </div>
      </div>
    )
  }

}

export default Home;
