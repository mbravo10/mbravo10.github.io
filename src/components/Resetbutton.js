import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

export default function ResetButton(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button as="input" type="reset" value="Reset" onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Are you sure you want to reset?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.onClick();
              handleClose();
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
