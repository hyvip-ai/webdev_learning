import { useRouter } from "next/router";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { serialize } from "../../../utils/index";
import { usePlayLists } from "../../../hooks/playlists.hooks";
import PlayListCard from "../../../components/PlayListCard";
import { Playlist } from "../../../types/playlist";
import classes from "../../../../styles/playlist.module.css";
import Loader from "../../../components/Loader";
function ChannelDetails() {
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement | null>(null);

  const [queryData, setQueryData] = useState<{
    maxResults: number;
    part: string;
    channelId: string | null | string[];
  }>({
    maxResults: 200,
    part: "snippet,contentDetails",
    channelId: "",
  });

  useEffect(() => {
    if (router.query.channelId) {
      setQueryData((prev) => ({
        ...prev,
        channelId: router.query.channelId || null,
      }));
    }
  }, [router]);
  const { data: playlists, isLoading: loadingPlaylist } = usePlayLists(
    serialize(queryData),
    !!queryData.channelId
  );

  const handleVideoSearch = () => {
    if (searchRef.current?.value) {
      router.push({
        pathname: `/channels/${router.query.playlists}/search`,
        query: {
          q: searchRef.current.value,
          channelId: router.query.channelId,
        },
      });
    } else {
      alert("You must fill the input field");
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search within this channel"
          ref={searchRef}
        />
        <button onClick={handleVideoSearch}>Search</button>
      </div>
      <h1>Playlists</h1>
      <>
        {loadingPlaylist || !playlists ? (
          <Loader />
        ) : (
          <div className={classes.playlistContainer}>
            {playlists.items.map((playlist: Playlist) => (
              <PlayListCard
                key={playlist.id}
                id={playlist.id}
                {...playlist.snippet.thumbnails.high}
                {...playlist.contentDetails}
                {...playlist.snippet}
              />
            ))}
          </div>
        )}
      </>
    </>
  );
}

export default ChannelDetails;
