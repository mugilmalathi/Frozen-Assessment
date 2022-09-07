import React from 'react'
import "../Home/home.scss"
import glow from "../Images/Svg/glow.svg"
import pro1 from "../Images/Svg/pro1.svg"
import whitecomma from "../Images/Svg/whitecomma.svg"
import makemytrip from "../Images/Svg/makemytrip.svg"

const Card9 = () => {
  return (
    <div className='card9'>
        <div>
            <div>
                <div className='star'>Star HRs who ensure great EX</div>
                <div><button className='join'>Join the League</button></div>
            </div>
            <div>
                <div><img src={glow} alt="" /></div>
                <div className='pro1'><img src={pro1} alt="" /></div>
                <div className='whitecomma'><img src={whitecomma} alt="" /></div>
                <div className='interact'>Interacting with [AppUp] is done so well, it feels human, it feels natural, it feels like I am talking to someone who is listening to me.</div>
                <div className='pro1-div'>
                    <div>Deep Karla, President & CEO</div>
                    <div><img src={makemytrip} alt="" /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card9