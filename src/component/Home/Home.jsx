import React, { useEffect, useState } from "react";
import "./home.scss";
import card1 from "../Images/card1-img.png";
import abibbev from "../Images/abibbev.jpg";
import airtel from "../Images/airtel.png";
import godrej from "../Images/godrej.png";
import groupm from "../Images/groupm.png";
import lenovo from "../Images/lenovo.png";
import makemytrip from "../Images/makemytrip.png";
import nivea from "../Images/nivea.png";
import novo from "../Images/novo.png";
import pernad from "../Images/pernad.png";
import timesinternet from "../Images/timesinternet.jpg";
import flag from "../Images/flag.png";

import comma from "../Images/Svg/comma.svg";
import slack from "../Images/Svg/slack.svg";
import teams from "../Images/Svg/teams.svg";
import { banner } from "../../Data";

const Home = () => {

  var timer;
  const [slider, setSlider] = useState(0);
 
  useEffect(()=>{
    timer = setInterval(()=>{
      setSlider(slider+1)
      if(slider == 4){
        setSlider(0)
      }
    }, 2000)
    return()=>{
      clearInterval(timer)
    }
  },[slider])

  const rightData = [
    {
      per : "80%",
      title1 : "Response Rate",
      title2 : "as compared to standard surveys loream ipsum dolor.",
      title3 : "Calculate your ROI -→"
    },
    {
      per : "15x",
      title1 : "ROI",
      title2 : "more quickly, with more engagement and less attrition.",
      title3 : "Calculate your ROI -→"
    }
  ]
  
  return (
    <div className="home">
      <div className="card1">
        <img src={card1} alt="" />
      </div>
      <div className="card2">
        <div className="card2-title1">
          Lorem Ipsum is simply dummy text of the printing defesa
        </div>
        <div className="card2-title2">
          Redefining the world of work with artificial intelligence, real-time
          pulse, and actionable insights.
        </div>
        <div className="card2-title3">
          {" "}
          <button>Schedule Demo</button>
        </div>
      </div>
      <div className="card3">
        <img src={abibbev} alt="" />
        <img src={airtel} alt="" />
        <img src={godrej} alt="" />
        <img src={groupm} alt="" />
        <img src={lenovo} alt="" />
        <img src={makemytrip} alt="" />
        <img src={nivea} alt="" />
        <img src={novo} alt="" />
        <img src={pernad} alt="" />
        <img src={timesinternet} alt="" />
      </div>
      <div className="card4">
        <div>
          <div>
            <div>
              <span style={{ fontWeight: "bolder" }}>100+</span> enterprices
              across.
            </div>
            <div>
              <span style={{ fontWeight: "bolder" }}>100+</span> countries trust
              us.
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              400,000+ employees worldwide open up to AppUp without hesitation
              and share invaluable feedback.
            </div>
            <div style={{ color: "blue", cursor: "pointer" }}>
              View All Customers -→
            </div>
          </div>
        </div>
      </div>
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
      <div className="card6">
        <div style={{ width: "50%", height: "40vh" }}>
          <div>
            <img src={comma} alt="" style={{ marginTop: "3%" }} />
          </div>
          <div
            style={{
              fontFamily: "Manrope",
              paddingLeft: "10%",
              paddingTop: "2%",
            }}
          >
            90% of employees who Appup connects [with] respond, which I thought
            was a great win. People are comfortable talking to AppUp; they are
            comfortable sharing their thoughts and what they are going through.
          </div>
          <div
            style={{
              width: "50%",
              fontSize: "18px",
              color: "#2872E0",
              fontWeight: "bold",
              paddingLeft: "10%",
              paddingTop: "2%",
            }}
          >
            Rohit Sandal CHRO, Mediacom
          </div>
        </div>
        <div 
        style={{
          width:"50%", 
          // border:"1px solid red", 
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
          }}>
          <img
          style={{
            width:"60%",
            height:"35vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:"50%"
          }}
          src={banner[slider].image} alt="" />
        </div>
      </div>

      <div className="card7">
        <div>
          <div className="what">What AppUp can bring you —</div>
          <div className="loream">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat sollicitudin odio, elementum interdum magna sagittis accumsan. Pellentesque laoreet purus vel convallis ultricies. In orci felis, posuere at interdum et, cursus nec metus.</div>
        </div>
        <div>
          {
            rightData.map((e)=>{
              return(
                <div className="highlight">
                  <div>{e.per}</div>
                  <div>{e.title1}</div>
                  <div>{e.title2}</div>
                  <div>{e.title3}</div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="card8"></div>
    </div>
  );
};

export default Home;
