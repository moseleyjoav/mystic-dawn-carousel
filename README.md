# Mystic Dawn Carousel

A mystical dawn carousel component for React.

## Installation

To install the Mystic Dawn Carousel component, you can use npm or yarn:

```bash
npm install mystic-dawn-carousel
# or
yarn add mystic-dawn-carousel
```

## Usage

```javascript
import React from 'react';
import MysticDawnCarousel from 'mystic-dawn-carousel';

function App() {
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
  ];

  return (
    <div>
      <h1>My Mystic Dawn Carousel</h1>
      <MysticDawnCarousel images={images} />
    </div>
  );
}

export default App;
```

## Props

- `images` (required): An array of image URLs to display in the carousel.
- `autoplayDelay` (optional): The delay in milliseconds before transitioning to the next slide (default: 3000).
- `autoplay` (optional): Whether to enable autoplay of the carousel (default: true).
- `infinite` (optional): Whether to enable infinite looping of the carousel (default: true).
- `slidesToShow` (optional): The number of slides to show at once (default: 1).
- `slidesToScroll` (optional): The number of slides to scroll at once (default: 1).
- `showDots` (optional): Whether to display navigation dots (default: true).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
