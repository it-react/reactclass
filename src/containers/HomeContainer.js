import React from "react";
import ContentBlock from "../components/home";
import { RESPONSE } from "../helper";

const HomeContainer = () => {
  const opts = {
    height: "400",
    width: "840",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return <ContentBlock content={RESPONSE} opts={opts} onReady={onReady} />;
};

export default HomeContainer;
