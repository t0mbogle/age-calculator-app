import { useState, useEffect } from "react";
import PropTypes from 'prop-types';


function AnimateNumber({ value }) {
  const [currentValue, setCurrentValue] = useState(0);
  
  function ease(t) {
    return 1 - Math.pow(1 - t, 2); // Adjust exponent for desired easing effect
  }

  useEffect(() => {
      const animationDuration = 1800;
      const framesPerSecond = 60;
      let elapsedTime = 0;

     const interval = setInterval(() => {
          elapsedTime += 1000 / framesPerSecond;
          const progress = elapsedTime / animationDuration;
          const easedProgress = ease(progress);

         const newValue = Math.floor(easedProgress * value);

         if (elapsedTime >= animationDuration) {
              setCurrentValue(value);
              clearInterval(interval);
          } else {
              setCurrentValue(newValue);
          }
      }, 1800 / framesPerSecond);

     return () => clearInterval(interval);
  }, [value]);

    return (
        <>
          {currentValue}
        </>
    );
}

AnimateNumber.propTypes = {
    value: PropTypes.number.isRequired,
};

export default AnimateNumber;