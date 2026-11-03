function CitationItem({ source }) {
  return (
    <li>
      {source.description}{' '}
      <a href={source.url} target="_blank" rel="noreferrer">
        {source.label}
      </a>
    </li>
  );
}

export default CitationItem;
