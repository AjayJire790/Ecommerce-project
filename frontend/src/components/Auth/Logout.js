import React, { useContext } from "react";
import { useAuth } from "../../context/AuthContext";

const Logout = () => {
  const { logout } = useContext(useAuth);

  const handleLogout = () => {
    logout();
    alert("You have been logged out.");
  };

  return (
    <button onClick={handleLogout} style={styles.button}>
      Logout
    </button>
  );
};

const styles = {
  button: {
    padding: "10px 20px",
    backgroundColor: "#DC3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "20px auto",
    display: "block",
  },
};

export default Logout;
