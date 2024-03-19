import React from "react";
import './Result.css';

function Result({secretNum, term}){
    let result;

    if (term) {
        if(term > secretNum) {
            result = "Higher";
        } else if(term < secretNum) {
            result = "Lower"; 
        } else if(term == secretNum) {
            result = "Yipee! Correct";
        } else {
            result = "Enter valid input";
        }
    }

    return(
        <div>
            <h3>You Guessed : {result}</h3>

        </div>
    );
}

export default Result;