import React, { useState } from "react";
import { FaRegDotCircle, FaUser } from "react-icons/fa"; // Import user icon for login
import { MdOutlineCardTravel } from "react-icons/md";
import { MdKeyboardArrowDown, MdSearch } from "react-icons/md";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <section className="navbar-section">
        <header className="header">
          <p>
            24/7 Customer service <b>1-800-234-5678</b>
          </p>
          <div>
            <p>Shipping & return</p>
            <p>Track order</p>
          </div>
        </header>

        <nav className="nav-tronmart">
          <div className="logo-container">
            <FaRegDotCircle style={{ color: "white", fontSize: "18px" }} />
            <h1>Tronmart</h1>
          </div>

          <div className="search-container">
            <input type="text" placeholder="Search products" />
            <MdSearch className="search-icon" />
          </div>
        </nav>

        <hr />

        <nav className="nav-lists">
          <ul>
            <div className="dropdown">
              <li
                onClick={() => setShowDropdown(!showDropdown)}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                All products
                <MdKeyboardArrowDown style={{ color: "white", fontSize: "15px" }} />
              </li>
              {showDropdown && (
                <ul>
                  <li>Category 1</li>
                  <li>Category 2</li>
                  <li>Category 3</li>
                </ul>
              )}
              <li>Home appliances</li>
              <li>Audio & video</li>
              <li>Refrigerator</li>
              <li>New arrivals</li>
              <li>Today's deal</li>
              <li>Gift cards</li>
            </div>

            <div className="icon-login">
              <div className="icon">
                <MdOutlineCardTravel style={{ color: "white", fontSize: "20px" }} />
                <span className="super-count">0</span>
              </div>
              <button className="login-button">Login</button>
            </div>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
