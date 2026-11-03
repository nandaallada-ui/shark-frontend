import './NavMenu.css';
import NavItem from './NavItem';

const NavMenu = ({ currentPage, onNavigate }) => {
  const navlinks = [
    { label: 'Shark facts', page: 'facts' },
    { label: 'Shark behaviors', page: 'behaviors' },
    { label: 'Global warming', page: 'warming' },
    { label: 'Shark subspecies', page: 'subspecies' },
    {
      label: currentPage === 'subspecies' ? 'contact us' : 'Contact',
      page: 'contact',
    },
    { label: 'Citations', page: 'citations' },
  ];

  return (
    <nav id="mnav" className="nav-menu">
      <ul className="nav-list">
        {navlinks.map((link) => (
          <NavItem
            key={link.page}
            label={link.label}
            href={`#${link.page}`}
            current={currentPage === link.page}
            onNavigate={onNavigate}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;