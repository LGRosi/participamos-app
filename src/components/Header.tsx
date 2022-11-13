import { NavLink } from './ActiveNavLink';

function Header() {
  return (
    <>
        <header>
            <h1>Participamos</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                     </li>
                    <li>
                        <NavLink to="/search-page">Search-page</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  );
}

export default Header;
