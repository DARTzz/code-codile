import React, { useEffect } from "react";
import logo from "url:../assets/logo.png";
import Rectifier from "./sub-components/Rectifier.js";

export default function StartPage() {
  // Attatching the event listener on the lets go button

  let letsGoCallback = function (e) {
    document.querySelector(
      ".slider-section"
    ).style.transform = `translateY(-100vh)`;
    document.querySelector(".start-logo").style.width = "10vw";
    document.querySelector(".start-logo").style.top = "101vh";
    document.querySelector(".start-logo").style.left = "1vw";

    // Removing the one time event listener
    document
      .querySelector(".slider-section")
      .removeEventListener("click", letsGoCallback);
  };
  React.useEffect(() => {
    document
      .querySelector(".start-button")
      .addEventListener("click", letsGoCallback);
  }, []);

  // Code for start page
  return (
    <div className="start-page">
      <img className="start-logo" src={logo} />
      <div className="start-text">
        Your all-in-one code <Rectifier />
      </div>
      <div className="start-button">LETS GO!!</div>
    </div>
  );
}
