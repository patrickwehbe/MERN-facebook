import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Input from "@material-ui/core/Input";
import VideoCamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "./MessageSender.css";

function MessageSender() {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.file[0]) {
      setImage(e.target.file[0]);
    }
  };

  const handleSubmit = () => {
    console.log("submitting");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src="https://scontent.fbey14-1.fna.fbcdn.net/v/t1.0-9/69031466_2834298463250348_3437230252173033472_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=ogEXM1eGDp8AX_exeFy&_nc_ht=scontent.fbey14-1.fna&oh=2ad1989279447503894a639e2f512068&oe=5FAD8787" />
        <form action="">
          <input
            type="text"
            className="messageSender__input"
            placeholder="What's on your mind?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Input
            type="file"
            className="messageSender__fileSelector"
            onChange={handleChange}
          />
          <button onClick={handleSubmit} type="submit">
            {" "}
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideoCamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
