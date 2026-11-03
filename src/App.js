import { useEffect, useState } from 'react';
import Header from './components/Header';
import './App.css';

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

const sharks = [
  {
    name: 'Basking shark',
    image: 'baskingshark.jpg',
    alt: 'a basking shark, feeding',
    facts: [
      'Lifespan: 50 years',
      'Size: 7 to 8.5 meters (20-23 feet)',
      'Habitat: Coastal and ocean waters',
      'Diet: Plankton',
    ],
  },
  {
    name: 'Lemon shark',
    image: 'lemonshark.jpg',
    alt: 'a lemon shark',
    facts: [
      'Lifespan: 25-30 years',
      'Size: 3 meters (about 10 feet)',
      'Habitat: Shallow and coastal waters',
      'Diet: Fish and crustaceans',
    ],
  },
  {
    name: 'Great white shark',
    image: 'shark.jpg',
    alt: 'a great white shark',
    facts: [
      'Lifespan: 70 years',
      'Size: 3 to 6 meters (11-21 feet)',
      'Habitat: Temperate and tropical offshore waters',
      'Diet: Seals, sea lions, and large fish',
    ],
  },
];

function getPageFromHash() {
  const page = window.location.hash.slice(1);
  return [
    'home',
    'facts',
    'behaviors',
    'warming',
    'subspecies',
    'contact',
    'citations',
  ].includes(page)
    ? page
    : null;
}

function PageTitle({ children }) {
  return <h1 className="page-title">{children}</h1>;
}

function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slide = slides[slideIndex];
  const changeSlide = (direction) => {
    setSlideIndex((index) => (index + direction + slides.length) % slides.length);
  };

  return (
    <>
      <main id="main-content" className="home-main">
        <section className="topic slideshow" aria-label="Shark page slideshow">
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
      </main>
      <Footer />
    </>
  );
}

