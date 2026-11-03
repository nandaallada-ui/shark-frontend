import FactList from './FactList';
import './SharkCard.css';

const imagePath = (filename) => `${process.env.PUBLIC_URL}/images/${filename}`;

function SharkCard({ shark }) {
  return (
    <article className="species">
      <h2>{shark.name}</h2>
      <img src={imagePath(shark.image)} alt={shark.alt} />
      <FactList facts={shark.facts} />
    </article>
  );
}

export default SharkCard;
