import React, { useRef, useEffect } from "react";

function VideoPopup({ children, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();

      videoRef.current.addEventListener("ended", () => {
        videoRef.current.play();
      });
    }
  }, [videoRef]);

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <video
          ref={videoRef}
          src={children.props.src}
          alt={children.props.alt}
          controls
        />

        <button style={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    position: "relative",
    width: "80%",
    maxWidth: "500px",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "transparent",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default VideoPopup;