function FactsPage() {
  return (
    <>
      <main id="main-content">
        <PageTitle>Shark facts</PageTitle>
        <section className="topic">
          <div className="one">
            <h2>Quick facts</h2>
            <ul>
              <li>Sharks do not hunt humans in any capacity.</li>
              <li>Sharks are incredibly curious creatures.</li>
              <li>Sharks have existed longer than trees.</li>
            </ul>
          </div>
          <div className="one">
            <img src={imagePath('GWB.webp')} alt="shark biting boat" />
          </div>
        </section>
        <section className="topic flip">
          <div className="one">
            <h2>Myths vs. reality</h2>
            <p>
              Sharks do not hunt humans intentionally. While 5-10 shark attacks
              occur yearly, which can occur for a variety of reasons, most scuba
              divers report being ignored by sharks.
            </p>
          </div>
          <div className="one">
            <img src={imagePath('lemonshark.jpg')} alt="lemon shark" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function BehaviorsPage() {
  return (
    <>
      <main id="main-content" className="reading-page">
        <PageTitle>Shark behaviors</PageTitle>
        <p>
          Understanding how sharks behave helps researchers protect them and
          keeps swimmers safer in the ocean.
        </p>
        <h3>Feeding</h3>
        <p>
          Sharks have varying diets depending on the species. Some munch on tiny
          plankton filtered through their gills, while others hunt seals, fish,
          and even sea turtles using powerful jaws.
        </p>
        <h3>Hunting styles</h3>
        <p>
          Some sharks are ambush predators hiding in the reef shadows, while
          others rely on pure speed and endurance to track down fast-moving
          school fish out in the open ocean.
        </p>
        <h3>Social behavior</h3>
        <p>
          Even though they are mostly seen as solitary animals, lots of shark
          species actually form loose groups or migrate together by the hundreds
          during certain seasons.
        </p>
        <h3>Sharks and humans</h3>
        <p>
          Interactions usually happen near coastlines where surfing or swimming
          takes place. Remember that humans are not part of their natural diet!
        </p>
      </main>
      <Footer />
    </>
  );
}

function WarmingPage() {
  return (
    <>
      <main id="main-content">
        <PageTitle>Poaching and global warming</PageTitle>
        <section className="topic">
          <div className="two">
            <h2>Poaching and finning</h2>
            <p>
              According to a article published by the smithsonian and the
              national museum of history, around 100 Million sharks are poached
              for their fins.
            </p>
          </div>
          <div className="one">
            <img
              src={imagePath('shark.jpg')}
              alt="a unfinned shark, swimming"
            />
          </div>
        </section>
        <section className="topic flip">
          <div className="two">
            <h2>Global warming and the oceans</h2>
            <p>
              According to OCEARCH, a not for profit dedicated to marine studies,
              sharks have been migrating north due to rapidly increasing
              temperatures within the south.
            </p>
          </div>
          <div className="one">
            <img
              src={imagePath('globalwarm.jpg')}
              alt="a shark swimming beneath sunlit water"
            />
          </div>
        </section>
        <section className="topic">
          <div className="one">
            <h2>What can help</h2>
            <ul>
              <li>
                Reducing Poaching by introducing new bills that control poaching
              </li>
              <li>
                Reducing our contribution to climate change globally by
                (generally) saving power and waste we produce
              </li>
              <li>
                informing others about global issues such as global warming and
                poaching
              </li>
            </ul>
            <a className="link" href="#citations">
              See our sources
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SubspeciesPage() {
  return (
    <>
      <main id="main-content">
        <PageTitle>Shark subspecies</PageTitle>
        <h2 className="page-title species-title">Shark subspecies</h2>
        <div className="species-grid">
          {sharks.map((shark) => (
            <article className="species" key={shark.name}>
              <h2>{shark.name}</h2>
              <img src={imagePath(shark.image)} alt={shark.alt} />
              <ul>
                {shark.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

function ContactPage() {
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("This demo form isn't connected to a message service.");
  }

  return (
    <main id="main-content" className="contact-main">
      <PageTitle>Contact me</PageTitle>
      <section className="topic contact-topic">
        <form id="contactform" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required minLength="2" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            minLength="10"
          />

          <button className="arrow" type="submit">
            Send
          </button>
          {message && (
            <p className="form-result" role="status">
              {message}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

function CitationsPage() {
  return (
    <>
      <main id="main-content">
        <PageTitle>Citations</PageTitle>
        <p id="intro">Sources used for the text and images on this site.</p>
        <section className="topic">
          <div className="one">
            <h2>Text sources</h2>
            <ol className="citations">
              <li>
                OCEARCH, “Landmark Study of Atlantic White Shark Movements
                Published by OCEARCH &amp; Its Collaborators.” Dec. 9th, 2022.{' '}
                <a href="https://www.ocearch.org/blog/landmark-study-of-atlantic-white-shark-movements-published-by-ocearch-its-collaborators/">
                  OCEARCH landmark study
                </a>
              </li>
              <li>
                Smithsonian, “Shark Finning: Sharks Turned Prey.” August 2013.{' '}
                <a href="https://ocean.si.edu/ocean-life/sharks-rays/shark-finning-sharks-turned-prey">
                  Smithsonian article
                </a>
              </li>
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer id="mainfoot">
      <p>© footer</p>
      <p>
        <a href="#home">Home</a> | <a href="#citations">Sources</a>
      </p>
    </footer>
  );
}

const pageComponents = {
  home: HomePage,
  facts: FactsPage,
  behaviors: BehaviorsPage,
  warming: WarmingPage,
  subspecies: SubspeciesPage,
  contact: ContactPage,
  citations: CitationsPage,
};

const pageTitles = {
  home: 'Sharks',
  facts: 'Shark Facts',
  behaviors: 'Shark Behaviors',
  warming: 'Poaching and Global Warming',
  subspecies: 'Shark Subspecies',
  contact: 'Contact',
  citations: 'Citations',
};

function App() {
  const [page, setPage] = useState(() => getPageFromHash() || 'home');
  const Page = pageComponents[page];

  useEffect(() => {
    document.title = pageTitles[page];
  }, [page]);

  useEffect(() => {
    function handleHashChange() {
      const nextPage = getPageFromHash();
      if (nextPage !== null) {
        setPage(nextPage);
      }
      if (nextPage !== null && nextPage !== page) {
        window.scrollTo(0, 0);
      }
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [page]);

  return (
    <div id="content" className={page === 'contact' ? 'contact-content' : ''}>
      <a className="skip" href="#main-content">
        Skip to main content
      </a>
      {page !== 'contact' && <Header currentPage={page} />}
      <Page />
    </div>
  );
}

export default App;
