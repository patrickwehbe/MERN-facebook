import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://scontent.fbey14-1.fna.fbcdn.net/v/t1.0-9/69031466_2834298463250348_3437230252173033472_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=ogEXM1eGDp8AX_exeFy&_nc_ht=scontent.fbey14-1.fna&oh=2ad1989279447503894a639e2f512068&oe=5FAD8787"
        message="This is a Message"
        timestamp="time"
        imageName="imageName"
        username="Patrick Wehbe"
      />
    </div>
  );
}

export default Feed;
