import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import './BehaviorsPage.css';

const behaviors = [
  {
    title: 'Feeding',
    description:
      'Sharks have varying diets depending on the species. Some munch on tiny plankton filtered through their gills, while others hunt seals, fish, and even sea turtles using powerful jaws.',
  },
  {
    title: 'Hunting styles',
    description:
      'Some sharks are ambush predators hiding in the reef shadows, while others rely on pure speed and endurance to track down fast-moving school fish out in the open ocean.',
  },
  {
    title: 'Social behavior',
    description:
      'Even though they are mostly seen as solitary animals, lots of shark species actually form loose groups or migrate together by the hundreds during certain seasons.',
  },
  {
    title: 'Sharks and humans',
    description:
      'Interactions usually happen near coastlines where surfing or swimming takes place. Remember that humans are not part of their natural diet!',
  },
];

function BehaviorSection({ title, description }) {
  return (
    <section className="behavior-section">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}

function BehaviorsPage() {
  return (
    <>
      <main id="main-content" className="reading-page">
        <PageTitle>Shark behaviors</PageTitle>
        <p className="behaviors-intro">
          Understanding how sharks behave helps researchers protect them and
          keeps swimmers safer in the ocean.
        </p>
        {behaviors.map((behavior) => (
          <BehaviorSection
            key={behavior.title}
            title={behavior.title}
            description={behavior.description}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default BehaviorsPage;
