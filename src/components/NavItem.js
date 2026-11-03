import './NavItem.css';

const NavItem = ({ label, href, current, onNavigate }) => {
  return (
    <li className="nav-item">
      <a
        className={`nav-link${current ? ' current' : ''}`}
        href={href}
        aria-current={current ? 'page' : undefined}
        onClick={onNavigate}
      >
        {label}
      </a>
    </li>
  );
};

export default NavItem;