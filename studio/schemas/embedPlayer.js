import React from "react";
import ReactPlayer from "react-player";
import { MdVideoLibrary } from "react-icons/md";

const VideoEmbed = ({ value }) => {
  const { url } = value
  return <ReactPlayer url={url} />;
};

export default {
  name: "embedPlayer",
  title: "Video Embed",
  type: "object",
  icon: MdVideoLibrary,
  fields: [
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: VideoEmbed,
  },
};
