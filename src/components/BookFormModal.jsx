import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function BookFormModal(props) {

  const [formData, setFormData] = useState({ // matches backend
    title: '',
    description: '',
    status: 'Currently Reading',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;  // destructured

    const updatedFormData = ({
      ...formData,  // copies current/starting state
      [name]: value,  // updates property changed
    });
    console.log("handleChange fired!");
    console.log(event.target);
    console.log(updatedFormData);
    
    setFormData(updatedFormData)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();  // prevents refresh after submit

    console.log(formData);
    console.log(import.meta.env.VITE_SERVER);
    try {
      const token = await props.getAccessTokenSilently();

      const response = await axios.post(
        `${import.meta.env.VITE_SERVER}/books`, 
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      props.handleAddBook(response.data);
    } catch (error) {
      console.error(error);

      console.log(error.response);
      console.log(error.response?.status);
      console.log(error.response?.data);
    }
  };

  return (
    <Modal
      show={props.showModal}
      onHide={props.hideBookForm}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add a New Book</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>

          <Form.Group className='mb-3'>
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type='text'
              name='title'
              placeholder='Enter Book Title'
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Description</Form.Label>
            <Form.Control 
              as='textarea' 
              rows={3} 
              name='description' 
              placeholder='Enter a description' 
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Status</Form.Label>

            <Form.Select
              name='status' 
              onChange={handleChange}
            >
              {/* <option value=''>Select a status...</option> */}
              <option>Currently Reading</option>
              <option>Finished</option>
              <option>Want to Read</option>
            </Form.Select>
          </Form.Group>

          <Button 
            variant='primary' 
            type='submit'
          >
            Save Book
          </Button>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={props.hideBookForm}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookFormModal;