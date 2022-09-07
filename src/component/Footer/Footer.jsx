import React from "react";
import "./Footer.scss";
import { BsSnow2 } from "react-icons/bs";

import fb from "../Images/Svg/fb.svg"
import yt from "../Images/Svg/yt.svg"
import In from "../Images/Svg/in.svg"
import insta from "../Images/Svg/insta.svg"
import twitter from "../Images/Svg/twitter.svg"

const Footer = () => {
  return (
    <div className="footer">

      <div className="foot1">
        <div>
          <BsSnow2
            style={{
              color: "#2872e0",
              fontSize:"40px",
              marginLeft:"60px",
              marginTop:"10px" ,
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",             
            }}
          />
        </div>
        <div>Get the latest on AppUp & company right</div>
        <div>
          <input
            className="footerinput"
            type="text"
            placeholder="Your Work Email"
          />
          <button className="footerbutton">Subscribe</button>
        </div>
      </div>

      <div className="foot2">
        <div>
          <h4 style={{fontWeight:"bold"}}>Products</h4>
          <h4>Automated Reachouts</h4>
          <h4>Custom Checkins</h4>
          <h4>Pricing</h4>
          <h4>Roadmap</h4>
          <h4>Integrations</h4>
        </div>
        <div>
          <h4 style={{fontWeight:"bold"}}>Solutions</h4>
          <h4>By Problem</h4>
          <h4>High Employee Attrition</h4>
          <h4>Low Employee Engagement</h4>
          <h4>Unrealiable Employee Surveys</h4>
        </div>
        <div>
          <h4 style={{fontWeight:"bold"}}>By Strategy</h4>
          <h4>HR Automation</h4>
          <h4>People Analytics</h4>
        </div>
        <div>
          <h4 style={{fontWeight:"bold"}}>By Industry</h4>
          <h4>BFSI</h4>
          <h4>Technology/IT</h4>
          <h4>FMCG</h4>
        </div>
        <div>
          <h4 style={{fontWeight:"bold"}}>By Size</h4>
          <h4>Enterprise</h4>
          <h4>Startups</h4>
        </div>
      </div>

      <div className="foot3">
        <div>
          <h4 style={{fontWeight:"bold"}}>Contact US</h4>
          <h4>help@company.com</h4>
          <h4>66 Wall Street #812, NY</h4>
        </div>
        <div>
          <h4 style={{fontWeight:"bold"}}>Customers</h4>
          <h4>Case Study</h4>
          <h4>Interviews</h4>
        </div>
        <div>
          <h4 style={{fontWeight:"bold"}}>Company</h4>
          <h4>About Us</h4>
          <h4>Careers</h4>
          <h4>Newsroom</h4>
        </div>
        <div>
          <h4 style={{fontWeight:"bold"}}>Resources</h4>
          <h4>Reports & Guids</h4>
          <h4>Blog</h4>
          <h4>Events</h4>
        </div>
        <div>
          <h4 style={{fontWeight:"bold"}}>ROI Calculator</h4>
          <h4>Engagement Grader</h4>
        </div>
      </div>

      <div className="foot4">
        <img className="sm" src={fb} alt="" />
        <img className="sm" src={In} alt="" />
        <img className="sm" src={twitter} alt="" />
        <img className="sm" src={insta} alt="" />
        <img className="sm" src={yt} alt="" />
      </div>

      <div className="foot5">
        <div className="copyright">© 2021 company Inc.</div>
        <div className="terms">
          <div>Terms of Use</div>
          <div>Privacy Policy</div>
          <div>Sub processor list</div>
          <div>Data Protection</div>
          <div>Disclaimer</div>
        </div>
        <div className="designed">Designed by Mugilarasan</div>
      </div>

    </div>
  );
};

export default Footer;
