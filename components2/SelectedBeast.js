import React from 'react';
import { Modal, Button } from 'react-bootstrap';


class SelectedBeast extends React.Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.hideBeast}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className='modal-img' src={this.props.source} alt={this.props.title} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.props.hideBeast}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }

}
export default SelectedBeast;