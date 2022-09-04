/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import "bootstrap";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../assets/scss/Menu.css";
import AppNavBar from "./NavBar";

import { useNavigate } from "react-router-dom";

const Menu: React.FC<any> = (props) => {
  const navigate = useNavigate();
  const startClick = (name) => {
    switch (name) {
      case "uso":
        navigate("/uso");
        break;
      case "sudo":
        navigate("/sudotype");
        break;
      case "stroop":
        navigate("/stroop");
        break;
    }
  };

  const arr = props.text.split("/");
  console.log(arr);

  return (
    <>
      <AppNavBar />
      <div className="container-menu">
        <div className="row align-items-center">
          <div className="col" id="left">
            <h1>{props.title}</h1>
            <button className="btn" onClick={() => startClick(props.name)}>
              Play game
            </button>
          </div>
          <div className="col" id="right">
            <h3>About this test</h3>
            {arr.map((a) => {
              return <p>{a}</p>;
            })}
            {/* <p>{props.text}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
