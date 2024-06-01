import { useState, useEffect, useRef } from "eact";
import { AdvancedVideo } from "@cloudinary/react";
import VideoThumbnail from "./components/VideoThumbnail";

// TODO Probably not needed here

const VideoThumbnail = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const playerRef = useRef(null);

  const getVideoThumbnail = (videoFile, time) => {
    return new Promise((resolve, reject) => {
      if (videoFile) {
        const video = document.createElement("video");
        video.srcObject = URL.createObjectURL(videoFile);
        video.currentTime = time;
        video.addEventListener("seeked", () => {
          const canvas = document.createElement("canvas");
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const thumbnailUrl = canvas.toDataURL();
          resolve(thumbnailUrl);
        });
      } else {
        reject(null);
      }
    });
  };

  useEffect(() => {
    if (videoFile) {
      getVideoThumbnail(videoFile, 1).then((thumbnailUrl) => {
        setThumbnail(thumbnailUrl);
      });
    }
  }, [videoFile]);

  return (
    <div>
      <input type="file" onChange={(e) => setVideoFile(e.target.files[0])} />
      {thumbnail && <img src={thumbnail} alt="Video Thumbnail" />}
      <AdvancedVideo
        ref={playerRef}
        controls
        width="100%"
        cldVid={cld.video(videoFile.id).delivery("q_auto").format("auto")}
        poster={cld
          .image(videoFile.id)
          .setAssetType("video")
          .delivery("q_auto")
          .format("auto:image")
          .toURL()}
      />
    </div>
  );
};

export default VideoThumbnail;
