import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from 'axios';

function EditBookModal(props) {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: ''
  });

  
  useEffect(() => {
    if (props.selectedBook) {
      setFormData({
        title: props.selectedBook.title,
        description: props.selectedBook.description,
        status: props.selectedBook.status,
      });
    }
  }, [props.selectedBook]);  // runs only when `selectedBook` changes

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return(
    <Modal
      show={props.showModal}  // props passed down from `BestBooks` for `showEditModal`
      onHide={props.hideEditForm}  //
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Book</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>

          <Form.Control
            id="title"  // required task
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>

          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>

          <Form.Select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option>Currently Reading</option>
            <option>Finished</option>
            <option>Want to Read</option>
          </Form.Select>
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={props.hideEditForm}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditBookModal;