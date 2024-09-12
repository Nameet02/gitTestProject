import React from "react";
import HomePage from "./pages/HomePage";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileTab from "./components/ProfileTab";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Protected from "./route/Protected";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/profile"
            element={
              <Protected>
                <ProfileTab />
              </Protected>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
