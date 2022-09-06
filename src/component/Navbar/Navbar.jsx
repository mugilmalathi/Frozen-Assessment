import React from "react";
import "./nav.scss";
import { BsSnow2 } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <BsSnow2 style={{ color: "#2872e0" }} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <select
                  name=""
                  id=""
                  style={{ border: "1px solid transparent" }}
                >
                  <option value="">Products</option>
                  <option value="">Link 1</option>
                  <option value="">Link 2</option>
                  <option value="">Link3</option>
                </select>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <select
                  name=""
                  id=""
                  style={{ border: "1px solid transparent" }}
                >
                  <option value="">Solutions</option>
                  <option value="">Link 1</option>
                  <option value="">Link 2</option>
                  <option value="">Link3</option>
                </select>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Company
              </a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link" href="#">
                Resources
              </a>
            </li>
          </ul>
          <button className="schedule">Schedule Demo</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
