import React from "react";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMoreOutlined";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent.fbey14-1.fna.fbcdn.net/v/t1.0-9/69031466_2834298463250348_3437230252173033472_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=ogEXM1eGDp8AX_exeFy&_nc_ht=scontent.fbey14-1.fna&oh=2ad1989279447503894a639e2f512068&oe=5FAD8787"
        title="Patrick Wehbe"
      ></SidebarRow>
      <SidebarRow Icon={LocalHospitalIcon} title="COVID 19"></SidebarRow>
      <SidebarRow Icon={EmojiFlagIcon} title="Pages"></SidebarRow>
      <SidebarRow Icon={PeopleIcon} title="Friends"></SidebarRow>
      <SidebarRow Icon={ChatIcon} title="Messages"></SidebarRow>
      <SidebarRow Icon={StoreFrontIcon} title="Shop"></SidebarRow>
      <SidebarRow Icon={VideoLibraryIcon} title="Stories"></SidebarRow>
      <SidebarRow Icon={ExpandMoreIcon} title="More Options"></SidebarRow>
    </div>
  );
}

export default Sidebar;
