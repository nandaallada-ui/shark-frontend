import CitationItem from '../components/CitationItem';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import './CitationsPage.css';

const sources = [
  {
    description:
      'OCEARCH, “Landmark Study of Atlantic White Shark Movements Published by OCEARCH & Its Collaborators.” Dec. 9th, 2022.',
    label: 'OCEARCH landmark study',
    url: 'https://www.ocearch.org/blog/landmark-study-of-atlantic-white-shark-movements-published-by-ocearch-its-collaborators/',
  },
  {
    description:
      'Smithsonian, “Shark Finning: Sharks Turned Prey.” August 2013.',
    label: 'Smithsonian article',
    url: 'https://ocean.si.edu/ocean-life/sharks-rays/shark-finning-sharks-turned-prey',
  },
];

function CitationsPage() {
  return (
    <>
      <main id="main-content">
        <PageTitle>Citations</PageTitle>
        <p id="intro">Sources used for the text and images on this site.</p>
        <section className="topic citations-topic">
          <div className="one">
            <h2>Text sources</h2>
            <ol className="citations-list">
              {sources.map((source) => (
                <CitationItem key={source.url} source={source} />
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CitationsPage;
