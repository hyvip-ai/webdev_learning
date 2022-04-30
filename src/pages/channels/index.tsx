import React from "react";
import ChannelCard from "../../components/ChannelCard";
import Loader from "../../components/Loader";
import { channelIds } from "../../data/channels";
import { useChannelDetails } from "../../hooks/channels.hooks";
import { Channel } from "../../types/channel";
import { serialize } from "../../utils/index";

function Channels() {
  const channelIdString = Object.values(channelIds).join(",");
  const queryData = {
    maxResults: 500,
    part: "snippet,contentDetails,statistics",
    id: channelIdString,
  };

  const { data: channels, isLoading: loadingChannels } = useChannelDetails(
    serialize(queryData)
  );

  return (
    <>
      {loadingChannels ? (
        <Loader />
      ) : (
        channels.items.map((channel: Channel) => (
          <ChannelCard
            key={channel.id}
            channelId={channel.id}
            {...channel.snippet.thumbnails.high}
            name={channel.snippet.title}
            description={channel.snippet.description}
            {...channel.statistics}
            customUrl={channel.snippet.customUrl}
          />
        ))
      )}
    </>
  );
}

export default Channels;
