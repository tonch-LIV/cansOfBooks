import React from 'react';
import axios from 'axios';

import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/Button';

import AddBookButton from './AddBookButton';
import BookFormModal from './BookFormModal';
import { Button } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [], // app data
      showAddModal: false,  // UI state
      showEditModal: false,
      selectedBook: null,  // 
      loading: true,  // request state
      error: null,  // error state
    };
  };

  componentDidMount() {
    this.getBooks();  // GET request to `/books`; `componentDidMount`
  };

  showBookForm = () => {
    this.setState({
      showAddModal: true,
    });
  };

  hideBookForm = () => {
    this.setState({
      showAddModal: false,
    });
  };

  showEditForm = (book) => {
    this.setState({
      showEditModal: true,
      selectedBook: book,
    });
  };

  hideEditForm = () => {
    this.setState({
      showEditModal: false,
      selectedBook: null,
    });
  };

  handleAddBook = (newBook) => {
    this.setState((prevState) => ({
      books: [...prevState.books, newBook],
      showModal: false,
    }));
    console.log('BestBooks received:', newBook);
  };

  handleDeleteBook = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER}/books/${id}`);

      this.setState((prevState) => ({
        books: prevState.books.filter((book) => book._id !== id),
      }));
    
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  async getBooks() { // asks backend for books
    try{
      const response = await axios.get(`${import.meta.env.VITE_SERVER}/books`);
      this.setState({ // stores books in state
        books: response.data,
        loading: false,
        error: null,
      });

    } catch (error) {

      console.error(error);

      this.setState({
        loading: false,
        error: error.message,
      });
    }
  };

  render() {    
    if (this.state.loading) { // guard clause for loading 
      return (
        <main className="page">
          <h1>Best Books</h1>
          <p>Loading books...</p>
        </main>
      );
    };

    if (this.state.error) { // guard clause for error to load
      return (
        <main className="page">
          <h1>Best Books</h1>
          <p>Error: {this.state.error}</p>
        </main>
      );
    };

    return (
      <main className="page">
        <h1>Best Books</h1>
        <AddBookButton showBookForm={this.showBookForm} />

        <BookFormModal
          showModal={this.state.showModal}
          hideBookForm={this.hideBookForm}
          handleAddBook={this.handleAddBook}
        />

        {this.state.books.length > 0 ? ( // conditional to only render when more than 0 books : message
          <Carousel>
            {this.state.books.map((book) => (
              <Carousel.Item key={book._id}>
                <div className="book-slide">
                  <h2>{book.title}</h2>
                  <p>{book.description}</p>
                  <p className="book-status">{book.status}</p>

                  <Button
                    variant='danger' 
                    onClick={() => this.handleDeleteBook(book._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>No books found. The collection is empty.</p>
        )}
      </main>
    );
  }
}

export default BestBooks;