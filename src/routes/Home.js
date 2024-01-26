import React from 'react'
import { Link } from 'react-router-dom';
import '../style/PagesDefault.css'

const Home = () => {
  return (
    <div className='Home'>
      <div className="main">
        <div className='approved Button'>
          <Link to="/FirstC">1st Carousel</Link>
        </div>
        <div className='approved Button'>
          <Link to="/SecondC">2nd Carousel</Link>
        </div>
        <div className='approved Button'>
          <Link to="/ThirdC">3rd Carousel</Link>
        </div>
        <div className='approved Button'>
          <Link to="/FourthC">4th Carousel</Link>
        </div>
        <div className=' Button'>
          <Link to="/FifthC">5th Carousel</Link>
        </div>
      </div>

      <div>
        <div className='ValueButton Button'>
          <Link to="/Value">Value</Link>
        </div>
      </div>
    </div>
  )
}

export default Home