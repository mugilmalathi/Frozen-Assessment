import React, { useEffect, useState } from "react";
import "./home.scss";

import Card1 from "../Cards/Card1";
import Card2 from "../Cards/Card2";
import Card3 from "../Cards/Card3";
import Card4 from "../Cards/Card4";
import Card5 from "../Cards/Card5";
import Card6 from "../Cards/Card6";
import Card7 from "../Cards/Card7";
import Card8 from "../Cards/Card8";
import Card9 from "../Cards/Card9";
import Card10 from "../Cards/Card10";

const Home = () => {
  return (
    <div className="home">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
      {/* <Card8 /> */} //Parllax Effect
      <Card9 />
      <Card10 />
    </div>
  );
};

export default Home;
