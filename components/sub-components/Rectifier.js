import React from "react";

let arr = ['', 'R', 'Re', 'Rec', 'Rect', 'Recti', 'Rectif', 'Rectifi', 'Rectifie', 'Rectifier', 'Rectifier', 'Rectifie', 'Rectifi', 'Rectif', 'Recti', 'Rect', 'Rec', 'Re', 'R', '', 'E', 'En',  'Enh',  'Enha',  'Enhan',  'Enhanc',  'Enhance',  'Enhancer',  'Enhancer', 'Enhance', 'Enhanc', 'Enhan', 'Enha', 'Enh', 'En', 'E', '', 'C',  'Co',  'Com',  'Comp', 'Compa', 'Compan', 'Compani', 'Compani',  'Companio', 'Companion', 'Companion', 'Companio', 'Compani', 'Compan', 'Compa', 'Comp', 'Com', 'Co', 'C'];
let i = 0;

export default function Rectifier(){
    let [text, changeText] = React.useState("");

    // callback for setInterval

    function intervalCallback(){
        if(i == 55){
            i=-1;
        }
            i++;
        changeText(arr[i]);
    }
    
    React.useEffect(()=>{
        setInterval(intervalCallback , 200);
    },[]);
    
    
    // this is for demo
    React.useEffect(()=>{
        console.log("text was changed !");
    },[text]);

    return (<span className="rectifier">{text}</span>)
}