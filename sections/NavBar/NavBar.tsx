import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar" style={{ paddingTop: '15px' }}>
      <ul className="navbar-left" >
        <li>
          <a href="#hero" className="home-tab" style={{ fontSize: '30px'}}>JW.</a>
        </li>
      </ul>
      <ul className="navbar-right">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
