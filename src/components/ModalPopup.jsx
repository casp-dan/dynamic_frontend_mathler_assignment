import {
    useDynamicContext
} from "@dynamic-labs/sdk-react-core";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { StatBlock } from "./StatBlock";

export function ModalPopup() {
    const [show, setShow] = useState(false);
    const { user } = useDynamicContext();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Stats
            </Button>
            <Modal 
                show={show}
                onHide={handleClose}
            >
                <Modal.Header>
                    <Button onClick={handleClose}>
                        X
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <StatBlock  user={user}/>
                </Modal.Body>
            </Modal>
        </>
    );
}