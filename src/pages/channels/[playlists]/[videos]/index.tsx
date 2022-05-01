import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loader from "../../../../components/Loader";
import VideoCard from "../../../../components/VideoCard";
import { usePlayListItems } from "../../../../hooks/playListItems.hooks";
import { Video } from "../../../../types/videos";
import { serialize } from "../../../../utils";
import classes from "../../../../styles/video.module.css";
import { useStore } from "../../../../store";
import shallow from "zustand/shallow";
function Videos() {
  const router = useRouter();

  const { showPlayGround, togglePlayGround } = useStore(
    (state: any) => ({
      showPlayGround: state.showPlayGround,
      togglePlayGround: state.togglePlayGround,
    }),
    shallow
  );

  const [queryData, setQueryData] = useState<{
    playlistId: string | string[] | null;
    maxResults: number;
    part: string;
  }>({
    playlistId: "",
    maxResults: 500,
    part: "snippet,contentDetails",
  });

  useEffect(() => {
    if (router.query.videos) {
      setQueryData((prev) => ({
        ...prev,
        playlistId: router.query.videos || null,
      }));
    }
  }, [router]);

  const { data: videos, isLoading: loadingVideos } = usePlayListItems(
    serialize(queryData),
    !!queryData.playlistId
  );

  return (
    <>
      {loadingVideos || !videos ? (
        <Loader />
      ) : (
        <>
          <div className={classes.videoContainer}>
            {videos.items.map((video: Video) => (
              <VideoCard
                key={video.id}
                id={video.id}
                {...video.contentDetails}
                {...video.snippet}
              />
            ))}
          </div>
          <div className="page_playground_btn">
            <button onClick={togglePlayGround}>Toggle PlayGround</button>
          </div>
          <div className="page_playground">
            {showPlayGround ? (
              <iframe
                src="https://www.programiz.com/javascript/online-compiler/"
                width="100%"
                height="500px"
                title="Javascript playground"
                frameBorder="0"
              ></iframe>
            ) : null}
          </div>
        </>
      )}
    </>
  );
}

export default Videos;
