import { useQuery } from "react-query";
import { playListItems } from "../requests/playListItems.requests";

export const usePlayListItems = (queryData, enabled = true) =>
  useQuery(
    ["fetchPlaylistItems", queryData],
    async () => {
      const res = await playListItems(queryData);
      return res;
    },
    {
      enabled,
    }
  );
