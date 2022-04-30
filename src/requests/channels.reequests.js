import http from "../utils/http";

export const channelDetails = (queryData) => http.get(`/channels?${queryData}`);
