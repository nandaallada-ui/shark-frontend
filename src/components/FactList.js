import { Tooltip } from 'react-tooltip';
import './FactList.css';

function FactList({ facts, tooltipId, label }) {
  return (
    <>
      <ul className="fact-list">
        {facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
      {tooltipId && (
        <>
          <button
            className="fact-info"
            type="button"
            data-tooltip-id={tooltipId}
            data-tooltip-content={`These ${label} are provided for general educational use.`}
            aria-label={`About these ${label.toLowerCase()}`}
          >
            i
          </button>
          <Tooltip id={tooltipId} />
        </>
      )}
    </>
  );
}

export default FactList;
