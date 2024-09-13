import React, { useState, useEffect } from "react";
import { tabNames, tabData } from "../../data/data";

const ProfileTab = () => {
  const [activeTab, setActiveTab] = useState("Progress");
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      quote:
        "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
      author: "Rumi",
    },
    {
      id: 2,
      quote:
        "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
      author: "jhon",
    },
  ]);
  // async function getData() {
  //   const api = await fetch("https://dummyjson.com/quotes");
  //   const data = await api.json();
  //   setQuotes(data.quotes);
  // }

  async function getQuotes() {
    const Response = await fetch("https://dummyjson.com/quotes");
    const data = await Response.json();
    setQuotes(data.quotes);
  }

  useEffect(() => {
    getQuotes();

  },[activeTab]);

  console.log("filen is loded");
  return (
    <>
      <div style={{ border: "2px solid gray" }}>
        <ul>
          {/* //new code */}
          {tabNames.map((tab) => (
            <li
              className={activeTab === tab && "active"}
              onClick={() => {
                setActiveTab(tab);
              }}
            >
              {tab}
            </li>
          ))}
          {/* //old code */}
          {/* <li className={activeTab==="Profile" && "active"} onClick={(e)=>{changeTab(e.target.innerHTML)}}>Profile</li>
        <li className={activeTab==="Progress" && "active"} onClick={(e)=>{changeTab(e.target.innerHTML)}}>Progress</li>
        <li className={activeTab==="Notification" && "active"} onClick={(e)=>{changeTab(e.target.innerHTML)}}>Notification</li> */}
        </ul>
      </div>
      <div id="tabContent">
        {/* ==========first tab============== */}

        {tabData.map((data) => (
          <>
            {activeTab === data.tabTitle && (
              <div className="tabs">
                <h4>{data.tabTitle}</h4>
                {data.src && (
                  <img
                    width={"200px"}
                    height={"200px"}
                    src={data?.src}
                    alt={data?.tabTitle}
                  />
                )}
                {data.tabTitle === "Progress" && (
                  <input type="range" min={0} max={100} />
                )}
                <h1>{data.additionalDetail}</h1>
              </div>
            )}
          </>
        ))}
        {/* ==================tabs ended======================= */}
      </div>
      {quotes.map((item) => (
        <div
          style={{
            border: "2px solid blue",
            borderRadius: "20px",
            background: "black",
            color: "white",
            padding: "10px",
          }}
        >
          <h1>{item.author}</h1>
          <p>{item.quote}</p>
        </div>
      ))}
      <button onClick={()=>{localStorage.removeItem("token");window.location.reload()}} >Log out </button>
    </>
  );
};

export default ProfileTab;
