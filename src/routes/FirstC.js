import React from 'react'
import '../style/App.css';
import Carousel from '../Carousel';

const importAll = (req) => req.keys().map(req);
const imagesSrc = importAll(require.context('../assets/1', false, /\.(png)$/));

const FirstC = () => {
  return (
    <div className='App'>
      <Carousel imagesSrc={imagesSrc}/>
    </div>
    
  )
}

export default FirstC