import React from 'react'
import '../style/App.css';
import Carousel from '../Carousel';

const importAll = (req) => req.keys().map(req);
const imagesSrc = importAll(require.context('../assets/1', false, /\.(png)$/));

const SecondC = () => {
  return (
    <div className='App'>SecondC</div>
  )
}

export default SecondC