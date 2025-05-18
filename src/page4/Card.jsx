import React from 'react'
import './Card.css'
import i1 from './images/i1.png'
import i2 from './images/i2.jpg'
import i3 from './images/i3.png'
import i4 from './images/i4.png'
import i5 from './images/i5.png'
import i6 from './images/i6.png'
import star from './images/star.png'
import student from './images/student.jpg'
import Page5 from '../page5/Page5.jsx'
const cardlist=[
  {id: 1,title:'Digital Marketing',image:i1},
  {id:2,title:'Software Engineering',image:i2},
  {id:3,title:'UX Research',image:i3},
]
const cardlistdown=[
  {id: 1,title:'Photography',image:i4},
  {id:2,title:'Data Analysis',image:i5},
  {id:3,title:'Ethical Hacking',image:i6},
]


const Card = () => {
  return (
    <div>
      <div>
        <div className="p4card-div">
    {cardlist.map(p4card => (
      <div key={p4card.id} className="p4formcard">
        <div className="p4card-image-container">
          <img src={p4card.image} alt={`Card ${p4card.id}`} className="p4card-image" />
        </div>
        <div className="p4d2">
          <h1 className='p4ch1'>{p4card.title}</h1>
          <img src={star} className="star" />
          <img src={student} className='student' />
          <h1 className='p4ch12'>30.5$</h1>
        </div>
      </div>
    ))}
  </div>
  <div className="p4card-div">
    {cardlistdown.map(p4card => (
      <div key={p4card.id} className="p4formcard">
        <div className="p4card-image-container">
          <img src={p4card.image} alt={`Card ${p4card.id}`} className="p4card-image" />
        </div>
        <div className="p4d2">
          <h1 className='p4ch1'>{p4card.title}</h1>
          <img src={star} className="star" />
          <img src={student} className='student' />
          <h1 className='p4ch12'>30.5$</h1>
        </div>
      </div>
    ))}
  </div>
      </div>
      <Page5/>
    </div>
  )
}

export default Card;