//import photo from "./assets/1.jpg";

import React from "react";
import Masonry from "react-masonry-css";
import "./App.css";

const images = [
  { src: "https://picsum.photos/id/1015/500/300", alt: "Image 1" },
  { src: "https://picsum.photos/id/1018/500/300", alt: "Image 2" },
  { src: "https://picsum.photos/id/1019/500/300", alt: "Image 3" },
  { src: "https://picsum.photos/id/1020/500/300", alt: "Image 4" },
  { src: "https://picsum.photos/id/1022/500/300", alt: "Image 5" },
  { src: "https://picsum.photos/id/1023/500/300", alt: "Image 6" },
  { src: "https://picsum.photos/id/1024/500/300", alt: "Image 7" },
  { src: "https://picsum.photos/id/1025/500/300", alt: "Image 8" },
  { src: "https://picsum.photos/id/1026/500/300", alt: "Image 9" },
  { src: "https://picsum.photos/id/1027/500/300", alt: "Image 10" },
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

function App() {
  return (
    <div className="App">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map(({ src, alt }) => (
          <div key={src} className="my-masonry-grid_item">
            <img src={src} alt={alt} />
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default App;
