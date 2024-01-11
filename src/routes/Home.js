import React from 'react'
import '../style/PagesDefault.css'

const Home = () => {
  return (
    <div className='Home'>
      <div className='Button'>
        <a href="./FirstC">1st Carousel</a>
      </div>
      <div className='Button'>
        <a href="./SecondC">2nd Carousel</a>
      </div>
      <div className='Button'>
        <a href="./ThirdC">3rd Carousel</a>
      </div>
    </div>
  )
}

export default Home