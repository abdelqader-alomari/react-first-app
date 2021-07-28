import React from 'react';
import { Card, Modal } from 'react-bootstrap'

class SelectedBeast extends React.Component {
    render() {
        return (
            <Modal show={this.props.show} hide={this.props.hide}>
                <Modal.Header closeButton onClick={this.props.hide}>
                    <Modal.Title>{this.props.selected.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card>
                        <Card.Img variant="top" src={this.props.selected.source} alt={this.props.selected.title} title={this.props.selected.title} />
                    </Card>
                    <Card.Body>
                        <Card.Text>{this.props.selected.description}</Card.Text>
                    </Card.Body>
                </Modal.Body>
            </Modal>
        );
    }

}
export default SelectedBeast;