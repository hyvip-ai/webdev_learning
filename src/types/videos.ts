export interface Video {
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
}

interface Snippet {
  title: string;
  description: string;
  thumbnails: ThumbNail;
  channelId: string;
}

interface ContentDetails {
  videoId: string;
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
