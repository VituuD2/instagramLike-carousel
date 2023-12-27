import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ imagesSrc }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesSrc.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesSrc.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {imagesSrc.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      <button className="prev-button" onClick={prevSlide}>
      ←
      </button>
      <button className="next-button" onClick={nextSlide}>
      →
      </button>
    </div>
  );
};

export default Carousel;
