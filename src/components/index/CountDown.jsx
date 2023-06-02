import React from "react";
import { useState, useEffect } from "react";
import { Constants } from "../../utils/Constants";
import { CookieMap } from "./request/CookieMap";

export default function Countdown(props) {
  const startingMinutes = new Constants().TIME_SECURE_EXIT; 
  const startingSeconds = 0
  const [mins, setMinutes] = useState(startingMinutes);
  const [secs, setSeconds] = useState(startingSeconds);
  
  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      }
      if (secs === 0) {
        if (mins === 0) {
          clearInterval(sampleInterval);
          props.logout(false);
          new CookieMap().deleteCookies();
          console.log("fin del tiempo");
        } 
        else {
          setMinutes(mins - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
      
    };
  });

  return (
    <>
      {` ${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}
    </>
  
    
  );
}