import React, { useState } from "react";
import { FaRegDotCircle, FaUser } from "react-icons/fa"; // Import user icon for login
import { MdOutlineCardTravel } from "react-icons/md";
import { MdKeyboardArrowDown, MdSearch } from "react-icons/md";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <section
        className="navbar-section"
        style={{
          fontFamily: "Poppins",
          backgroundColor: "#0572f0",
          marginTop: 0,
          padding: 0,
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <header
          className="header"
          style={{
            backgroundColor: "#0a69da",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 20px",
          }}
        >
          <p style={{ color: "white", margin: 0, fontSize: "10px", fontFamily: "Poppins", marginLeft: "35px" }}>
            24/7 Customer service <b>1-800-234-5678 </b>
          </p>
          <div style={{ display: "flex", gap: "15px", color: "white" }}>
            <p style={{ margin: 0, fontSize: "10px" }}>Shipping & return</p>
            <p style={{ margin: 0, fontSize: "10px", marginRight: "50px" }}>Track order</p>
          </div>
        </header>

        <nav
          className="nav-tronmart"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            marginLeft: "30px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginRight: "30px",  }}>
            <FaRegDotCircle style={{ color: "white", fontSize: "18px" }} />
            <h1 style={{ color: "white", margin: 0 }}>Tronmart</h1>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Search products"
              style={{
                padding: "5px 10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginRight: "30px"
              }}
              
            />
             <MdSearch style={{ color: "#0a69da", fontSize: "20px" }} />
           
          </div>
        </nav>
        <hr style={{border: "0.1px solid #ccc", margin: "10px 0", color: "black"}} />


        <nav className="nav-lists" style={{ backgroundColor: "#0572f0", marginLeft: "15px" }}>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              listStyle: "none",
             
              margin: 0,
              color: "white",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", gap: "20px", position: "relative" }}>
              <li
                style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "13px", color: "white", cursor: "pointer" }}
                onClick={() => setShowDropdown(!showDropdown)}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                All products
                <MdKeyboardArrowDown style={{ color: "white", fontSize: "10px" }} />
              </li>
              {showDropdown && (
                <ul
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "#0a69da",
                    listStyle: "none",
                    padding: "10px",
                    margin: 0,
                    color: "white",
                    borderRadius: "4px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    width: "200px",
                  }}
                >
                  <li style={{ padding: "8px 12px", cursor: "pointer" }}>Category 1</li>
                  <li style={{ padding: "8px 12px", cursor: "pointer" }}>Category 2</li>
                  <li style={{ padding: "8px 12px", cursor: "pointer" }}>Category 3</li>
                </ul>
              )}
              <li style={{ color: "white", fontSize: "13px" }}>Home appliances</li>
              <li style={{ color: "white", fontSize: "13px" }}>Audio & video</li>
              <li style={{ color: "white", fontSize: "13px" }}>Refrigerator</li>
              <li style={{ color: "white", fontSize: "13px" }}>New arrivals</li>
              <li style={{ color: "white", fontSize: "13px" }}>Today's deal</li>
              <li style={{ color: "white", fontSize: "13px" }}>Gift cards</li>
            </div>

            {/* Icon and Login Button on the right side */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginRight: "40px",
              }}
            >
              <div style={{ position: "relative" }}>
                <MdOutlineCardTravel style={{ color: "white", fontSize: "20px" }} />
                <span
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    backgroundColor: "#f00",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                  }}
                >
                  0
                </span>
              </div>
              <button
                style={{
                  fontFamily: "Poppins",
                  marginTop: "-10px",
                  padding: "5px 15px",
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  marginRight: "50px"
                }}
              >
                Login
              </button>
            </div>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
