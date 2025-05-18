import React from 'react'
import './Page7.css'
import Page8 from '../page8/Page8.jsx'
import p7i1 from'./p7i1.jpg'
import p7i2 from './p7i2.jpg'
import p7i3 from './p7i3.jpg'
import p7i4 from './p7i4.jpg'
import p7i5 from './p7i5.jpg'
import p7scroll from './p7scroll.png'
const form=[
    {id:1,title1:"Mohh Jumah", title2:"Senior Developer", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis", image:p7i1},
    {id:2,title1:"John Mark", title2:"Data Analyst", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis",image:p7i2},
    {id:3,title1:"Rabiu Hassan", title2:"Marketer", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis",image:p7i3},
    {id:4,title1:"Mheyah Khalifa", title2:"UX Lead", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis",image:p7i4},
    {id:5,title1:"Elon Musk", title2:"Content Writer", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis",image:p7i5},
]
const Page7 = () => {
  return (
    <div>
        <div className='p7d1'>
            <div>
                <h1 className='p7h1'>What our clients say about Us</h1>
            </div>
            <div className='p7cards-wrapper'>
                {form.map(p7card => (
                      <div key={p7card.id} className="p7formcard">
                        <div className='p7d2'>
                          <img src={p7card.image } className='p7i1'/>
                          <h1 className='p7ch12'>{p7card.title1}</h1>
                          <h2 className='p7ch13'>{p7card.title2}</h2>
                          <p className='p7p1'>{p7card.para}</p>
                        </div>
                      </div>
                    ))}
            </div>
            <img src={p7scroll} alt='image' className='p7i2'/>
            <img src={p7scroll} alt='image' className='p7i3'/>
        </div>
        <Page8/>
    </div>
  )
}

export default Page7;