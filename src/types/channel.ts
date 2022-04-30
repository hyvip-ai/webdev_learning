export interface Channel {
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

interface Snippet {
  title: string;
  description: string;
  customUrl: string;
  thumbnails: ThumbNail;
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

interface Statistics {
  hiddenSubscriberCount: boolean;
  subscriberCount: string;
  videoCount: string;
  viewCount: string;
}
