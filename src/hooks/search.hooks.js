import { useQuery } from "react-query";
import { search } from "../requests/search.requests";

export const useSearch = (queryData, enabled = true) =>
  useQuery(
    ["searchResults", queryData],
    async () => {
      const res = await search(queryData);
      return res;
    },
    {
      enabled,
    }
  );
