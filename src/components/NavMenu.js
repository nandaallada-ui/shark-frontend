import './NavMenu.css';
import NavItem from './NavItem';

const NavMenu = () => {
  const navlinks = [
    { label: 'Shark facts', href: '#facts' },
    { label: 'Shark behaviors', href: '#behaviors' },
    { label: 'Global warming', href: '#warming' },
    { label: 'Shark subspecies', href: '#subspecies' },
    { label: 'Contact', href: '#contact' },
    { label: 'Citations', href: '#citations' },
  ];

  return (
    <nav className="nav-menu">
      <ul className="nav-list">
        {navlinks.map((link) => (
          <NavItem key={link.label} label={link.label} href={link.href} />
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;