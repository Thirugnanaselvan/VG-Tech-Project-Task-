import React from 'react'
import page2 from '../assets/page2.png'
import '../App.css'
import Page3 from './Page3.jsx'
function Page2(){
    return(
        <div>
        <div className='page2'>
            <img src={page2} alt="image" className='page2-img'/>
            <img src="src\assets\Blue.png" alt="image" className='blue-img'/>
            <h1 className='p2h1'>Welcome to online exam center</h1>
            <ul className='p2ul'>
                <li><p>Eu, massa lacinia senectus massa vitae vulputate neque.Eu, massa lacinia senectus massa vitae vulputate neque.</p></li>
                <li><p>Eu, massa lacinia senectus massa vitae vulputate neque.Eu, massa lacinia senectus mass</p></li>
                <li><p>Eu, massa lacinia senectus massa vitae vulputate neque.Eu, massa lacinia senectus massa vitae vulputate neque.</p></li>
            </ul>
        </div>
        <Page3/>
        </div>
    )
 }
 export default Page2;