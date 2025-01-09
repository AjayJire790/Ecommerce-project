import React, { useContext } from "react";
import { useAuth } from "../context/AuthContext";

const ProfilePage = () => {
  const { user } = useContext(useAuth);

  return (
    <div style={styles.container}>
      <h2>Welcome, {user?.name}!</h2>
      <p>Email: {user?.email}</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
};

export default ProfilePage;
