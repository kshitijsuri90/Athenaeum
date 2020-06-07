# Athenaeum Project

This is a project for Udacity's React Nanodegree course. Consists of React components to make a bookstore.


![Screenshot from 2020-06-07 23-04-25](https://user-images.githubusercontent.com/34534870/83975787-55f7d700-a913-11ea-8ada-7cafc46eeaf9.png)



## Getting Started

* Download this repo
* Install all project dependencies with `npm install`
* Start the development server with `npm start`

## Folders details
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file.
├── public # icons and images
└── src
    ├── App.css # Styles for the app.
    ├── App.js # Root of the app.
    ├── App.test.js # Used for testing.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── components/Book/Book.js # JS file for the component to render each shelf items.
    ├── containers/Home/Home.js # JS file for the component to render all components on the page.
    ├── containers/Search/Search.js # JS file for the component to render Seacrh books page.
    ├── icons # Helpful images for the app.
    ├── index.css # Global styles.
    └── index.js # Used for DOM rendering.
```
## Highlights:

* Created a new JS file for each component; following DOT (Do One Thing).
* Component state is passed down from parent to child component. SetState() is used to modify the state of the component.

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains following methods to perform necessary operations on the backend:

* [`getAll`](#getall) To get all the books from the API
* [`update`](#update) Update shelf information of the book
* [`search`](#search) Search book in the database

## Resources & Dependencies

* [react-router-dom](https://www.npmjs.com/package/react-router-dom)