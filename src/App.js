import React, { useState } from "react";
import "./App.css";
import VideoPopup from "./components/VideoPopup";
import ImagePopup from "./components/ImagePopup";
import PanoramaPopup from "./components/PanoramaPopup";
import Masonry from "react-masonry-css";

const images = [
  { src: "https://picsum.photos/id/1015/400/800", alt: "Image 1", tag: "a" },
  { src: "https://picsum.photos/id/1018/500/300", alt: "Image 2", tag: "b" },
  { src: "https://picsum.photos/id/1019/500/300", alt: "Image 3", tag: "c" },
  { src: "https://picsum.photos/id/1020/500/300", alt: "Image 4", tag: "d" },
  { src: "https://picsum.photos/id/1022/500/300", alt: "Image 5", tag: "e" },
  { src: "https://picsum.photos/id/1023/500/300", alt: "Image 6", tag: "f" },
  { src: "https://picsum.photos/id/1024/500/300", alt: "Image 7", tag: "a" },
  { src: "https://picsum.photos/id/1025/500/300", alt: "Image 8", tag: "b" },
  { src: "https://picsum.photos/id/1026/500/300", alt: "Image 9", tag: "a" },
  { src: "https://picsum.photos/id/1027/1000/100", alt: "Image 10", tag: "b" },
  { src: "https://picsum.photos/id/1028/500/1000", alt: "Image 1", tag: "c" },
  { src: "https://picsum.photos/id/1029/600/600", alt: "Image 2", tag: "d" },
  { src: "https://picsum.photos/id/1030/600/200", alt: "Image 3", tag: "e" },
  { src: "https://picsum.photos/id/1031/700/500", alt: "Image 4", tag: "f" },
  { src: "https://picsum.photos/id/1032/500/300", alt: "Image 5", tag: "g" },
  { src: "https://picsum.photos/id/1033/500/300", alt: "Image 6", tag: "a" },
  { src: "https://picsum.photos/id/1034/500/300", alt: "Image 7", tag: "b" },
  { src: "https://picsum.photos/id/1035/700/100", alt: "Image 8", tag: "c" },
  { src: "https://picsum.photos/id/1036/400/400", alt: "Image 9", tag: "d" },
  { src: "https://picsum.photos/id/1037/500/300", alt: "Image 10", tag: "e" },
  { src: "https://picsum.photos/id/1038/600/600", alt: "Image 1", tag: "a" },
  { src: "https://picsum.photos/id/1039/500/300", alt: "Image 2", tag: "b" },
  { src: "https://picsum.photos/id/1040/500/300", alt: "Image 3", tag: "c" },
  { src: "https://picsum.photos/id/1041/700/200", alt: "Image 4", tag: "a" },
  { src: "https://picsum.photos/id/1042/900/400", alt: "Image 5", tag: "b" },
  { src: "https://picsum.photos/id/1043/500/300", alt: "Image 6", tag: "c" },
  { src: "https://picsum.photos/id/1044/500/300", alt: "Image 7", tag: "d" },
  { src: "https://picsum.photos/id/1045/500/300", alt: "Image 8", tag: "e" },
  { src: "https://picsum.photos/id/1046/500/300", alt: "Image 9", tag: "f" },
  { src: "https://picsum.photos/id/1047/500/300", alt: "Image 10", tag: "g" },
  { src: "https://picsum.photos/id/1048/500/300", alt: "Image 1", tag: "a" },
  { src: "https://picsum.photos/id/1049/500/300", alt: "Image 2", tag: "b" },
  { src: "https://picsum.photos/id/1050/500/300", alt: "Image 3", tag: "c" },
  { src: "https://picsum.photos/id/1051/500/300", alt: "Image 4", tag: "d" },
  { src: "https://picsum.photos/id/1052/500/300", alt: "Image 5", tag: "e" },
  { src: "https://picsum.photos/id/1053/600/390", alt: "Image 6", tag: "a" },
  { src: "https://picsum.photos/id/1054/400/90", alt: "Image 7", tag: "b" },
  { src: "https://picsum.photos/id/1055/445/300", alt: "Image 8", tag: "c" },
  { src: "https://picsum.photos/id/1056/50/200", alt: "Image 9", tag: "a" },
  { src: "https://picsum.photos/id/1057/500/300", alt: "Image 10", tag: "b" },
  {
    thumbnail: "https://picsum.photos/id/1058/500/300",
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    alt: "Video 1",
    tag: "video",
  },
  {
    thumbnail:
      "https://static.vecteezy.com/system/resources/previews/010/015/888/non_2x/full-seamless-spherical-hdri-panorama-360-degrees-angle-view-on-gravel-road-among-fields-in-summer-evening-sunset-with-awesome-clouds-in-equirectangular-projection-ready-vr-ar-virtual-reality-content-photo.jpg",
    src: "https://static.vecteezy.com/system/resources/previews/010/015/888/non_2x/full-seamless-spherical-hdri-panorama-360-degrees-angle-view-on-gravel-road-among-fields-in-summer-evening-sunset-with-awesome-clouds-in-equirectangular-projection-ready-vr-ar-virtual-reality-content-photo.jpg",
    alt: "pano 1",
    tag: "panorama",
  },
];

const Title = () => {
  return (
    <div className="title">
      <h1>Dronef Vatias</h1>
    </div>
  );
};

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleModalOpen = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
    document.addEventListener("keydown", handleEscapeKey);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedImage(null);
    document.removeEventListener("keydown", handleEscapeKey);
  };

  const handleEscapeKey = (event) => {
    if (event.key === "Escape" || event.keyCode === 27) {
      handleModalClose();
    }
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="App">
      <Title />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        columnWidth={300} // Adjust this value according to your design
      >
        {images.map(({ src, alt, tag, thumbnail }) => (
          <div key={src} className="grid-item">
            <img
              src={thumbnail || src}
              alt={alt}
              onClick={() => handleModalOpen({ src, alt, tag })}
            />
          </div>
        ))}
      </Masonry>

      {isModalOpen && selectedImage && (
        <>
          {selectedImage.tag === "video" && (
            <VideoPopup onClose={handleModalClose}>
              <video src={selectedImage.src} alt={selectedImage.alt} controls />
            </VideoPopup>
          )}
          {selectedImage.tag === "panorama" && (
            <PanoramaPopup onClose={handleModalClose} image={selectedImage} />
          )}
          {selectedImage.tag !== "video" &&
            selectedImage.tag !== "panorama" && (
              <ImagePopup onClose={handleModalClose} image={selectedImage}>
                <img src={selectedImage.src} alt={selectedImage.alt} />
              </ImagePopup>
            )}
        </>
      )}
    </div>
  );
}

export default App;
