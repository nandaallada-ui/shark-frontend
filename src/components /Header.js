import './Header.css';
import Brand from './Brand';
import NavMenu from './NavMenu';

const Header = () => {
  return (
    <header className="site-header">
      <Brand />
      <NavMenu />
    </header>
  );
};

export default Header;