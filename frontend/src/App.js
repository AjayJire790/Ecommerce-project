// import React, { useContext } from "react";
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link,
  // Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddProduct from "./pages/AddProduct";
import Navbar from "./navbar/navbar";
import { useAuth } from "./context/AuthContext";
// import { Navlogout } from "./context/loginTokle";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";
import ProfilePage from "./pages/ProfilePage";
import Logout from "./components/Auth/Logout";

function App() {
  const { user } = useAuth();
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-product" element={<AddProduct />} />
          {!user ? (
            <>
              <Route path="/signup" element={<Signup />}>
                Signup
              </Route>
              <Route path="/signin" element={<Signin />}>
                Login
              </Route>
            </>
          ) : (
            <>
              <Route path="/profile" element={<ProfilePage />}>
                Profile
              </Route>
              <Logout />
            </>
          )}
          {/* <Navlogout /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <Route
            path="/signin"
            element={!user ? <Login /> : <Navigate to="/profile" />}
          />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/profile"
            element={user ? <ProfilePage /> : <Navigate to="/login" />}
          /> */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
