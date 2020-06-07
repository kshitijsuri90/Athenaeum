import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Home from "./containers/Home/Home";
import Search from "./containers/Search/Search";
import styles from "./App.css";

class App extends Component {
  state = {
    allBooks: [],
    filteredBooks: [],
  };

  // gets all the books
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ allBooks: books });
    });
  }

  // search books with the Search Terms
  searchBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((result) => {
        this.updateSearchedResult(result);
        if (result.error !== "empty query") {
          this.setState({ filteredBooks: result });
        } else {
          this.setState({ filteredBooks: [] });
        }
      });
    } else {
      this.setState({ filteredBooks: [] });
    }
  };

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((updated) =>
      BooksAPI.getAll().then((books) => {
        this.setState({ allBooks: books });
        this.updateSearchedResult(this.state.filteredBooks);
      })
    );
  };

  // update state of the book on both pages
  updateSearchedResult = (values) => {
    if (Symbol.iterator in Object(values)) {
      for (let value of values) {
        for (let book of this.state.allBooks) {
          if (value.id === book.id) {
            value.shelf = book.shelf;
          }
        }
      }
      this.setState({ filteredBooks: values });
    }
  };

  render() {
    return (
      <div className={styles.app}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                books={this.state.allBooks}
                updateOption={(book, shelf) => this.updateShelf(book, shelf)}
              />
            )}
          />

          <Route
            path="/search"
            render={() => (
              <div>
                <Search
                  filteredBooks={this.state.filteredBooks}
                  searchBooks={(query) => this.searchBooks(query)}
                  updateOption={(book, shelf) => this.updateShelf(book, shelf)}
                />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
