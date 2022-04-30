import http from "../utils/http";

export const search = (queryData) => http.get(`/search?${queryData}`);
