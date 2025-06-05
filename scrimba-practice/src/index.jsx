
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge:
 * 
 * Using flexbox, line up the `li`s horizontally and put them inline
 * with the React logo.
 * 
 * NOTE: for practice's sake, don't select any
 * elements, but use classes for all styling.
 */



function OmmyFacts () {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

function Header () {
    return (
        <header className="header-wrapper">
            <img src="react-logo.png" width="40px" alt="React logo" />
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

function MainContent () {
  return (
    <main>
    <h1>Reasons Why Ommy is the Best Pelican!</h1>
    <ol>
      <li>Ommy Fly!</li>
      <li>Ommy love pelow!</li>
      <li>ommy sleep now...</li>
    </ol>
  </main>
  )
}

function Footer () {
  return (
    <footer>
      <p>© 20xx Mucha development. All rights reserved </p>
    </footer>
  )
}

root.render(
    <OmmyFacts />
)