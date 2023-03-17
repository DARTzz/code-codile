import React from "react";

export default function LoginPage(){
    return (<div className="login-page">
        <div className="login-text"> Create an account in Open AI for free and enter API key</div>
        <div className="login-pane">
            <div className="login-pane-element"><input placeholder="user-name" className="login-input"></input></div>
            <div className="login-pane-element"><input className="login-input" placeholder="api-key"></input></div>
            
                    <button className="login-button"> Get-Started</button>
        </div>
       <div className="faq"> <div className="questions question-1">how to generate key ?</div>
            <div className="questions question-2">create account on Open AI ?</div></div>
    </div>)
}