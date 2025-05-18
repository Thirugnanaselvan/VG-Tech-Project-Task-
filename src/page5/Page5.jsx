import React from 'react'
import '../App.css'
import Page6 from '../Page6/Page6.jsx'
import i1 from './i1.png'
import input1 from './input1.png'
import input2 from './input2.png'
import input3 from './input3.png'
import input4 from './input4.png'

const Page5 = () => {
  return (
    <div className="p5-div">
      <div className="p5-div1">
        <div>
          <img src={i1} alt="text" className='p5i1' />
        </div>
        <div className="p5d2">
          <h1>Get Free trail now</h1>
          <img src={input1} className='p5i1' />
          <img src={input2} className='p5i2'/>
          <img src={input3} className='p5i3'/>
          <img src={input4} className='p5i4'/>
          <button className='p5b1'>Apply now</button>
        </div>
      </div>
      <Page6/>
    </div>
  )
}

export default Page5;