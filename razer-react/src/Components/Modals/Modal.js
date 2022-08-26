import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ViewModal() {
  return (
    <>
      <Modal
        show={this.props.show}
        onHide={() => this.props.onHide({ msg: "Cross Icon Clicked" })}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.body}
          <ul>
            {this.props.data.map((item) => (
              <li key={item.id}>
                Name: {item.name} | Address:{item.address}
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => this.props.onClick({ msg: "Modal closed" })}
          ></Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
