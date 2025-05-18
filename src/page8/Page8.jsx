import React from 'react'
import './Page8.css'
import p8i1 from'./p8i1.png'
import footer from './footer.png'

const Page8 = () => {
  return (
    <div>
        <div className='p8d1'>
            <img src={p8i1} className='p8i1'/>
        </div>
        <footer>
            <img src={footer} className='footer'/>
        </footer>
    </div>
  )
}

export default Page8;
