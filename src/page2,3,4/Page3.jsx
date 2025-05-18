import React from 'react'
import '../App.css'
import Formcard from '../page3/Formcard'
import scroll from '../assets/scroll.png'
import Page4 from './page4'
function Page3() {
  return (
    <div>
        <div>
            <div className='page3-div'>
                <h1 className="p3h1">Choose online exams from top cartegories</h1>
                <p className="see">See all</p>
            </div>
            <div style={{ position: 'relative' }}>
               <Formcard />
               <img src={scroll} alt="Scroll test" style={{ display:'block' }} className='scrollimg'/>
            </div>
        </div>
        <Page4/>
    </div>
  )
}

export default Page3;