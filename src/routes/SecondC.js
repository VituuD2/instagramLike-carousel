import React from 'react'
import '../style/PagesDefault.css';
import Carousel from '../Carousel';

const importAll = (req) => req.keys().map(req);
const imagesSrc = importAll(require.context('../assets/2', false, /\.(png)$/));

const SecondC = () => {
  return (
    <div className='PagesDefaul'>
      <Carousel imagesSrc={imagesSrc}/>
      <div className='Button'><a href="./"><i class="fas fa-long-arrow-left"></i></a></div>
    </div>
  )
}

export default SecondC