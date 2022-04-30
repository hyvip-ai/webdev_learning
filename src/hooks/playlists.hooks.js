import { useQuery } from "react-query";
import { playLists } from "../requests/playlists.requests";

export const usePlayLists = (queryData, enabled = true) =>
  useQuery(
    ["fetchPlayLists", queryData],
    async () => {
      const res = await playLists(queryData);
      return res;
    },
    {
      enabled,
    }
  );
