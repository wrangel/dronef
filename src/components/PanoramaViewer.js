import React from "react";

const PanoramaViewer = ({ src }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        id="panorama-container"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <script src="https://cdn.pannellum.org/2.5/pannellum.js" async />
      <script>
        {`
          pannellum.viewer('panorama-container', {
            type: 'equirectangular',
            panorama: '${src}',
            autoRotate: -2,
            autoRotateInertia: -10,
            minPitch: -90,
            maxPitch: 90,
            minYaw: -180,
            maxYaw: 180,
          });
        `}
      </script>
    </div>
  );
};

export default PanoramaViewer;
