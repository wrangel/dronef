import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "./App.css";
import VideoPopup from "./components/VideoPopup";
import ImagePopup from "./components/ImagePopup";
import PanoramaPopup from "./components/PanoramaPopup";
import PanoramaViewer from "./components/PanoramaViewer";

const images = [
  { src: "https://picsum.photos/id/1015/500/300", alt: "Image 1", tag: "a" },
  { src: "https://picsum.photos/id/1018/500/300", alt: "Image 2", tag: "b" },
  { src: "https://picsum.photos/id/1019/500/300", alt: "Image 3", tag: "c" },
  { src: "https://picsum.photos/id/1020/500/300", alt: "Image 4", tag: "d" },
  { src: "https://picsum.photos/id/1022/500/300", alt: "Image 5", tag: "e" },
  { src: "https://picsum.photos/id/1023/500/300", alt: "Image 6", tag: "f" },
  { src: "https://picsum.photos/id/1024/500/300", alt: "Image 7", tag: "a" },
  { src: "https://picsum.photos/id/1025/500/300", alt: "Image 8", tag: "b" },
  { src: "https://picsum.photos/id/1026/500/300", alt: "Image 9", tag: "a" },
  { src: "https://picsum.photos/id/1027/500/300", alt: "Image 10", tag: "b" },
  { src: "https://picsum.photos/id/1028/500/300", alt: "Image 1", tag: "c" },
  { src: "https://picsum.photos/id/1029/500/300", alt: "Image 2", tag: "d" },
  { src: "https://picsum.photos/id/1030/500/300", alt: "Image 3", tag: "e" },
  { src: "https://picsum.photos/id/1031/500/300", alt: "Image 4", tag: "f" },
  { src: "https://picsum.photos/id/1032/500/300", alt: "Image 5", tag: "g" },
  { src: "https://picsum.photos/id/1033/500/300", alt: "Image 6", tag: "a" },
  { src: "https://picsum.photos/id/1034/500/300", alt: "Image 7", tag: "b" },
  { src: "https://picsum.photos/id/1035/500/300", alt: "Image 8", tag: "c" },
  { src: "https://picsum.photos/id/1036/500/300", alt: "Image 9", tag: "d" },
  { src: "https://picsum.photos/id/1037/500/300", alt: "Image 10", tag: "e" },
  { src: "https://picsum.photos/id/1038/500/300", alt: "Image 1", tag: "a" },
  { src: "https://picsum.photos/id/1039/500/300", alt: "Image 2", tag: "b" },
  { src: "https://picsum.photos/id/1040/500/300", alt: "Image 3", tag: "c" },
  { src: "https://picsum.photos/id/1041/500/300", alt: "Image 4", tag: "a" },
  { src: "https://picsum.photos/id/1042/500/300", alt: "Image 5", tag: "b" },
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
  { src: "https://picsum.photos/id/1053/500/300", alt: "Image 6", tag: "a" },
  { src: "https://picsum.photos/id/1054/500/300", alt: "Image 7", tag: "b" },
  { src: "https://picsum.photos/id/1055/500/300", alt: "Image 8", tag: "c" },
  { src: "https://picsum.photos/id/1056/500/300", alt: "Image 9", tag: "a" },
  { src: "https://picsum.photos/id/1057/500/300", alt: "Image 10", tag: "b" },
  {
    thumbnail: "https://picsum.photos/id/1058/500/300", // Comes too from Amazon (all thumbnails are handled in another program)
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    alt: "Video 1",
    tag: "video",
  },
  {
    thumbnail:
      "https://static.vecteezy.com/system/resources/previews/010/015/888/non_2x/full-seamless-spherical-hdri-panorama-360-degrees-angle-view-on-gravel-road-among-fields-in-summer-evening-sunset-with-awesome-clouds-in-equirectangular-projection-ready-vr-ar-virtual-reality-content-photo.jpg", // Comes too from Amazon (all thumbnails are handled in another program)
    src: "https://static.vecteezy.com/system/resources/previews/010/015/888/non_2x/full-seamless-spherical-hdri-panorama-360-degrees-angle-view-on-gravel-road-among-fields-in-summer-evening-sunset-with-awesome-clouds-in-equirectangular-projection-ready-vr-ar-virtual-reality-content-photo.jpg",
    alt: "pano 1",
    tag: "panorama",
  },
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

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

  //... rest of the code remains the same...

  return (
    <div className="App">
      <Title />

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map(({ src, alt, tag, thumbnail }) => {
          if (tag === "video") {
            return (
              <div key={src} className="my-masonry-grid_item">
                <img
                  src={thumbnail}
                  alt={alt}
                  onClick={() => handleModalOpen({ src, alt, tag })}
                />

                {isModalOpen && selectedImage.tag === "video" && (
                  <VideoPopup onClose={handleModalClose}>
                    <video
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      controls
                    />
                  </VideoPopup>
                )}
              </div>
            );
          } else if (tag === "panorama") {
            return (
              <div key={src} className="my-masonry-grid_item">
                <img
                  src={thumbnail}
                  alt={alt}
                  onClick={() => handleModalOpen({ src, alt, tag })}
                />

                {isModalOpen && selectedImage.tag === "panorama" && (
                  <PanoramaPopup
                    onClose={handleModalClose}
                    image={selectedImage}
                  >
                    <PanoramaViewer src={selectedImage.src} />
                  </PanoramaPopup>
                )}
              </div>
            );
          } else {
            return (
              <div key={src} className="my-masonry-grid_item">
                <img
                  src={src}
                  alt={alt}
                  onClick={() => handleModalOpen({ src, alt, tag })}
                />

                {isModalOpen && selectedImage.tag !== "video" && (
                  <ImagePopup onClose={handleModalClose} image={selectedImage}>
                    <img src={selectedImage.src} alt={selectedImage.alt} />
                  </ImagePopup>
                )}
              </div>
            );
          }
        })}
      </Masonry>
    </div>
  );
}

export default App;
