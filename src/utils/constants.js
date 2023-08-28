const GOOGLE_API_KEY = "AIzaSyD7g5aY5wxyRs6wnZauEH0dbktU8VPTpFQ";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
