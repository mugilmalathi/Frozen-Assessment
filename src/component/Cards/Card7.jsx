import React from "react";
import "../Home/home.scss"

const Card7 = () => {
  const rightData = [
    {
      per: "80%",
      title1: "Response Rate",
      title2: "as compared to standard surveys loream ipsum dolor.",
      title3: "Calculate your ROI -→",
    },
    {
      per: "15x",
      title1: "ROI",
      title2: "more quickly, with more engagement and less attrition.",
      title3: "Calculate your ROI -→",
    },
  ];
  return (
    <div className="card7">
      <div>
        <div className="what">What AppUp can bring you —</div>
        <div className="loream">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat
          sollicitudin odio, elementum interdum magna sagittis accumsan.
          Pellentesque laoreet purus vel convallis ultricies. In orci felis,
          posuere at interdum et, cursus nec metus.
        </div>
      </div>
      <div>
        {rightData.map((e) => {
          return (
            <div className="highlight">
              <div>{e.per}</div>
              <div>{e.title1}</div>
              <div>{e.title2}</div>
              <div>{e.title3}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card7;
