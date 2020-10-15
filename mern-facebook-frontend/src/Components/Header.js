import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
          alt="Facebook Logo"
        />
      </div>
      <div className="header__input">
        <SearchIcon />
        <input type="text" placeholder="search" />
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon />
        </div>

        <div className="header__option">
          <FlagIcon />
        </div>
        <div className="header__option">
          <SubscriptionOutlinedIcon />
        </div>
        <div className="header__option">
          <HomeIcon />
        </div>
        <div className="header__option">
          <HomeIcon />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src="https://scontent.fbey14-1.fna.fbcdn.net/v/t1.0-9/69031466_2834298463250348_3437230252173033472_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=ogEXM1eGDp8AX_exeFy&_nc_ht=scontent.fbey14-1.fna&oh=2ad1989279447503894a639e2f512068&oe=5FAD8787" />
          <h4>Patrick Wehbe</h4>
          <HomeIcon />
          <HomeIcon />
          <HomeIcon />
          <HomeIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
