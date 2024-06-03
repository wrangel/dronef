import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import PanoramaViewer from "./PanoramaViewer";

const PanoramaPopup = ({ onClose, image }) => {
  return (
    <Modal isOpen={true} toggle={onClose}>
      <ModalHeader toggle={onClose}>Panorama Viewer</ModalHeader>
      <ModalBody>
        <PanoramaViewer src={image.src} />
      </ModalBody>
    </Modal>
  );
};

export default PanoramaPopup;
