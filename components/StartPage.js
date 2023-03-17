import React from "react";
import logo from "url:../assets/logo.png";

export default function StartPage() {
    return (
        <div className="start-page">
            <div>
                <img className="logo" src={logo} />
            </div>
            <div className="">Your all-in-one code enhancer and rectifier</div>
            <div className="entry">let's go</div>
        </div>
    );
}
