import React from 'react'
import './about.css'

import abt1 from '../../allAssets/assets/photo/abtpg1.png'
import abt2 from '../../allAssets/assets/photo/abtpg2.png'
import abt3 from '../../allAssets/assets/photo/abtpg3.png'
import abt4 from '../../allAssets/assets/photo/abtpg4.png'
import abt5 from '../../allAssets/assets/photo/abtpg5.png'
import org_struct from '../../allAssets/assets/photo/org_struct.png'

import Navbar from '../../components/navbar/navbar.jsx';
import Footer from '../../components/footer/footer.jsx'


export default function about() {
  return (
    <>
      <Navbar/>

    <div id='aboutbody'>

      <div id="cont1">
          <div className="subc1"><p className="c1txt">17</p><p className="c1txt">No of Directorates</p></div>
          <div className="subc1"><p className="c1txt">165K+</p><p className="c1txt">No. of cadets in senoir divison(Army)</p></div>
          <div className="subc1"><p className="c1txt">62K+</p><p className="c1txt">No. of cadets in senoir divison(Airforce)</p></div>
          <div className="subc1"><p className="c1txt">62K+</p><p className="c1txt">No. of cadets in senoir divison(Navy)</p></div>
      </div>

      <div id="container2">

            <h1 id="h1c2">NATIONAL CADET CORPS</h1>

            <div className="subhi3">
            <div className="imgdiv"><img src={abt1} alt="" className="abtc2img" /></div>
            <p className="abtc2txt">The National Cadet Corps (NCC) is a tri-services organization comprising the Army, Navy, and Air Force. It was established in India in 1948 and can be traced back to the ‘University Corps’ which was created under the Indian Defence Act 1917 with the objective of making up for the shortage of personnel in the Army. The NCC curriculum includes basic military training in small arms and drill, as well as community development and social service activities. The NCC has a strength of approximately 1 to 1.3 million cadets and is open to school and college students on a voluntary basis. The NCC has played a crucial role in developing leadership qualities and discipline among young people in India. </p>
            </div>
            <br />
            <br />

            <h1 className="abtc2pln">NATIONAL CADET CORPS</h1>
            <h1 id="h1c2">MAIT</h1>  
            
            <div className="subhi3">
              <div className="imgdiv"><img src={abt2} alt="" className="abtc2img" /></div>
              <div>
              <p className="abtc2txt">Under the guidance of Prof Neelam Sharma, Director MAIT and Prof S. S. Deswal, Dean Academics MAIT, NCC was started in MAIT with the efforts of Dr K. P. Tripathi.</p>
              <p className="abtc2txt">The National Cadet Corps (NCC) program at Maharaja Agrasen Institute of Technology (MAIT) embodies the vision of "Amrit Kaal," as introduced by Hon'ble Prime Minister Shri Narendra Modi. Our NCC unit is committed to nurturing disciplined, responsible, and empowered individuals who contribute to the holistic development of society. Rooted in the principles of unity and discipline, our program instills leadership, character, and a spirit of service among cadets. Through a regimented way of life, we empower cadets to confront challenges, exceed their limits, and uphold the values of honesty, integrity, and selflessness. With a focus on sustainable and inclusive development, technology, and innovation, we prepare cadets to become the torchbearers of India's bright future. Join us as we embark on a journey to realize the vision of "Amrit Kaal" and shape a prosperous, inclusive, and empowered New India. It’s not just about drill, ragda, camps, ranks or uniform, but developing yourself better than yesterday.</p>
              <p className="abtc2txt">we take pride in fostering holistic development among our cadets. As part of our commitment to nurturing well-rounded individual.</p>
              <p className="abtc2txt">Our institution hosts two units of the National Cadet Corps (NCC) - the 7 Delhi Boys Battalion (7DBN) Group C and the 2 Delhi Girls Battalion (2DGBN) Group B. These units, respectively led by HQ NCC Bhawan Rohini under the command of COl. VK Upreti for the senoir division, and Col. Sandeep Rajora for the senoir wing, serve as pillars of discipline, leadership, and service within our campus community.</p>
              </div>
            </div>
      </div>

      <div className="container3">
        <h1 className="h1c3">NCC MOTO</h1>
        <div className="subhi3">
        <div className="imgdiv"><img src={abt3} alt="" className="c3img" /></div>
        <p className="c3txt">The motto of the National Cadet Corps (NCC) is "Unity and Discipline." This concise phrase encapsulates the core values and principles that the NCC instills in its cadets. "Unity" represents the importance of working together and fostering a sense of togetherness among the diverse youth of the nation. "Discipline" signifies the cultivation of self-control, order, and adherence to a code of conduct.</p>
        </div>
        <h1 className="h1c3">NCC FLAG</h1>
        <div className="subhi3">
        <div className="imgdiv"><img src={abt4} alt="" className="c3img" /></div>
        <p className="c3txt">In 1954 the existing tricolour flag was introduced. The three colours in the flag depict the three services of the Corps, red for the Army, deep blue for the Navy and light blue for the Air Force. The letters NCC and the NCC crest in gold in the middle of the flag encircled by a wreath of lotus, give the flag a colourful look and a distinct identity.</p>
        </div>
      </div>

      <div id="container4">
        <h1 className="h1c4">NCC SONG</h1>
        <div className="subhi3">
        <div className="imgdiv"><img src={abt5} alt="" className="c4img" /></div>
        <div>
        <p className="c4txt">Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain Apni Manzil Ek Hai, Ha, Ha, Ha, Ek Hai,Ho, Ho, Ho, Ek Hai. Hum Sab Bharatiya Hain. </p>
        <p className="c4txt">Kashmir Ki Dharti Rani Hai, Sartaj Himalaya Hai, Saadiyon Se Humne Isko Apne Khoon Se Pala Hai Desh Ki Raksha Ki Khatir Hum Shamshir Utha Lenge, Hum Shamshir Utha Lenge. </p>
        <p className="c4txt">Bikhre Bikhre Taare Hain Hum Lekin Jhilmil Ek Hai, Ha, Ha, Ha, Ek Hai Hum Sab Bharatiya Hai. Mandir Gurudwaare Bhi Hain Yahan Aur Masjid Bhi Hai Yahan Girija Ka Hai Ghariyaal Kahin Mullah ki Kahin Hai Ajaan </p>
        <p className="c4txt">Ek Hee Apna Ram Hain, Ek hi Allah Taala Hai, Ek Hee Allah Taala Hain, Raang Birange Deepak Hain Hum, lekin Jagmag Ek Hai, Ha Ha Ha Ek Hai, Ho Ho Ho Ek Hai. Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain.</p>
        </div>
        </div>
      </div>

      <div id="container5">
        <h1 className="h1c5">ORGANISATIONAL STRUCTURE</h1>
        <img src={org_struct} alt="" id='orgstrpic' />
      </div>

      <div className="">
              <Footer/>
             </div>
    </div>
    </>
  )
}
