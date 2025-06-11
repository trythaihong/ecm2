import logo from "../Assets/logo.png";
import card_icon from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{ padding: "6px 20px" }}
    >
      <div className="container">
        {/* Logo and Brand */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-3">
          <img src={logo} alt="Logo" style={{ height: "40px" }} />
          <p
            className="mb-0 text-brown fs-3 fw-light"
            style={{ color: "brown" }}
          >
            SHOPPING
          </p>
        </Link>

        {/* Hamburger toggle for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
            {[
              { key: "shop", label: "Shop", to: "/" },
              { key: "women", label: "Women", to: "/women" },
            ].map(({ key, label, to }) => (
              <li
                key={key}
                className="nav-item d-flex flex-column align-items-center"
                onClick={() => setMenu(key)}
                style={{ cursor: "pointer" }}
              >
                <Link
                  to={to}
                  className="nav-link"
                  style={{
                    color: menu === key ? "blueviolet" : "inherit",
                    fontWeight: "500",
                    fontSize: "20px",
                    textDecoration: "none",
                  }}
                >
                  {label}
                </Link>
                {menu === key && (
                  <hr
                    style={{
                      border: "none",
                      width: "80%",
                      height: "3px",
                      borderRadius: "10px",
                      backgroundColor: "red",
                      margin: "5px 0 0",
                    }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Login and Cart */}
          <div className="d-flex align-items-center gap-4">
            <Link to="/login">
              <button
                type="button"
                className="btn btn-outline-warning rounded-pill text-brown"
                style={{ width: "140px", fontWeight: "300", fontSize: "20px" }}
              >
                Login
              </button>
            </Link>

            <Link to="/cart" className="position-relative">
              <img src={card_icon} alt="Cart" style={{ height: "32px" }} />
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{
                  fontSize: "14px",
                  width: "22px",
                  height: "22px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
