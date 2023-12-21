import React from 'react';
import Carousel from './Carousel';
import Img1 from './assets/3_01.png'
import Img2 from './assets/3_02.png'
import Img3 from './assets/3_03.png'
import Img4 from './assets/3_04.png'
import Img5 from './assets/3_05.png'
import Img6 from './assets/3_06.png'
import Img7 from './assets/3_07.png'

const App = () => {
  const images = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
  ];

  return (
    <div className="App">
      <h1>Instagram-Like Carousel</h1>
      <Carousel images={images} />
    </div>
  );
};

export default App;