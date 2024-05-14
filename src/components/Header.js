import {Link} from 'react-router-dom'

import { useState } from 'react';


function Header() {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  const closeMenu = () => {
    setExpanded(false);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <header className='header' id='btnTop'>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light ${expanded ? 'justify-content-between' : 'justify-content-center'}`}>
        <div className="container">
          <Link className="navbar-brand" onClick={scrollTop}>John DOE</Link>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
            <ul className={`navbar-nav ${expanded ? 'ml-auto' : 'justify-content-end'}`}>
              <li className="nav-item" onClick={() => {closeMenu(); scrollTop();}}>
                <Link className="nav-link" to="/">Accueil</Link>
              </li>
              <li className="nav-item" onClick={() => {closeMenu(); scrollTop();}}>
                <Link className="nav-link" to="/ServicesPage">Services</Link>
              </li>
              <li className="nav-item" onClick={() => {closeMenu(); scrollTop();}}>
                <Link className="nav-link" to="/RealisationPage">Réalisations</Link>
              </li>
              <li className="nav-item" onClick={() => {closeMenu(); scrollTop();}}>
                <Link className="nav-link" to="/BlogPage">Blog</Link>
              </li>
              <li className="nav-item" onClick={() => {closeMenu(); scrollTop();}}>
                <Link className="nav-link" to="/AboutPage">Me contacter</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;





/*function Header() {
  return (
    <div>
      <header>
        <a className='btnTop' href='#btnTop'>John DOE</a>
        <nav className='MenuNav'>
          <Link id='LinkNav' to="/">Accueil</Link>
          <Link id='LinkNav' to="/ServicesPage">Services</Link>
          <Link id='LinkNav' to="/RealisationPage/">Réalisations</Link>
          <Link id='LinkNav' to="/BlogPage/">blog</Link>
          <Link id='LinkNav' to="/AboutPage/">Me contacter</Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;*/
