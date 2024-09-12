import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [mobile, setMobile] = useState(null);

  async function handleRegister(e) {
    console.log("running")
    e.preventDefault();
    let loginInfo = {
      name: name,
      useremail: email,
      password: password,
      confirmPassword: confirmPassword,
      contact: mobile,
    };
    console.log(loginInfo);

    try {
      const response = await fetch(
        "https://flycatcher-backend.vercel.app/api/register",
        {
          method: "POST",
          body: JSON.stringify(loginInfo),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      alert("user registered successfully")
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="container flex">
      <div className="facebook-page flex">
        <div className="text">
          <h1>facebook</h1>
          <p>Connect with friends and the world </p>
          <p> around you on Facebook.</p>
        </div>
        <form onSubmit={(e) => {handleRegister(e)}}>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Enter your full Name"
            required=""
          />
          <input
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            type="number"
            placeholder="Enter your mobile number"
            required=""
          />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email or phone number"
            required=""
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            id="password"
            placeholder="Password"
            required=""
          />
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            required=""
          />
          <div className="link">
            <button type="submit" className="login">
              Register
            </button>
          </div>
          <hr />
          <div className="button">
            <Link to={"/login"}>Already have an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
