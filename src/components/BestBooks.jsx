import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import AddBookButton from './AddBookButton';
import BookFormModal from './BookFormModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [], // app data
      showModal: false,  // UI state
      loading: true,  // request state
      error: null,  // error state
    };
  }

  componentDidMount() {
    this.getBooks();  // GET request to `/books`; `componentDidMount`
  }

  showBookForm = () => {
    this.setState({
      showModal: true,
    });
  };

  hideBookForm = () => {
    this.setState({
      showModal: false,
    });
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
  }

  render() {
    console.log("SERVER:", import.meta.env.VITE_SERVER);
    
    if (this.state.loading) { // guard clause for loading 
      return (
        <main className="page">
          <h1>Best Books</h1>
          <p>Loading books...</p>
        </main>
      );
    }

    if (this.state.error) { // guard clause for error to load
      return (
        <main className="page">
          <h1>Best Books</h1>
          <p>Error: {this.state.error}</p>
        </main>
      );
    }
    return (
      <main className="page">
        <h1>Best Books</h1>
        <AddBookButton showBookForm={this.showBookForm} />

        <BookFormModal
          showModal={this.state.showModal}
          hideBookForm={this.hideBookForm}
        />

        {this.state.books.length > 0 ? ( // conditional to only render when more than 0 books : message
          <Carousel>
            {this.state.books.map((book) => (
              <Carousel.Item key={book._id}>
                <div className="book-slide">
                  <h2>{book.title}</h2>
                  <p>{book.description}</p>
                  <p className="book-status">{book.status}</p>
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