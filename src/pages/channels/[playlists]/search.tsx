import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loader from "../../../components/Loader";
import VideoCard from "../../../components/VideoCard";
import { useSearch } from "../../../hooks/search.hooks";
import { SearchResult } from "../../../types/search";
import { serialize } from "../../../utils/index";
import classes from "../../../../styles/video.module.css";

function Search() {
  const router = useRouter();
  const [videoQuery, setVideoQuery] = useState<{
    maxResults: number;
    part: string;
    channelId: string | null | string[];
    q: string | null | string[];
  }>({
    channelId: "",
    part: "snippet",
    maxResults: 500,
    q: "",
  });

  useEffect(() => {
    setVideoQuery((prev) => ({
      ...prev,
      channelId: router.query.channelId || null,
      q: router.query.q || null,
    }));
  }, [router]);

  const { data: videos, isLoading: loadingVideos } = useSearch(
    serialize(videoQuery),
    !!videoQuery.channelId || !!videoQuery.q
  );

  return (
    <>
      {loadingVideos || !videos ? (
        <Loader />
      ) : (
        <div className={classes.videoContainer}>
          {videos.items.length ? (
            videos.items.map((video: SearchResult) => (
              <VideoCard
                key={video.etag}
                id={video.id.videoId || ""}
                videoId={video.id.videoId || ""}
                {...video.snippet}
              />
            ))
          ) : (
            <h3>No videos found</h3>
          )}
        </div>
      )}
    </>
  );
}

export default Search;
