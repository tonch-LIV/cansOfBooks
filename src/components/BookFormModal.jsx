import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
        <p>The book form will go here.</p>
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