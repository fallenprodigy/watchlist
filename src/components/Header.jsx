import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">WatchList</Link>
          </div>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">Watch List</Link>
          </li>
          <li>
            <Link to="/watched">Watched</Link>
          </li>
          <li>
            <Link to="/add" className="btn">
              + Add
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;