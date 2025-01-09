// import React, { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>
          MyEcommerce
        </Link>
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/add-product" style={styles.link}>
            Add Product
          </Link>
        </li>
        <li style={styles.navItem}>
          {!user ? (
            <div style={styles.authLinks}>
              <Link to="/signin" style={styles.link}>
                Sign In
              </Link>
              <Link to="/signup" style={styles.link}>
                Sign Up
              </Link>
            </div>
          ) : (
            <>
              <Link to="/profile" style={styles.link}>
                Profile
              </Link>
              <button onClick={logout} style={styles.logoutButton}>
                Logout
              </button>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2C3E50",
    padding: "10px 20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ECF0F1",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
  },
  navItem: {
    fontSize: "18px",
  },
  link: {
    textDecoration: "none",
    color: "#ECF0F1",
    transition: "color 0.3s",
  },
  authLinks: {
    display: "flex",
    gap: "10px", // Add gap between Sign In and Sign Up links
  },
  logoutButton: {
    backgroundColor: "#1ABC9C",
    color: "#ECF0F1",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default Navbar;
