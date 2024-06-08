import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import TinyPlanetViewer from "./TinyPlanetViewer";

const PanoramaPopup = ({ onClose, image }) => {
  return (
    <Modal isOpen={true} toggle={onClose} size="lg">
      <ModalHeader toggle={onClose}>Panorama Viewer</ModalHeader>
      <ModalBody style={{ padding: 0 }}>
        <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
          <TinyPlanetViewer image={image.src} />
        </div>
      </ModalBody>
    </Modal>
  );
};

export default PanoramaPopup;
