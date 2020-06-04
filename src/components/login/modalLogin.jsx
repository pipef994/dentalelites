import React, { useState, Fragment, createRef } from 'react';
import { Modal, Button } from 'react-bootstrap'

class modalLogin extends React.Component {

  constructor(props, context) {
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show:false
    }
  }

  handleClose(){
    this.setState({show: false});
  }

  render() {
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              exit
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default modalLogin;