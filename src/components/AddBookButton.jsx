import Button from 'react-bootstrap/Button';

function AddBookButton(props) {
  return (
    <Button
      variant="primary"
      onClick={props.showBookForm}  // 
    >
      Add Book
    </Button>
  );
}

export default AddBookButton;