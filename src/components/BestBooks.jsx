import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    this.getBooks();  // GET request to `/books`; `componentDidMount`

  }

  async getBooks() { // asks backend for books
    const response = await axios.get('http://localhost:3001/books');
    this.setState({ // stores books in state
      books: response.data,
    });
  }

  render() {
    return (
      <main className="page">
        <h1>Best Books</h1>

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