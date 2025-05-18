import { useState } from 'react'
import a from './assets/a.png' 
import dot from './assets/dot.png'
import Search from './assets/Search.png' 
import './App.css'
import Page2 from './page2,3,4/Page2.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <img src={a} alt="banner" className="img1"/>
      <div className="overlay">
        <img src={dot} className='dot'/>
        <h1 className="exam">Examera</h1>
        <nav className="nav1">
          <ul className="nav-list">
            <li><a href="#" data-text="Home">Home</a></li>
            <li><a href="#" data-text="Courses">Courses</a></li>
            <li><a href="#" data-text="Instructor">Instructor</a></li>
            <li><a href="#" data-text="Schedules">Schedules</a></li>
            <li><a href="#" data-text="Contact us">Contact us</a></li>
          </ul>
        </nav>
        <p className='login'>Login</p>
        <img src={Search} alt="image" className="img2"/>
        <button className="btn1">Register</button>
        <h1 className='Online'>online Platform for Capability Testing</h1>
        <p className='text'>For all of your testing requirements for evaluation, recruiting, selection, and certifications, use the online exam system.</p>
        <button className='get'>Get started</button>
      </div>
      <Page2 />
    </div>
  )
}

export default App;
