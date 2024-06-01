function ImagePopup({ onClose, image }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <img
          src={image.src}
          alt={image.alt}
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "100vh",
          }}
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
    maxWidth: "100%",
    maxHeight: "100vh",
    overflow: "auto",
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

export default ImagePopup;
