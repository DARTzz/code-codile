import React from "react";
import StartPage from "./StartPage.js";
import LoginPage from "./LoginPage.js";
import MainPage from "./MainPage.js";

export default function App(){

    return(<div className="app">
       <section className="slider-section">
         <StartPage/>
        <LoginPage/>
        <MainPage/>
       </section>
    </div>);
}

