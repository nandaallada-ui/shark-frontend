import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import SharkCard from '../components/SharkCard';
import './SubspeciesPage.css';

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

function SubspeciesPage() {
  return (
    <>
      <main id="main-content">
        <PageTitle>Shark subspecies</PageTitle>
        <h2 className="page-title species-title">Shark subspecies</h2>
        <div className="species-grid">
          {sharks.map((shark) => (
            <SharkCard key={shark.name} shark={shark} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SubspeciesPage;
