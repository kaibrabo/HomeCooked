import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__icon"
                    src="http://logosvg.com/wp-content/uploads/Airbnb_logo.svg"
                    alt="airbnb logo"
                />
            </Link>

            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a Host</p>
                <ExpandMoreIcon />
                <LanguageIcon />
                <Avatar />
            </div>
        </div>
    );
}

export default Header;
