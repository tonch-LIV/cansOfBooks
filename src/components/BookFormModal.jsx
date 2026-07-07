import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function BookFormModal(props) {
  return (
    <Modal
      show={props.showModal}
      onHide={props.hideBookForm}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add a New Book</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>

          <Form.Group className='mb-3'>
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type='text' 
              placeholder='Enter Book Title'
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Description</Form.Label>
            <Form.Control 
              as='textarea' 
              rows={3} 
              placeholder='Enter a description'
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Status</Form.Label>

            <Form.Select>
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