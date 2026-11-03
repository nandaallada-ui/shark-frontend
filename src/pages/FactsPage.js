import FactList from '../components/FactList';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import './FactsPage.css';

const imagePath = (filename) => `${process.env.PUBLIC_URL}/images/${filename}`;

function FactsPage() {
  const facts = [
    'Sharks do not hunt humans in any capacity.',
    'Sharks are incredibly curious creatures.',
    'Sharks have existed longer than trees.',
  ];

  return (
    <>
      <main id="main-content">
        <PageTitle>Shark facts</PageTitle>
        <section className="topic">
          <div className="one">
            <h2>Quick facts</h2>
            <FactList facts={facts} tooltipId="quick-facts" label="Quick facts" />
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

export default FactsPage;
