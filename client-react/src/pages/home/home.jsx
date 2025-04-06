import React,{useState} from 'react'
import './home.css'

import Navbar from '../../components/navbar/navbar.jsx'
// import MessageInput from '../../components/messageInput/MessageInput.jsx';

import hometoppic from '../../allAssets/assets/photo/hometoppic.png'

import {useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



export default function Home() {

    
    const navigate=useNavigate()
    const [purpose, setPurpose] = useState("");
    const [num, setNum] = useState();
    // const [query, setQuery] = useState("");
    // let query=;
  return(<>

    <Navbar/>
    
    <div id='homebody'>


        <div className="hometop">
            <img src={hometoppic} alt="" id="hometopimg"/>
        </div>

        <div id="homeintro1">

            <div className="subhi3">
                <div className="">
                    <div class="box">
                        {/* <MessageInput/> */}
                        <form>
                            <span class="text-center">Questions Details</span>
                            <div class="input-container">
                                <input type="text" required="" value={purpose} onChange={(e) => setPurpose(e.target.value)}/>
                                <label>Interview Purpose</label>		
                            </div>
                            <div class="input-container">		
                                <input type="mail" required="" value={num} onChange={(e) => setNum(e.target.value)}/>
                                <label>Total Questions</label>
                            </div>
                                <button type="button" class="btn" onClick={()=>{navigate("/gal",{state:{opn:purpose, no:num}})}}>submit</button>
                        </form>	
                    </div>
                </div>
            </div>
        </div>
        </div>

       
    </>
  )
}
