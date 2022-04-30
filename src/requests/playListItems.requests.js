import http from "../utils/http";

export const playListItems = (queryData) =>
  http.get(`/playlistItems?${queryData}`);
