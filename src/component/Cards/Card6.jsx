import React, { useEffect, useState } from "react";
import { banner } from "../../Data";
import "../Home/home.scss"
import comma from "../Images/Svg/comma.svg";

const Card6 = () => {
  var timer;
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    timer = setInterval(() => {
      setSlider(slider + 1);
      if (slider == 4) {
        setSlider(0);
      }
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [slider]);
  return (
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
          width: "50%",
          // border:"1px solid red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            width: "60%",
            height: "35vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
          }}
          src={banner[slider].image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Card6;
