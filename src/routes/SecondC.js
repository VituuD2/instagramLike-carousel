import React from 'react'
import { Link } from 'react-router-dom';
import '../style/PagesDefault.css';
import Carousel from '../Carousel';

const importAll = (req) => req.keys().map(req);
const imagesSrc = importAll(require.context('../assets/2', false, /\.(png)$/));

const SecondC = () => {
  return (
    <div className='PagesDefault'>
      <Carousel imagesSrc={imagesSrc}/>
      <div className='Button'><Link to="/"><i class="fas fa-long-arrow-left"></i></Link></div>
    </div>
  )
}

export default SecondC