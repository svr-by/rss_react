import { NavLink, Link } from 'react-router-dom';
import { Paths } from '../../app/App';
import logo from '../../assets/img/logo.png';
import './Header.css';

function Header() {
  const navItems = [
    {
      name: 'Dictionary',
      href: Paths.home,
    },
    {
      name: 'Create word',
      href: Paths.form,
    },
    {
      name: 'About us',
      href: Paths.about,
    },
  ];

  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <div className="logo">
          <Link to={Paths.home}>
            <img src={logo} className="logo__img" alt="Logo" />
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav__list">
            {navItems.map((page) => (
              <li key={page.name} className="nav__item">
                <NavLink className="nav__link" to={page.href} end>
                  {page.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
