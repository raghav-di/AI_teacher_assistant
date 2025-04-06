import React from 'react'
import './photos.css'

import pic1 from '../../allAssets/assets/photo/rdc (2).jpg'
import pic2 from '../../allAssets/assets/photo/aac (2).jpg'
import pic3 from '../../allAssets/assets/photo/catc (5).jpg'
import pic4 from '../../allAssets/assets/photo/scuba (2).jpg'
import pic5 from '../../allAssets/assets/photo/republic (6).jpg'
import pic6 from '../../allAssets/assets/photo/donation (4).jpg'
import pic7 from '../../allAssets/assets/photo/catchp.jpeg'
import pic8 from '../../allAssets/assets/photo/ssbclass (2).jpg'
import pic9 from '../../allAssets/assets/photo/womensday1.jpeg'
import pic10 from '../../allAssets/assets/photo/ebsb.png'
import pic11 from '../../allAssets/assets/photo/independencedaymait (4).jpg'
import pic12 from '../../allAssets/assets/photo/rdc (10).jpg'

import Navbar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx'

import { Link,useNavigate } from 'react-router-dom'



export default function Photos() {
    const navigate=useNavigate()
  return (
    <>
        <Navbar/>

    <div id='photosbody'>

      <div id="container1">
        <h1 className="h1c1">PHOTO GALLARY</h1>

        <div id="picset">

            <button className='picbtn' onClick={()=>{navigate("/gal",{state:{opn:0}})}}>
                <div className='imgdiv'><img src={pic1} alt="" className="scimg" /></div>
                <h3 className="sctxt">RDC</h3>
            </button>
            <button className='picbtn' onClick={()=>{navigate("/gal",{state:{opn:1}})}}>
                <div className='imgdiv'><img src={pic7} alt="" className="scimg" /></div>
                <h3 className="sctxt">CATC</h3>
            </button>
            <button className='picbtn' onClick={()=>{navigate("/gal",{state:{opn:2}})}}>
                <div className='imgdiv'><img src={pic2} alt="" className="scimg" /></div>
                <h3 className="sctxt">AAC</h3>
            </button>
            <button className='picbtn' onClick={()=>{navigate("/gal",{state:{opn:3}})}}>
                <div className='imgdiv'><img src={pic12} alt="" className="scimg" /></div>
                <h3 className="sctxt">PM RALLY</h3>
            </button>
            <Link to={'/donation'} className='link'><div className="sc">
            <div className='imgdiv'><img src={pic6} alt="" className="scimg" /></div>
            <h3 className="sctxt">DONATION CAMP</h3>
        </div></Link>
            <Link to={'/adg'} className='link'><div className="sc">
            <div className='imgdiv'><img src={pic3} alt="" className="scimg" /></div>
            <h3 className="sctxt">ADG VISIT</h3>
        </div></Link>
            <Link to={'/scuba'} className='link'><div className="sc">
            <div className='imgdiv'><img src={pic4} alt="" className="scimg" /></div>
            <h3 className="sctxt">SCUBA DIVING CAMP</h3>
        </div></Link>
            <Link to={'/rd'} className='link'><div className="sc">
            <div className='imgdiv'><img src={pic5} alt="" className="scimg" /></div>
            <h3 className="sctxt">REPUBLIC DAY</h3>
        </div></Link>
            <Link to={'/ssb'} className='link'><div className="sc">
            <div className='imgdiv'><img src={pic8} alt="" className="scimg" /></div>
            <h3 className="sctxt">SSB CLASS</h3>
        </div></Link>
            <Link to={'/nwd'} className='link'><div className="sc">
            <div className='imgdiv'><img src={pic9} alt="" className="scimg" /></div>
            <h3 className="sctxt">NATIONAL WOMEN'S DAY</h3>
        </div></Link>
            <Link to={'/ebsb'} className='link'><div className="sc">
            <div className='imgdiv'><img src={pic10} alt="" className="scimg" /></div>
            <h3 className="sctxt">EBSB CAMP</h3>
        </div></Link>
            <Link to={'/id'} className='link'><div className="sc">
            <div className='imgdiv'><img src={pic11} alt="" className="scimg" /></div>
            <h3 className="sctxt">INDEPENDENCE DAY</h3>
        </div></Link>

    </div>

      <Link to={{pathname: '/gal',state: { opn: "0"}}}><button id='photogalbtn'><h4>explore more...</h4></button></Link>
      </div>

      <div className="">
              <Footer/>
             </div>
        
    </div>
    </>
  )
}
