export interface SearchResult {
  id: ID;
  snippet: Snippet;
  etag: string;
}

interface ID {
  videoId?: string;
}

interface Snippet {
  title: string;
  description: string;
  thumbnails: ThumbNail;
  channelId: string;
}

interface ThumbNail {
  default: ThumbnailData;
  high: ThumbnailData;
  medium: ThumbnailData;
}

interface ThumbnailData {
  height: number;
  width: number;
  url: string;
}
