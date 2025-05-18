import React from 'react'
import p6i1 from './p6i1.png'
import p6i2 from './p6i2.png'
import Page7 from '../page7/Page7.jsx'
import './Page6.css'

const Page6 = () => {
  return (
    <div>
         <div className='p6d1'>
        <div>
            <div className='p6d2'>
                <h1 className='p6h1'>Get job-ready for a profession That's in demand.</h1>
            </div>
            <div>
                <img src={p6i1} className='p6i1'/>
            </div>
            <div>
                <img src={p6i2} className='p6i2'/>
            </div>
        </div>
    </div>
    <Page7/>
    </div>
  )
}

export default Page6;