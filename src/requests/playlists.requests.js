import http from "../utils/http";

export const playLists = (queryData) => http.get(`/playlists?${queryData}`);
