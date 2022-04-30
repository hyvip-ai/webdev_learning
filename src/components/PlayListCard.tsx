import React from "react";
import Image from "next/image";
import classes from "../styles/playlist.module.css";
import { limitDescription } from "../utils";
import { useRouter } from "next/router";

interface playlistProps {
  url: string;
  height: number;
  width: number;
  title: string;
  description: string;
  channelId: string;
  id: string;
  itemCount: number;
}

function PlayListCard(props: playlistProps) {
  const router = useRouter();

  const videoHandler = () => {
    router.push(
      `/channels/${router.query.playlists}/${props.id}?channelId=${router.query.channelId}`
    );
  };

  return (
    <div className={classes.playlist}>
      <div className={classes.outer} style={{ height: `${props.height}px` }}>
        <div>
          <Image
            src={
              props.url.includes("no_thumbnail")
                ? "https://www.vidpaw.com/img/blog/youtube-not-showing-videos-thumbnails.jpg"
                : props.url
            }
            height={props.height}
            width={props.width}
            layout="fixed"
            alt={props.title}
            objectFit="cover"
          />
        </div>
        <div className={classes.overlay}>
          <h1 className={classes.count}>
            {props.itemCount} <br /> videos
          </h1>
        </div>
      </div>
      <div>
        <h3 onClick={videoHandler} className={classes.title}>
          {props.title}
        </h3>
        <p>
          {props.description
            ? limitDescription(props.description)
            : "No description available"}
        </p>
      </div>
    </div>
  );
}

export default PlayListCard;
