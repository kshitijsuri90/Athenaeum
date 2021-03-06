import React from "react";
import styles from "./Book.module.css";

// Component to render individual book
const Book = (props) => {
  const { book, updateOption } = props;
  let shelfValue = book.shelf ? book.shelf : "move";

  return (
    <li>
      <div className={styles.book}>
        <div className={styles["book-top"]}>
          {book.imageLinks && (
            <div
              className={styles["book-cover"]}
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})`,
              }}
            ></div>
          )}
          <div className={styles["book-shelf-changer"]}>
            <select
              value={shelfValue}
              onChange={(event) => updateOption(book, event.target.value)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className={styles["book-title"]}>{book.title}</div>
        <div className={styles["book-title"]}>{book.author}</div>
        {book.authors &&
          book.authors.map((author, index) => (
            <div key={index} className={styles["book-authors"]}>
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};

export default Book;
