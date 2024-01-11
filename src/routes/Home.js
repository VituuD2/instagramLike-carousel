import React from 'react'
import { Link } from 'react-router-dom';
import '../style/PagesDefault.css'

const Home = () => {
  return (
    <div className='Home'>
      <div className='Button'>
        <Link to="/FirstC">1st Carousel</Link>
      </div>
      <div className='Button'>
        <Link to="/SecondC">2nd Carousel</Link>
      </div>
      <div className='Button'>
        <Link to="/ThirdC">3rd Carousel</Link>
      </div>
    </div>
  )
}

export default Home