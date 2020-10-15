import React from "react";
import Story from "./Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119733779/original/cc2e5944473be8570911a5f558f0d28a150e3cdc/paint-you-a-custom-abstract-portrait-drawing-illustration.png"
        profileSrc=""
        title="Patrick Wehbe "
      />
      <Story
        image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119733779/original/cc2e5944473be8570911a5f558f0d28a150e3cdc/paint-you-a-custom-abstract-portrait-drawing-illustration.png"
        profileSrc=""
        title="Patrick Wehbe "
      />
      <Story
        image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119733779/original/cc2e5944473be8570911a5f558f0d28a150e3cdc/paint-you-a-custom-abstract-portrait-drawing-illustration.png"
        profileSrc=""
        title="Patrick Wehbe "
      />
    </div>
  );
};

export default StoryReel;
