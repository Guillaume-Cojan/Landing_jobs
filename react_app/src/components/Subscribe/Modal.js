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
                className={
                    showModal === false
                        ? "subscribe-btn"
                        : "subscribe-btn-hidden"
                }
                onClick={handleShow}
            >
                Subscribe Now
            </Button>
            <Modal show={showModal} onHide={handleClose} className="modal">
                <ModalBody>
                    <input
                        type="email"
                        name="email"
                        className="email-input"
                        placeholder="Enter your email here"
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
                    type="submit"
                    value="Send"
                    onClick={handleClose}
                >
                    Send
                </Button>
            </Modal>
        </>
    );
}

export default ModalBtn;
