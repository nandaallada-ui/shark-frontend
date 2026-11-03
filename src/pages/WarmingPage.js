import Footer from '../components/Footer';
import FactList from '../components/FactList';
import PageTitle from '../components/PageTitle';
import './WarmingPage.css';

const imagePath = (filename) => `${process.env.PUBLIC_URL}/images/${filename}`;

function WarmingPage() {
  const waysToHelp = [
    'Reducing Poaching by introducing new bills that control poaching',
    'Reducing our contribution to climate change globally by (generally) saving power and waste we produce',
    'informing others about global issues such as global warming and poaching',
  ];

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
            <FactList facts={waysToHelp} />
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

export default WarmingPage;
