
import React, { useState } from 'react';
import './VideoPlayer.css'; // CSS faylni import qilish
import PlayIcon from "../../../assets/logos/play.webp";
const VideoPlayer =React.memo(({ videoId }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePlayClick = () => {
    setIsLoaded(true);
  };

  return (
    <div style={{position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", maxWidth: "100%",marginRight:"20px",marginLeft:"20px",marginBottom:"20px"}}>
      {!isLoaded ? (
        <div
        style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%",borderRadius:"30px" }}
          className="video-thumbnail"
        >
          <button onClick={handlePlayClick} className="play-button">
            <img src={PlayIcon} alt="Play icon" loading='lazy' />
          </button>
        </div>
      ) : (
          <iframe
           style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%",borderRadius:"30px"}}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="Usat advertisement video" 
          />
      )}
    </div>
  );
});

export default VideoPlayer;
