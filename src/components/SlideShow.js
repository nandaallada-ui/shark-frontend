import { useEffect, useState } from 'react';
import './SlideShow.css';

const imagePath = (filename) => `${process.env.PUBLIC_URL}/images/${filename}`;

const slides = [
  {
    title: 'Shark facts',
    fact: 'Sharks have existed longer than trees.',
    image: imagePath('shark.jpg'),
    alt: 'a great white shark',
    page: 'facts',
  },
  {
    title: 'Shark behaviors',
    fact: 'Sharks are curious creatures, sometimes observed biting boats.',
    image: imagePath('GWB.webp'),
    alt: 'shark biting boat',
    page: 'behaviors',
  },
  {
    title: 'Poaching and global warming',
    fact: 'Around 100 million sharks are poached for their fins every year.',
    image: imagePath('globalwarm.jpg'),
    alt: 'a shark swimming in the ocean',
    page: 'warming',
  },
  {
    title: 'Shark subspecies',
    fact: 'Basking sharks can reach 7 to 8.5 meters long.',
    image: imagePath('baskingshark.jpg'),
    alt: 'a basking shark, feeding',
    page: 'subspecies',
  },
];

function SlideShow() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slide = slides[slideIndex];

  function changeSlide(direction) {
    setSlideIndex((index) => (index + direction + slides.length) % slides.length);
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((index) => (index + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <section
        className="topic slideshow"
        aria-label="Shark page slideshow"
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') changeSlide(-1);
          if (event.key === 'ArrowRight') changeSlide(1);
        }}
        tabIndex="0"
      >
        <div className="slide-copy">
          <h2>{slide.title}</h2>
          <p>{slide.fact}</p>
          <a className="link" href={`#${slide.page}`}>
            Go to {slide.title}
          </a>
        </div>
        <div className="slide-picture">
          <img src={slide.image} alt={slide.alt} />
        </div>
      </section>
      <div className="slide-controls">
        <button
          className="arrow"
          type="button"
          aria-label="Previous slide"
          onClick={() => changeSlide(-1)}
        >
          ←
        </button>
        <span aria-live="polite">
          {slideIndex + 1} / {slides.length}
        </span>
        <button
          className="arrow"
          type="button"
          aria-label="Next slide"
          onClick={() => changeSlide(1)}
        >
          →
        </button>
      </div>
    </>
  );
}

export default SlideShow;
