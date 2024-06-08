import React, { useEffect, useRef } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import TinyPlanet from "./TinyPlanetViewer";

const PanoramaPopup = ({ onClose, image }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const tinyPlanet = new TinyPlanet(containerRef.current, image.src);
      return () => {
        // Cleanup if necessary
      };
    }
  }, [image.src]);

  return (
    <Modal isOpen={true} toggle={onClose}>
      <ModalHeader toggle={onClose}>Panorama Viewer</ModalHeader>
      <ModalBody>
        <div
          ref={containerRef}
          style={{ width: "100%", height: "100vh", overflow: "hidden" }}
        />
      </ModalBody>
    </Modal>
  );
};

export default PanoramaPopup;
