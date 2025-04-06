import React from 'react'
import './camps.css'

import camp1 from '../../allAssets/assets/photo/rdc (1).jpg'
import camp2 from '../../allAssets/assets/photo/tschp1.jpeg'
import camp3 from '../../allAssets/assets/photo/scuba (2).jpg'
import camp4 from '../../allAssets/assets/photo/catcsep.jpeg'
import camp5 from '../../allAssets/assets/photo/alcc.jpg'
import camp6 from '../../allAssets/assets/photo/ebsb.png'
import camp7 from '../../allAssets/assets/photo/rctc.jpg'
import camp8 from '../../allAssets/assets/photo/aac (4).jpg'
import camp9 from '../../allAssets/assets/photo/yep.jpg'
import event1 from '../../allAssets/assets/photo/independencedaymait (8).jpg'
import event2 from '../../allAssets/assets/photo/vigyaanbhawan (5).jpg'
import event3 from '../../allAssets/assets/photo/womensday1.jpeg'
import event4 from '../../allAssets/assets/photo/yamuna.jpg'
import event5 from '../../allAssets/assets/photo/visits (5).jpg'
import event6 from '../../allAssets/assets/photo/warmemo (1).jpg'

import Navbar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx'


export default function camps() {
  return (
    <>
        <Navbar/>

    <div id='campsbody'>

      <div id="container1">
        <h1 className="h1c1">CAMPS</h1>

        <div className="campset">
            <div className="c1c"><div className="subc1c imgc">
                <div className='imgdiv'><img src={camp1} alt="" className="c1cimg " /></div>
                <p className="c1ctxt">REPUBLIC DAY CAMP</p> 
                <input type="checkbox" id="ch1" />
                <div className="content1">
                    <p>Dignitaries, including the Raksha Mantri and Chief Minister of Delhi, visit. Competitions span various disciplines, and the Prime Minister's Banner is awarded to the Champion Directorate. The selection process, starting in August, involves squadron, battalion, and group levels, culminating in Inter-Group Competition and PRE-RDC stages, testing cadets on foot drill, rifle drill, cultural events, flag area, and national integration. </p>
                    <label htmlFor="ch1" className='readbtn'>read less</label>  
                </div>
                <label htmlFor="ch1" className='readbtn'>read more</label>   
            </div></div>

            <div className="c1c"><div className="subc1c imgc">
                <div className='imgdiv'><img src={camp2} alt="" className="c1cimg " /></div>
                <p className="c1ctxt">THAL SAINIK CAMP</p>   
                <input type="checkbox" id="ch2" />
                <div className="content2">
                    <p>Dignitaries, including the Raksha Mantri and Chief Minister of Delhi, visit. Competitions span various disciplines, and the Prime Minister's Banner is awarded to the Champion Directorate. The selection process, starting in August, involves squadron, battalion, and group levels, culminating in Inter-Group Competition and PRE-RDC stages, testing cadets on foot drill, rifle drill, cultural events, flag area, and national integration. </p>
                    <label htmlFor="ch2" className='readbtn'>read less</label>  
                </div>
                <label htmlFor="ch2" className='readbtn'>read more</label>      
            </div></div>

            <div className="c1c"><div className="subc1c imgc">
                <div className='imgdiv'><img src={camp3} alt="" className="c1cimg " /></div>
                <p className="c1ctxt">SCUBA DIVING CAMP</p>  
                <input type="checkbox" id="ch3" />
                <div className="content3">
                    <p>Dignitaries, including the Raksha Mantri and Chief Minister of Delhi, visit. Competitions span various disciplines, and the Prime Minister's Banner is awarded to the Champion Directorate. The selection process, starting in August, involves squadron, battalion, and group levels, culminating in Inter-Group Competition and PRE-RDC stages, testing cadets on foot drill, rifle drill, cultural events, flag area, and national integration. </p>
                    <label htmlFor="ch3" className='readbtn'>read less</label>  
                </div>
                <label htmlFor="ch3" className='readbtn'>read more</label>       
            </div></div>

            <div className="c1c"><div className="subc1c imgc">
                <div className='imgdiv'><img src={camp4} alt="" className="c1cimg " /></div>
                <p className="c1ctxt">COMBINED ANUAL TRAINING CAMP</p>  
                <input type="checkbox" id="ch4" />
                <div className="content4">
                    <p>Dignitaries, including the Raksha Mantri and Chief Minister of Delhi, visit. Competitions span various disciplines, and the Prime Minister's Banner is awarded to the Champion Directorate. The selection process, starting in August, involves squadron, battalion, and group levels, culminating in Inter-Group Competition and PRE-RDC stages, testing cadets on foot drill, rifle drill, cultural events, flag area, and national integration. </p>
                    <label htmlFor="ch4" className='readbtn'>read less</label>  
                </div>
                <label htmlFor="ch4" className='readbtn'>read more</label>       
            </div></div>

            <div className="c1c"><div className="subc1c imgc">
                <div className='imgdiv'><img src={camp5} alt="" className="c1cimg " /></div>
                <p className="c1ctxt">ADVANCED LEADERSHIP CAMP</p>   
                <input type="checkbox" id="ch5" />
                <div className="content5">
                    <p>Dignitaries, including the Raksha Mantri and Chief Minister of Delhi, visit. Competitions span various disciplines, and the Prime Minister's Banner is awarded to the Champion Directorate. The selection process, starting in August, involves squadron, battalion, and group levels, culminating in Inter-Group Competition and PRE-RDC stages, testing cadets on foot drill, rifle drill, cultural events, flag area, and national integration. </p>
                    <label htmlFor="ch5" className='readbtn'>read less</label>  
                </div>
                <label htmlFor="ch5" className='readbtn'>read more</label>      
            </div></div>

            <div className="c1c"><div className="subc1c imgc">
                <div className='imgdiv'><img src={camp6} alt="" className="c1cimg " /></div>
                <p className="c1ctxt">EK BHARAT SHRESHTH BHARAT</p>  
                <input type="checkbox" id="ch6" />
                <div className="content6">
                    <p>Dignitaries, including the Raksha Mantri and Chief Minister of Delhi, visit. Competitions span various disciplines, and the Prime Minister's Banner is awarded to the Champion Directorate. The selection process, starting in August, involves squadron, battalion, and group levels, culminating in Inter-Group Competition and PRE-RDC stages, testing cadets on foot drill, rifle drill, cultural events, flag area, and national integration. </p>
                    <label htmlFor="ch6" className='readbtn'>read less</label>  
                </div>
                <label htmlFor="ch6" className='readbtn'>read more</label>       
            </div></div>

            <div className="c1c"><div className="subc1c imgc">
                <div className='imgdiv'><img src={camp7} alt="" className="c1cimg " /></div>
                <p className="c1ctxt">ROCK CLIMBING TRAINING CAMP</p>  
                <input type="checkbox" id="ch7" />
                <div className="content7">
                    <p>Dignitaries, including the Raksha Mantri and Chief Minister of Delhi, visit. Competitions span various disciplines, and the Prime Minister's Banner is awarded to the Champion Directorate. The selection process, starting in August, involves squadron, battalion, and group levels, culminating in Inter-Group Competition and PRE-RDC stages, testing cadets on foot drill, rifle drill, cultural events, flag area, and national integration. </p>
                    <label htmlFor="ch7" className='readbtn'>read less</label>  
                </div>
                <label htmlFor="ch7" className='readbtn'>read more</label>       
            </div></div>

            <div className="c1c"><div className="subc1c imgc">
                <div className='imgdiv'><img src={camp8} alt="" className="c1cimg " /></div>
                <p className="c1ctxt">ARMY ATTACHMENT CAMP</p>  
                <input type="checkbox" id="ch8" />
                <div className="content8">
                    <p>Dignitaries, including the Raksha Mantri and Chief Minister of Delhi, visit. Competitions span various disciplines, and the Prime Minister's Banner is awarded to the Champion Directorate. The selection process, starting in August, involves squadron, battalion, and group levels, culminating in Inter-Group Competition and PRE-RDC stages, testing cadets on foot drill, rifle drill, cultural events, flag area, and national integration. </p>
                    <label htmlFor="ch8" className='readbtn'>read less</label>  
                </div>
                <label htmlFor="ch8" className='readbtn'>read more</label>       
            </div></div>

            <div className="c1c"><div className="subc1c imgc">
                <div className='imgdiv'><img src={camp9} alt="" className="c1cimg " /></div>
                <p className="c1ctxt">YOUTH EXCHANGE PROGRAM</p>  
                <input type="checkbox" id="ch9" />
                <div className="content9">
                    <p>Dignitaries, including the Raksha Mantri and Chief Minister of Delhi, visit. Competitions span various disciplines, and the Prime Minister's Banner is awarded to the Champion Directorate. The selection process, starting in August, involves squadron, battalion, and group levels, culminating in Inter-Group Competition and PRE-RDC stages, testing cadets on foot drill, rifle drill, cultural events, flag area, and national integration. </p>
                    <label htmlFor="ch9" className='readbtn'>read less</label>  
                </div>
                <label htmlFor="ch9" className='readbtn'>read more</label>       
            </div></div>
        </div>
      </div>


      <div id="container2">
        <h1 className="h1c2">EVENTS</h1>

        <div className="campset">
        <div className="c2c"><div className="subc2c imgc">
            <div className='imgdiv'><img src={event1} alt="" className="c1cimg" /></div>
            <p className="c2ctxt">INDEPENDENCE DAY</p>
            <input type="checkbox" id="ch10" />
            <div className="content10">
                <p>Dignitaries, including the Raksha Mantri and Chief Minister of Delhi, visit. Competitions span various disciplines, and the Prime Minister's Banner is awarded to the Champion Directorate. The selection process, starting in August, involves squadron, battalion, and group levels, culminating in Inter-Group Competition and PRE-RDC stages, testing cadets on foot drill, rifle drill, cultural events, flag area, and national integration. </p>
                <label htmlFor="ch10 className='readbtn'">read less</label>  
            </div>
            <label htmlFor="ch10 className='readbtn'">read more</label>       
        </div></div>
        <div className="c2c"><div className="subc2c imgc">
            <div className='imgdiv'><img src={event2} alt="" className="c1cimg " /></div>
            <p className="c2ctxt">VIGYAN BHAVAN VISIT</p>
            <input type="checkbox" id="ch11" />
            <div className="content11">
                <p>Dignitaries, including the Raksha Mantri and Chief Minister of Delhi, visit. Competitions span various disciplines, and the Prime Minister's Banner is awarded to the Champion Directorate. The selection process, starting in August, involves squadron, battalion, and group levels, culminating in Inter-Group Competition and PRE-RDC stages, testing cadets on foot drill, rifle drill, cultural events, flag area, and national integration. </p>
                <label htmlFor="ch11 className='readbtn'">read less</label>  
            </div>
            <label htmlFor="ch11 className='readbtn'">read more</label>         
        </div></div>
        <div className="c2c"><div className="subc2c imgc">
            <div className='imgdiv'><img src={event3} alt="" className="c1cimg " /></div>
            <p className="c2ctxt">WOMEN'S DAY</p>  
            <input type="checkbox" id="ch12" />
            <div className="content12">
                <p>Dignitaries, including the Raksha Mantri and Chief Minister of Delhi, visit. Competitions span various disciplines, and the Prime Minister's Banner is awarded to the Champion Directorate. The selection process, starting in August, involves squadron, battalion, and group levels, culminating in Inter-Group Competition and PRE-RDC stages, testing cadets on foot drill, rifle drill, cultural events, flag area, and national integration. </p>
                <label htmlFor="ch12 className='readbtn'">read less</label>  
            </div>
            <label htmlFor="ch12 className='readbtn'">read more</label>       
        </div></div>
        <div className="c2c"><div className="subc2c imgc">
            <div className='imgdiv'><img src={event4} alt="" className="c1cimg " /></div>
            <p className="c2ctxt">YAMUNA SAFAI ABHIYAN</p> 
            <input type="checkbox" id="ch13" />
            <div className="content13">
                <p>Dignitaries, including the Raksha Mantri and Chief Minister of Delhi, visit. Competitions span various disciplines, and the Prime Minister's Banner is awarded to the Champion Directorate. The selection process, starting in August, involves squadron, battalion, and group levels, culminating in Inter-Group Competition and PRE-RDC stages, testing cadets on foot drill, rifle drill, cultural events, flag area, and national integration. </p>
                <label htmlFor="ch13 className='readbtn'">read less</label>  
            </div>
            <label htmlFor="ch13 className='readbtn'">read more</label>        
        </div></div>
        <div className="c2c"><div className="subc2c imgc">
            <div className='imgdiv'><img src={event5} alt="" className="c1cimg " /></div>
            <p className="c2ctxt">VISIT TO NUCLEAR POWER PLANT</p> 
            <input type="checkbox" id="ch14" />
            <div className="content14">
                <p>Dignitaries, including the Raksha Mantri and Chief Minister of Delhi, visit. Competitions span various disciplines, and the Prime Minister's Banner is awarded to the Champion Directorate. The selection process, starting in August, involves squadron, battalion, and group levels, culminating in Inter-Group Competition and PRE-RDC stages, testing cadets on foot drill, rifle drill, cultural events, flag area, and national integration. </p>
                <label htmlFor="ch14 className='readbtn'">read less</label>  
            </div>
            <label htmlFor="ch14 className='readbtn'">read more</label>        
        </div></div>
        <div className="c2c"><div className="subc2c imgc">
            <div className='imgdiv'><img src={event6} alt="" className="c1cimg " /></div>
            <p className="c2ctxt">WAR MEMORIAL VISIT</p>   
            <input type="checkbox" id="ch15" />
            <div className="content15">
                <p>Dignitaries, including the Raksha Mantri and Chief Minister of Delhi, visit. Competitions span various disciplines, and the Prime Minister's Banner is awarded to the Champion Directorate. The selection process, starting in August, involves squadron, battalion, and group levels, culminating in Inter-Group Competition and PRE-RDC stages, testing cadets on foot drill, rifle drill, cultural events, flag area, and national integration. </p>
                <label htmlFor="ch15 className='readbtn'">read less</label>  
            </div>
            <label htmlFor="ch15 className='readbtn'">read more</label>      
        </div></div>
        {/* <div className="c2c"><div className="subc2c">
            <div className='imgdiv'><img src={event7} alt="" className="c1cimg" /></div>
            <p className="c2ctxt">AINING CAMP</p>    
        </div></div>
        <div className="c2c"><div className="subc2c">
            <div className='imgdiv'><img src={event8} alt="" className="c1cimg" /></div>
            <p className="c2ctxt">CAMP</p>    
        </div></div>
        <div className="c2c"><div className="subc2c">
            <div className='imgdiv'><img src={event9} alt="" className="c1cimg" /></div>
            <p className="c2ctxt">ROGRAM</p>    
        </div></div> */}
        </div>
      </div>


      <div className="">
              <Footer/>
             </div>
    </div>
    </>
  )
}
