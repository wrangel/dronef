import PanoramaViewer from "PanoramaViewer.js";

const PanoramaPopup = ({ onClose, image }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>

        <PanoramaViewer src={image.src} />
      </div>
    </div>
  );
};

export default PanoramaPopup;
