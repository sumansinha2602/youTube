import React from "react";

const VideoCard = ({ info }) => {
  console.log("suman info", info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  console.log("suman snippet", channelTitle);
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg " alt="video" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title.substring(0, 20)}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
