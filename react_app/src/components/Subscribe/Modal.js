import "./Subscribe.css";
import React, { useState } from "react";
import { Modal, Button, ModalBody } from "react-bootstrap";

function ModalBtn() {
    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                variant="primary"
                className="subscribe-btn"
                onClick={handleShow}
            >
                Subscribe Now
            </Button>
            <Modal show={showModal} onHide={handleClose}>
                <ModalBody>
                    <input
                        type="email"
                        id="email"
                        pattern=".+@globex.com"
                        size="30"
                        required
                    ></input>
                </ModalBody>
                <Button
                    variant="secondary"
                    className="subscribe-btn-small"
                    onClick={handleClose}
                >
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    className="subscribe-btn-small"
                    onClick={handleClose}
                >
                    Send
                </Button>
            </Modal>
        </>
    );
}

export default ModalBtn;
