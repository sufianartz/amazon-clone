import React, { useState, useEffect } from 'react';

const Slider = ({ slides }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div>
      {slides[index]}
    </div>
  );
};

export default Slider;
