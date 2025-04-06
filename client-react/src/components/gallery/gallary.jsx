import React, { useState, useEffect} from 'react';

import './gallary.css'

import Navbar from '../navbar/navbar.jsx'

import {useLocation} from 'react-router-dom'
import axios from 'axios';

export default function Gallary() {


  const location=useLocation();
  const {opn,no}=location.state || {};
  /** Host URL */
  const host = "http://localhost:9000"
  const url = host + "/chat";
  const [data, setData] = useState("");


  // function validationCheck(str) {
  //   return str === null || str.match(/^\s*$/) !== null;
  // }



    useEffect(() => {
      const chatData = {
        chat: "give "+ no+ " questions from the topic "+ opn +"in chemistry saporated by the ,,, and dont add anything other then questions in the output",
        history: []
      };

    let headerConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
      };

      axios.post(url, chatData, headerConfig)
        .then((response) => {
          if (response.data.text) {
            setData(response.data.text);
            console.log("data is",data);
            console.log(opn);
          }
        })
        .catch((error) => { 
          console.error("Error fetching data:", error);
        });
    }, []);
    
  

  return (
    <>
            <Navbar/>
        
            <div id='allphotosbody'>
        
              <div id="heading"><h2 id="headh1">Interview Session</h2></div>

        
              <div className="container1">
                <div id="container1">

                  <div className="campset">

                    <div id="ques">
                      {
                      data.split(",,,").map((q)=>{
                        return(
                          <div className="que">{q}</div>
                        )
                      })}
                    </div>
        
                  </div> 
                </div>
              </div>    
        
                
            </div>
            </>
  )
  
}

