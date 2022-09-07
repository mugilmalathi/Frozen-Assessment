import React from "react";
import "../Home/home.scss";

import blog1 from "../Images/Svg/blog1.svg";
import blog2 from "../Images/Svg/blog2.svg";
import blog3 from "../Images/Svg/blog3.svg";

const Card10 = () => {
  const blogData = [
    {
      logo: blog1,
      data: "Jul 29, 2021",
      name: "Employee Engagement",
      detail:
        "The Link Between EX and Business Success feat. Nico Angelo Mallillin",
    },
    {
      logo: blog2,
      data: "Jul 16, 2021",
      name: "Employee Experience",
      detail: "Workplace employee engagement strategy in a tight budget",
    },
    {
      logo: blog3,
      data: "Dec 15, 2020",
      name: "People Science",
      detail:
        "10 HR Leaders in Singapore & Malaysia Reinventing Employee Experience",
    },
  ];

  return (
    <>
      <div
        style={{
          width: "57%",
          margin: "auto",
          marginBottom: "-50px",
          marginTop: "5%",
          fontSize: "30px",
          fontWeight: "bold",
          fontFamily: "Manrope",
        }}
      >
        What's New
      </div>
      <div className="card10">
        {
        blogData.map((e) => {
          return(
            <div className="blogcard">
            <div className="blogpic">
              <img src={e.logo} alt="" />
            </div>
            <div className="blogdatediv">
              <div className="blogdate">{e.data}</div>
              <div className="blogemp">{e.name}</div>
            </div>
            <div className="blogcont">
              {e.detail}
            </div>
          </div>
          )
        })
        }
      </div>
    </>
  );
};

export default Card10;
