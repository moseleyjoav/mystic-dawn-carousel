import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * A mystical dawn carousel component for React.
 *
 * @param {Object} props - The component props.
 * @param {string[]} props.images - An array of image URLs to display in the carousel.
 * @param {number} [props.autoplayDelay=3000] - The delay in milliseconds before transitioning to the next slide (default: 3000).
 * @param {boolean} [props.autoplay=true] - Whether to enable autoplay of the carousel (default: true).
 * @param {boolean} [props.infinite=true] - Whether to enable infinite looping of the carousel (default: true).
 * @param {number} [props.slidesToShow=1] - The number of slides to show at once (default: 1).
 * @param {number} [props.slidesToScroll=1] - The number of slides to scroll at once (default: 1).
 * @param {boolean} [props.showDots=true] - Whether to display navigation dots (default: true).
 * @returns {JSX.Element} - The MysticDawnCarousel component.
 */
function MysticDawnCarousel({
  images,
  autoplayDelay = 3000,
  autoplay = true,
  infinite = true,
  slidesToShow = 1,
  slidesToScroll = 1,
  showDots = true
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const settings = {
    dots: showDots,
    infinite,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    autoplay,
    autoplaySpeed: autoplayDelay,
    pauseOnHover: true
  };

  return (
    isLoaded && (
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    )
  );
}

export default MysticDawnCarousel;
