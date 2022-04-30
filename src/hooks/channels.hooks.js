import { useQuery } from "react-query";
import { channelDetails } from "../requests/channels.reequests";
export const useChannelDetails = (queryData, enabled = true) =>
  useQuery(
    ["fetchChannels", queryData],
    async () => {
      const res = await channelDetails(queryData);
      return res;
    },
    {
      enabled,
    }
  );
