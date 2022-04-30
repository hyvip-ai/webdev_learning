import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loader from "../../../../components/Loader";
import VideoCard from "../../../../components/VideoCard";
import { usePlayListItems } from "../../../../hooks/playListItems.hooks";
import { Video } from "../../../../types/videos";
import { serialize } from "../../../../utils";
import classes from "../../../../../styles/video.module.css";
function Videos() {
  const router = useRouter();

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
      )}
    </>
  );
}

export default Videos;
