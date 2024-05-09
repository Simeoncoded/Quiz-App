import React from "react";
import "./Quiz.css";


export default function Quiz(){
    return <div className="container">
        <h1>Quiz App</h1>
        <hr />
        <h3>Which device is required for the Internet connection?</h3>
        <ul>
            <li>Modem</li>
            <li>Router</li>
            <li>Lan Cable</li>
            <li>Pen Drive</li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 5 Questions</div>
    </div>
}