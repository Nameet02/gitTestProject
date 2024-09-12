import React, { useState } from "react";
import "../assets/style/login.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function handleLogin(e) {
    console.log("running");
    e.preventDefault();
    let loginInfo = {
      email: email,
      password: password,
    };
    console.log(loginInfo);

    try {
      const response = await fetch(
        "https://flycatcher-backend.vercel.app/api/login",
        {
          method: "POST",
          body: JSON.stringify(loginInfo),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if(data.status==="success"){
          alert("user logged in successfully");
          localStorage.setItem("token",data.token)
          window.location.replace("/profile")
      }else{
        alert("invalid credintial!")
      }
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
        <form onSubmit={(e)=>{handleLogin(e)}}>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email or phone number" required="" />
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" required="" />
          <div className="link">
            <button type="submit" className="login">
              Login
            </button>
            <a href="#" className="forgot">
              Forgot password?
            </a>
          </div>
          <hr />
          <div className="button">
            <Link to={"/signup"}>Create new account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
