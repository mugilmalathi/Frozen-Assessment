import React from "react";
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

const Home = () => {
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
            <div><span style={{fontWeight:"bolder"}}>100+</span> enterprices across.</div>
            <div><span style={{fontWeight:"bolder"}}>100+</span> countries trust us.</div>
          </div>
        </div>
        <div>
          <div>
            <div>
              400,000+ employees worldwide open up to AppUp without hesitation
              and share invaluable feedback.
            </div>
            <div style={{color:"blue"}}>View All Customers →</div>
          </div>
        </div>
      </div>
      <div className="card5"></div>
    </div>
  );
};

export default Home;
