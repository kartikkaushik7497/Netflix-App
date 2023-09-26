import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
// import Home from "../Home/Home";

const Header = () => {
  return (
    <nav className="header">
      <a href="/">
        <img src={logo} alt="Netflix" />
      </a>
      <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recentlyadded">Recently Added</Link>
        <Link to="/mylist">My List</Link>
      </div>
      <ImSearch />
    </nav>
  );
};

export default Header;
