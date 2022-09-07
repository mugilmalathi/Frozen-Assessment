import React from 'react'
import "../Home/home.scss"
import flag from "../Images/flag.png";

const Card5 = () => {
  return (
    <div className="card5">
        <div>
          <div>
            <div style={{ fontSize: "30px" }}>AppUp understands all</div>
            <div style={{ fontSize: "10px", paddingTop: "2%", color: "gray" }}>
              AppUp not only speaksall these languages, she sounds as natural
              and conversational as a human being. so employees can express
              themselves openly.
            </div>
            <div
              style={{ fontSize: "14px", paddingTop: "2%", cursor: "pointer" }}
            >
              View Supported Languages -→
            </div>
          </div>
        </div>
        <div>
          <img src={flag} alt="" />
        </div>
      </div>
  )
}

export default Card5