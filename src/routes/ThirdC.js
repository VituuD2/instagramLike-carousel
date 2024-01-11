import React from 'react'
import '../style/PagesDefault.css';
import Carousel from '../Carousel';

const importAll = (req) => req.keys().map(req);
const imagesSrc = importAll(require.context('../assets/3', false, /\.(png)$/));

const ThirdC = () => {
  return (
    <div className='PagesDefault'>
    <Carousel imagesSrc={imagesSrc}/>
    <div className='Button'><a href="./"><i class="fas fa-long-arrow-left"></i></a></div>
    </div>
  )
}

export default ThirdC