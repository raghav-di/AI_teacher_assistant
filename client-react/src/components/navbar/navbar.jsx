import React from 'react'
import './navbar.css' 

import  ncclogo  from '../../allAssets/assets/logo/logo (1).png';
import navopt from '../../allAssets/assets/logo/navbaroptlogo.png';

import { Link } from 'react-router-dom';


export default function navbar() {
  return (
    <div>
        <div id="navbar">
          <div id="navoptns">
            <Link to={'/home'} className='link'>Home</Link>  
            <Link to={'/about'} className='link'>About</Link> 
            <Link to={'/camps'} className='link'>Camp</Link> 
            <Link to={'/photos'} className='link'>Photos</Link> 
          </div> 
        </div> 

        <div className="ncclogo">
          <Link to="/home"><img src={ncclogo} alt="" className="ncclogopic" /></Link>
        </div>
        

        <div id="navbtndiv">
          <input name='navbtn' type="checkbox" id='navbtn' className='navbt'/>
          <label htmlFor="navbtn" id='navlabel'><img src={navopt} className='navoptpic' alt="" /></label>
          
          <div id="nav">
            <div id="navopt">  
                <Link className='navoptnlink' to='/home'><div className='optbtn'><h4 className='opttxt'>Home</h4></div></Link>              
                <Link className='navoptnlink' to='/about'><div className='optbtn'><h4 className='opttxt'>About</h4></div></Link>
                <Link className='navoptnlink' to='/camps'><div className='optbtn'><h4 className='opttxt'>Camps</h4></div></Link>
                <Link className='navoptnlink' to='/photos'><div className='optbtn'><h4 className='opttxt'>Photos</h4></div></Link>
            </div>
          </div>
        </div>
    </div>
  )
}
