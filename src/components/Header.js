import { useState } from 'react';
import './Header.css';
import Brand from './Brand';
import NavMenu from './NavMenu';

const Header = ({ currentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Brand />
      <input
        className="nav-check"
        type="checkbox"
        id="navcheck"
        checked={menuOpen}
        onChange={(event) => setMenuOpen(event.target.checked)}
        aria-label="Toggle navigation menu"
      />
      <label id="navtoggle" htmlFor="navcheck">
        ☰ Menu
      </label>
      <NavMenu
        currentPage={currentPage}
        onNavigate={() => setMenuOpen(false)}
      />
    </header>
  );
};

export default Header;