import React from "react";
import squidward from "url:../assets/squidward.gif";
import spgbob from "url:../assets/bob.gif";

export default function LoginPage() {
  React.useEffect(() => {
    document.querySelector(".bob").addEventListener("click", () => {
      document.querySelector(".faq").style.top = "75vh";
    });
  }, []);
  return (
    <div className="login-page">
      <div className="login-text">
        {" "}
        CREATE AN ACCOUNT ON OPEN AI AND GENERATE YOUR FREE API KEY !
      </div>
      <div className="login-pane">
        <div className="login-pane-element">
          <input placeholder="user-name" className="login-input"></input>
        </div>
        <div className="login-pane-element">
          <input className="login-input" placeholder="api-key"></input>
        </div>
        <button className="login-button"> Get-Started</button>
        {/* <img src={squidward} className="squid"></img> */}
      </div>
      <div className="faq">
        <div className="questions question-1">how to generate key ?</div>
        <div className="questions question-2">create account on Open AI ?</div>
      </div>
      <img className="bob" src={spgbob}></img>
    </div>
  );
}
