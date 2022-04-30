import React from "react";
import classes from "../../styles/video.module.css";
interface videoCardProps {
  id: string;
  videoId: string;
  title: string;
  description: string;
}

function VideoCard(props: videoCardProps) {
  return props.videoId ? (
    <div className={classes.videoCard}>
      <div>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${props.videoId}?rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h3>{props.title}</h3>
      </div>
    </div>
  ) : null;
}

export default VideoCard;
