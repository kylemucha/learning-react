export default function Header () {
    return (
        <header className="header-wrapper">
            <img className="react-image"src="react-logo.png" alt="React logo" />
            <nav>
              <ul className="nav-list">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
        </header>
    )
}