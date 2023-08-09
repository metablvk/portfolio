import {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './navbar.styles.css';
import {links} from './constants';

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const location = useLocation();
  const handleClick = () => setMenuState(!menuState);
  const {pathname} = location;
  console.log(pathname);
  useEffect(() => {
    // Hide scroll bar when menu is open
    if (menuState) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }, [menuState]);
  return (
    <div className="relative">
      <div className="container mt-4 flex justify-between">
        <div className="navbar-brand text-lg">
          <Link to="/">@metablvk</Link>
        </div>
        <button
          onClick={handleClick}
          className={`hamburger lg:hidden focus:outline-none ${
            menuState ? `open` : ''
          }`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        {/* Desktop Nav */}
        <div className={`hidden lg:block space-x-4 text-lg tracking-widest`}>
          {links.map((link, i) => (
            <Link to={link[0]} key={i}>
              {link[1]}{' '}
              <span
                className={link[0] == pathname ? 'text-custom-purple' : ''}
              ></span>
            </Link>
          ))}
        </div>
      </div>
      <div
        className={`${
          menuState ? '' : 'hidden'
        } border-t-2 border-custom-purple mt-3 z-20 mobile-menu  text-2xl  right-0 left-0 w-full   absolute  lg:hidden`}
      >
        <div className="container flex flex-col items-end justify-end h-screen pb-40 space-y-4">
          {links.map((link, i) => (
            <Link to={link[0]} key={i} onClick={handleClick}>
              {link[1]}{' '}
              <span
                className={link[0] == pathname ? 'text-custom-purple' : ''}
              ></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
