import React from 'react'
import './footer.css'

import footerpic from '../../allAssets/assets/photo/footer.jpg'
import insta from '../../allAssets/assets/logo/instalogo.png'
import mail from '../../allAssets/assets/logo/maillogo.png'


export default function footer() {
  return (
    <div>
      <div id="homeintro8">
            <div className="subhi3">
                <div><img src={footerpic} alt="" className="footer" /></div>
                <div className="footinfo">
                    <div className='infodiv'>
                        <img src={insta} alt="" className="infopic" />
                        <p className='info'>@nccmait</p>
                    </div>
                    
                    <div className='infodiv'>
                        <img src={mail} alt="" className='infopic'/>
                        <p className='info'> ncc.mait2021@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="footercc">
                <p className='cc'>© Copyright 2024 by NCC MAIT, All rights reserved. Various trademarks are held by their respective owners.</p>
            </div>
        </div>
        
    </div>
  )
}
